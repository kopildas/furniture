
export const actionType = {
  SET_USER: "SET_USER",
  DEL_USER: "DEL_USER",
  SET_FOOD_ITEMS: "SET_FOOD_ITEMS",
  SET_CART_SHOW: "SET_CART_SHOW",
  SET_CART_ITEMS: "SET_CART_ITEMS",

  REGISTER_USER_BEGIN: "REGISTER_USER_BEGIN",
  REGISTER_USER_SUCCESS: "REGISTER_USER_SUCCESS",
  REGISTER_USER_ERROR: "REGISTER_USER_ERROR",

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
        };
    case actionType.SET_FOOD_ITEMS:
      return {
        ...state,
        foodItem: action.foodItem,
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