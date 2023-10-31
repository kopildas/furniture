
export const fetchLocalStorageData = () => {
  const userInfo =
    localStorage.getItem("user") !== "undefined"
      ? JSON.parse(localStorage.getItem("user"))
      : localStorage.clear();

  return userInfo;
};

export const fetchCartData = () => {
  const cartInfo =
    localStorage.getItem("cartItems") !== "undefined"
      ? JSON.parse(localStorage.getItem("cartItems"))
      : localStorage.clear();

  return cartInfo ? cartInfo : [];
};

export const fetchtoken = () => {
  const token =
    localStorage.getItem("token") !== "undefined"
      ? localStorage.getItem("token")
      : localStorage.clear();

  return token ? token : [];
};