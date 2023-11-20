
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

export const fetchProduct = () => {
  const product =
    localStorage.getItem("product") !== "undefined"
      ? JSON.parse(localStorage.getItem("product"))
      : localStorage.clear();

  return product ? product : [];
};

export const fetchtoken = () => {
  const token =
    localStorage.getItem("token") !== "undefined"
      ? localStorage.getItem("token")
      : localStorage.clear();

  return token ? token : [];
};

export const fetchFavorite = () => {
  const favorite_Items =
  localStorage.getItem("favorite_Items") !== "undefined"
    ? JSON.parse(localStorage.getItem("favorite_Items"))
    : localStorage.clear();

return favorite_Items ? favorite_Items : [];
};