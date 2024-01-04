import React from "react";
import Link from "next/link";
import Example from "./react-bootstrap";
import DropdownNav from "@/components/bootstrap/DropdownNav";

export default function ConfirmIndex() {
  return (
    <>
      <>
        {/* Button trigger modal */}
        <button
          type="button"
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          html-boostrap
        </button>
        {/* Modal */}
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  Modal title
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">...</div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <Link
                  className="nav-link  btn btn-outline-light"
                  href="/cart"
                  role="button"
                >
                  <button type="button" className="btn btn-primary">
                    Save changes
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </>
<br />
<br />
<br />
<DropdownNav></DropdownNav>

<Example></Example>
      <div className="container check-out">
        <div className="d-flex justify-content-center">
          <img
            src="/images/product/steps_to_complete.png"
            alt="steps_to_complete"
          />
        </div>

        <div className="card border-primary mb-3" style={{ width: "40rem" }}>
          <div className="card-header card-big-title">購物資訊</div>
          <div className="card-body">
            <div className="row extinct-product">
              <div className="col-3">
                <img
                  src="/images/product/638348807730300000 (1).jfif"
                  alt="name of product"
                  className="img-thumbnail"
                />
              </div>
              <div className="col-6">
                tails&me 尾巴與我 經典尼龍帶系列 單色項圈
                <div>
                  <span>數量：</span>
                  <span>2</span>
                </div>
              </div>
              <div className="col-3 text-end">
                <div className="dollar">
                  <span>NT$</span>
                  <span>200</span>
                </div>
              </div>
            </div>

            <div className="row extinct-product">
              <div className="col-3">
                <img
                  src="/images/product/638348807730300000 (1).jfif"
                  alt="name of product"
                  className="img-thumbnail"
                />
              </div>
              <div className="col-6">
                tails&me 尾巴與我 經典尼龍帶系列 單色項圈
                <div>
                  <span>數量：</span>
                  <span className="flex-grow-1 ms-1">2</span>
                </div>
              </div>
              <div className="col-3 text-end">
                <div className="dollar">
                  <span>NT$</span>
                  <span>200</span>
                </div>
              </div>
            </div>

            <div className="row extinct-product">
              <div className="col-3">
                <img
                  src="/images/product/638348807730300000 (1).jfif"
                  alt="name of product"
                  className="img-thumbnail"
                />
              </div>
              <div className="col-6">
                tails&me 尾巴與我 經典尼龍帶系列 單色項圈
                <div>
                  <span>數量：</span>
                  <span>2</span>
                </div>
              </div>
              <div className="col-3 text-end">
                <div className="dollar">
                  <span>NT$</span>
                  <span>200</span>
                </div>
              </div>
            </div>

            <div className="row card-padding12">
              <div className="col-9 dollar">本訂單須付款金額</div>
              <div className="col-3 text-end">
                <div className="dollar">
                  <span>NT$</span>
                  <span>200</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card border-primary mb-3" style={{ width: "40rem" }}>
          <div className="card-header card-big-title">訂購人資訊</div>
          <div className="card-body">
            <p className="font-grey-title">姓名：</p>
            <span>王小明</span>
            <br />
            <p className="font-grey-title">電話：</p>
            <span>0912345678</span>
            <br />
            <p className=" font-grey-title">Email：</p>
            <span>ispan@ispan.com</span>
          </div>

          <div className="card-header card-big-title">取貨資訊</div>
          <div className="card-body">
            <p className=" font-grey-title">取貨方式：</p>
            <span>宅配</span>
            <br />
            <p className=" font-grey-title">收件者：</p>
            <span>王小明</span>
            <br />
            <p className=" font-grey-title">收件地址：</p>
            <span>台北市復興南路一段390號2樓</span>
          </div>
          <div className="card-header card-big-title">付款資訊</div>
          <div className="card-body">
            <p className=" font-grey-title">付款方式：</p>
            <span>信用卡</span>
          </div>
        </div>

        <div className="list-form">
          <div className="d-flex justify-content-center">
            <div className="direction-column">
              <div className="container text-center mt-5">
                <div className="row">
                  <div className="col d-grid">
                    <button
                      type="button"
                      className="btn btn-outline-primary btn-lg"
                    >
                      回前一頁
                    </button>
                  </div>
                  <div className="col d-grid">
                    <button className="btn btn-primary btn-lg" type="submit">
                      送出訂單
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
