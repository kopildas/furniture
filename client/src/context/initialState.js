import { fetchCartData, fetchLocalStorageData,fetchtoken,fetchProduct } from "../utils/fetchLocalStorageData"

const userInfo=fetchLocalStorageData();
const cartInfo=fetchCartData();
const token = fetchtoken()
const product = fetchProduct()

export const initialState = {
    user: userInfo,
    token: token,
    product: product,
    cartShow:false,
    updateProd:false,
    cartItems: cartInfo,
    shop_category : "All",
}