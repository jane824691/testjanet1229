export const API_SERVER = 'http://localhost:3002'

export const AB_LIST = API_SERVER + '/address-book/api'

export const PRODUCT = API_SERVER + '/product/api' //list
export const ONE_PRODUCT = API_SERVER + '/product/one' // /product/one/2
export const ORDER_LIST_ADD = API_SERVER + '/order-list/add'
export const ORDER_LIST = API_SERVER + '/order-list/api'
export const ONE_ORDER = API_SERVER + '/order-list/one' // /order-list/one/2




export const AB_ADD = API_SERVER + '/address-book/add' // method: POST

// 取得某一筆
// http://localhost:3002/address-book/api/edit/977
export const AB_GET_ONE = API_SERVER + '/address-book/api/edit' // method: GET
//AB_GET_ONE + "/977"

// 修改某一筆
// /address-book/edit/:sid
export const AB_EDIT_ONE = API_SERVER + '/address-book/edit' // method: PUT

// 刪除某一筆
// /address-book/:sid
export const AB_DEL_ONE = API_SERVER + '/address-book' // method: DELETE

// ---------- 登入
export const LOGIN = API_SERVER + '/login-jwt' // method: POST, 欄位 account, password

// --- 會員相關的路由
export const PROFILE = API_SERVER + '/profile' // method: GET, 取得用戶資料
