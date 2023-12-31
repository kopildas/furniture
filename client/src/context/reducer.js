export const actionType = {
  SET_USER: "SET_USER",
  LOG_OUT_USER: "LOG_OUT_USER",
  SET_PRODUCTS: "SET_PRODUCTS",
  UPDATE_PRODUCTS: "UPDATE_PRODUCTS",
  SET_CART_SHOW: "SET_CART_SHOW",
  SET_CART_ITEMS: "SET_CART_ITEMS",

  SET_FAVORITE_ITEMS: "SET_FAVORITE_ITEMS",

  SET_SHOP_CATEGORY: "SET_SHOP_CATEGORY",

  REGISTER_USER_BEGIN: "REGISTER_USER_BEGIN",
  REGISTER_USER_SUCCESS: "REGISTER_USER_SUCCESS",
  REGISTER_USER_ERROR: "REGISTER_USER_ERROR",
  REGISTER_USER_UPDATE: "REGISTER_USER_UPDATE",
  
  LOGIN_USER_BEGIN: "LOGIN_USER_BEGIN",
  LOGIN_USER_SUCCESS: "LOGIN_USER_SUCCESS",
  LOGIN_USER_ERROR: "LOGIN_USER_ERROR",
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionType.SET_USER:
      return {
        ...state,
        user: action.user,
      };

    case actionType.REGISTER_USER_SUCCESS:
      return {
        ...state,
        user: action.user,
        token: action.token,
      };
    case actionType.REGISTER_USER_UPDATE:
      return {
        ...state,
        user: action.user,
      };
    case actionType.LOG_OUT_USER:
      return {
        ...state,
        user: action.user,
        token: action.token,
      };

    case actionType.SET_SHOP_CATEGORY:
      return {
        ...state,
        shop_category: action.shop_category,
      };
    case actionType.SET_FAVORITE_ITEMS:
      return {
        ...state,
        favorite_Items: action.favorite_Items,
      };

    case actionType.LOGIN_USER_SUCCESS:
      return {
        ...state,
        user: action.user,
        token: action.token,
      };
    case actionType.DEL_USER:
      return {
        ...state,
        user: null,
         token: null,
      };
    case actionType.SET_PRODUCTS:
      return {
        ...state,
        product: action.product,
      };
    case actionType.UPDATE_PRODUCTS:
      return {
        ...state,
        product: action.product,
      };
    case actionType.SET_CART_SHOW:
      return {
        ...state,
        cartShow: action.cartShow,
      };
    case actionType.SET_CART_ITEMS:
      return {
        ...state,
        cartItems: action.cartItems,
      };

    default:
      return state;
  }
};

export default reducer;
