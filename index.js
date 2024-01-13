// import "dotenv/config";
import express from "express";
import session from "express-session";
import dayjs from "dayjs";
import moment from "moment-timezone";
import cors from "cors";
import mysql_session from "express-mysql-session";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import sales from "./data/sales.json" assert { type: "json" };
// import multer from "multer";
// const upload = multer({ dest: "tmp_uploads/" });
import upload from "./utils/upload-imgs.js";
import db from "./utils/connect-mysql.js";

import admin2Router from "./routes/admin2.js";
import productRouter from "./routes/product.js";
import orderListRouter from "./routes/order-list.js";

const app = express();

app.set("view engine", "ejs");

// top-level middlewares
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const MysqlStore = mysql_session(session);
const sessionStore = new MysqlStore({}, db);
app.use(
  session({
    saveUninitialized: false,
    resave: false,
    store: sessionStore,
    secret: "kdgdf9485498KIUGLKIU45490",
  })
);

// 自訂頂層 middleware
app.use((req, res, next) => {
  res.locals.title = "PetPet佩佩星球";
  res.locals.pageName = "";

  res.locals.toDateString = (d) => dayjs(d).format("YYYY-MM-DD");
  res.locals.toDateTimeString = (d) => dayjs(d).format("YYYY-MM-DD HH:mm:ss");

  res.locals.session = req.session; // 讓 templates 可以取用 session

  // 取得某一個 http header
  const auth = req.get("Authorization");
  if (auth && auth.indexOf("Bearer ") === 0) {
    const token = auth.slice(7); // 去掉 "Bearer "
    try {
      const payload = jwt.verify(token, process.env.JWT_SECRET);
      // console.log({ payload });
      res.locals.jwt = payload;
    } catch (ex) {}
  }
  // 測試用
  // res.locals.jwt = { id: 15, email: "shin@ttt.com" };

  next();
});
// 定義路由
app.get("/", (req, res) => {
  res.locals.title = "首頁 | " + res.locals.title;

  res.render("home", { name: process.env.DB_NAME });
});

app.get("/json-sales", (req, res) => {
  res.locals.title = "JSON資料 | " + res.locals.title;
  res.locals.pageName = "json-sales";

  res.render("json-sales", { sales });
});

app.get("/my-params1/hello", (req, res) => {
  res.json({ hello: "shin" });
});

app.get("/my-params1/:action?/:id?", (req, res) => {
  res.json(req.params);
});

app.get(/^\/m\/09\d{2}-?\d{3}-?\d{3}$/i, (req, res) => {
  let u = req.url.slice(3).split("?")[0];
  u = u.split("-").join("");

  res.send({ u });
});

app.use("/admins", admin2Router);
app.use("/product", productRouter);
app.get("/try-sess", (req, res) => {
  req.session.n = req.session.n || 0;
  req.session.n++;
  res.json(req.session);
});


app.use("/order-list", orderListRouter);

// app.get("/try-db", async (req, res) => {
//   const [results, fields] = await db.query(
//     `SELECT * FROM \`product\` WHERE 1`
//   );
//   res.json(results);
// });

app.get("/try-db", async (req, res) => {
  const [results, fields] = await db.query(
    `SELECT * FROM \`order-list\` WHERE 1`
  );
  res.json(results);
});

app.get("/yahoo", async (req, res) => {
  const r = await fetch("https://tw.yahoo.com/");
  const txt = await r.text();
  res.send(txt);
});

app.get("/login", async (req, res) => {
  res.render("login");
});
app.post("/login", async (req, res) => {
  const output = {
    success: false,
    code: 0,
    postData: req.body,
  };
  if (!req.body.email || !req.body.password) {
    // 資料不足
    output.code = 410;
    return res.json(output);
  }
  const sql = "SELECT * FROM members WHERE email=?";
  const [rows] = await db.query(sql, [req.body.email]);

  if (!rows.length) {
    // 帳號是錯的
    output.code = 400;
    return res.json(output);
  }
  const row = rows[0];
  const pass = await bcrypt.compare(req.body.password, row.password);
  if (!pass) {
    // 密碼是錯的
    output.code = 420;
    return res.json(output);
  }

  output.code = 200;
  output.success = true;
  // 設定 session
  req.session.admin = {
    id: row.id,
    email: row.email,
    nickname: row.nickname,
  };
  output.member = req.session.admin;
  res.json(output);
});
app.get("/logout", async (req, res) => {
  delete req.session.admin;
  res.redirect("/");
});

app.get("/try-jwt1", async (req, res) => {
  // jwt 加密
  const token = jwt.sign({ id: 12, account: "shin" }, process.env.JWT_SECRET);

  res.json({ token });
});
app.get("/try-jwt2", async (req, res) => {
  // jwt 解密
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTIsImFjY291bnQiOiJzaGluIiwiaWF0IjoxNzAzNTYxMDU2fQ.ZgaJZX1cNMH-GG99dQJRz-pJGqquf9LTBmgsSw7iPHE";

  const payload = jwt.verify(token, process.env.JWT_SECRET);

  res.json({ payload });
});

app.post("/login-jwt", async (req, res) => {
  const output = {
    success: false,
    code: 0,
    postData: req.body,
    id: 0,
    email: "",
    nickname: "",
    token: "",
  };
  if (!req.body.email || !req.body.password) {
    // 資料不足
    output.code = 410;
    return res.json(output);
  }
  const sql = "SELECT * FROM members WHERE email=?";
  const [rows] = await db.query(sql, [req.body.email]);

  if (!rows.length) {
    // 帳號是錯的
    output.code = 400;
    return res.json(output);
  }
  const row = rows[0];
  const pass = await bcrypt.compare(req.body.password, row.password);
  if (!pass) {
    // 密碼是錯的
    output.code = 420;
    return res.json(output);
  }

  output.code = 200;
  output.success = true;

  output.id = row.id;
  output.email = row.email;
  output.nickname = row.nickname;
  output.token = jwt.sign(
    { id: row.id, email: row.email },
    process.env.JWT_SECRET
  );

  res.json(output);
});

app.get("/profile", async (req, res) => {
  // res.locals.jwt: {id, email}
  const output = {
    success: false,
    error: "",
    data: {},
  };
  if(!res.locals.jwt?.id){
    output.error = "沒有權限";
    return res.json(output);
  }
  const [rows] = await db.query("SELECT `id`, `email`, `mobile`, `birthday`, `nickname` FROM `members` WHERE id=?", [res.locals.jwt.id]);
  if(!rows.length){
    output.error = "沒有這個會員";
    return res.json(output);
  }
  output.success = true;
  output.data = rows[0];
  res.json(output);
});

// 設定靜態內容的資料夾
app.use(express.static("public"));
app.use("/bootstrap", express.static("node_modules/bootstrap/dist"));
app.use("/jquery", express.static("node_modules/jquery/dist"));

// *************** 404 page *** 所有的路由都要放在此之前
app.use((req, res) => {
  res.status(404).send(`<h1>你484迷路了嗎</h1>`);
});

const port = process.env.WEB_PORT || 3001;

app.listen(port, () => {
  console.log(`express server: ${port}`);
});
