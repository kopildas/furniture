import { fetchCartData, fetchLocalStorageData,fetchtoken } from "../utils/fetchLocalStorageData"

const userInfo=fetchLocalStorageData();
const cartInfo=fetchCartData();
const token = fetchtoken()

export const initialState = {
    user: userInfo,
    token: token,
    foodItem: null,
    cartShow:false,
    cartItems: cartInfo,
    
}