import { motion } from "framer-motion";
import React, { useEffect, useReducer, useRef, useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BsCartPlusFill } from "react-icons/bs";
import { IoEyeSharp } from "react-icons/io5";
import { MdShoppingBasket } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "../../context/StateProvider";
import { actionType } from "../../context/reducer";
import ViewProduct from "./ViewProduct";
import { MdFavorite } from "react-icons/md";
import { fetchFavorite } from "../../utils/fetchLocalStorageData";

export default function ProductContainer({ data, grid = "grid", updateDATA }) {
  let [{ product, user, cartItems, favorite_Items }, dispatch] = useStateValue();

  const rowContainer = useRef();
  const [flag, setFlag] = useState(false);
  const [view, setView] = useState(false);
  const [specific_data, setSpecific_data] = useState(null);
  const [gridORlist, setGridORlist] = useState(false);
  const navigate = useNavigate();

  console.log(product);

  const stopEventPropagationTry = (event) => {
    if (event.target != event.currentTarget) {
      event.stopPropagation();
    }
  };

  const viewProd = (item) => {
    setSpecific_data(item);
    setView(!view);
  };

  const handleOnClose = () => {
    setView(!view);
  };
  useEffect(() => {
    if (grid === "grid") {
      setGridORlist(true);
      console.log("grid");
    } else {
      setGridORlist(false);
      console.log("dkfjs");
    }
  }, [grid]);


  // add to favorite functionalities

  const [favoriteData, setFavoriteData] = useState(null);

  const favoriteDispatch = () => {
    dispatch({
      type: actionType.SET_FAVORITE_ITEMS,
      favorite_Items: favoriteData,
    });
  };

  const fevo = (item) => {
    favorite_Items.map((f) => {
      if (f.item_id === favoriteData.item_id) {
        // const num = parseFloat(f.purchase_quantity);
        f.favorite = !f.favorite;
        // console.log(f.purchase_quantity);
      }
    });
    console.log(favorite_Items);
    dispatch({
      type: actionType.SET_FAVORITE_ITEMS,
      favorite_Items: [...favorite_Items, favoriteData],
    });
    localStorage.removeItem("favorite_Items");
    localStorage.setItem(
      "favorite_Items",
      JSON.stringify([...favorite_Items, favoriteData])
    );
    findFavorite()
  };

  const addToExistedFevorite = () => {
    console.log("gsd");
    console.log(favorite_Items);

    favorite_Items.map((f) => {
      if (f.item_id === favoriteData.item_id) {
        // const num = parseFloat(f.purchase_quantity);
        f.favorite = !f.favorite;
        // console.log(f.purchase_quantity);
      }
    });
    console.log(favorite_Items);
    dispatch({
      type: actionType.SET_FAVORITE_ITEMS,
      favorite_Items: [...favorite_Items],
    });
    localStorage.removeItem("favorite_Items");
    localStorage.setItem("favorite_Items", JSON.stringify([...favorite_Items]));
    if(favorite_Items){

      findFavorite()
    }
    // cart();
  };

  const update_fevorite = () => {
    let check = true;
    if (Array.isArray(favorite_Items) && favoriteData) {
      favorite_Items.map((f) => {
        if (f.item_id === favoriteData.item_id) {
          console.log("hb");

          addToExistedFevorite();
          check = false;
        }
      });
      if (check) {
        console.log("hb");

        fevo();
      }
    }
  };
  

  const addtoFavorite = (item) => {
    console.log(item);
    setFavoriteData((prevCartData) => ({
      ...prevCartData,
      // item
      item_id: item._id,
      item_name: item.item_name,
      sale: item.sale,
      price: item.price,
      category: item.category,
      purchase_quantity: 1,
      cartORadd: "cart",
      SKU: item.SKU,
      picture: item.image,
      offer: item.offer,
      favorite:true,
    }));
    console.log(favoriteData)

    // let check = true;
    // if (Array.isArray(favorite_Items) && favorite_Items) {
    //   console.log("hb");
    //   favorite_Items.map((f) => {
    //     console.log(f);

    //     if (f && f.item_id === item.item_id) {
    //       console.log("hb");

    //       addToExistedFevorite();
    //       check = false;
    //     }
    //   });
    //   if (check) {
    //     console.log("hb");

    //     fevo();
    //   }
    // }

    // product.map((f) => {
    //   if (f._id === item._id) {
    //     // console.log(f.cartORadd);
    //     f.favorite = true;
    //     // console.log(f.cartORadd);
    //     return;
    //   }
    // });
    // localStorage.removeItem("favorite_Items");
    // localStorage.setItem("favorite_Items", JSON.stringify([...product]));
    // updateDATA();
    
  };

  let pls = 0
  const [, forceUpdate] = useReducer((x) => x + 1, 0);

  const findFavorite = () => {
    favorite_Items=fetchFavorite()
    console.log(favorite_Items);

    if (Array.isArray(favorite_Items)) {data && 
      data.map((f) => {
        favorite_Items && favorite_Items.map((fav) => {
          if (f._id === fav.item_id) {
            f.favorite = fav.favorite;
          }
        });
      });
      forceUpdate();
    }
  };
  
  useEffect(() => {
    console.log(JSON.parse(localStorage.getItem("favorite_Items")));
  }, [favoriteData]);
  


  useEffect(() => {
    // This code will run every time cartData changes
    console.log(favoriteData);
    console.log(favorite_Items);
    update_fevorite();
    findFavorite()
    if(favorite_Items === []){

      console.log("asdf");
    }
  }, [favoriteData]);

 

  

  console.log(data);



  // add to cart functionalities
  const [cartData, setCartData] = useState(null);

  const cartDispatch = () => {
    // localStorage.setItem("cartItems", JSON.string(updatedItem));
    // console.log("hjo");
    // localStorage.removeItem("cartItems");
    // localStorage.setItem("cartItems", JSON.stringify([...cartItems, cartData]))
    dispatch({
      type: actionType.SET_CART_ITEMS,
      cartItems: cartData,
    });
  };

  const cart = (item) => {
    dispatch({
      type: actionType.SET_CART_ITEMS,
      cartItems: [...cartItems, cartData],
    });
    localStorage.removeItem("cartItems");
    localStorage.setItem("cartItems", JSON.stringify([...cartItems, cartData]));
    // cartItems.map((f) => {
    //   if (f.item_id === item._id) {
    //     const num = parseFloat(f.purchase_quantity);
    //     f.purchase_quantity = num + 1;
    //     flg = false;

    //   }

    // });
    // cartDispatch();
    // if (flg) {
    //   dispatch({
    //     type: actionType.SET_CART_ITEMS,
    //     cartItems: [...cartItems, cartData],
    //   });
    //   localStorage.setItem(
    //     "cartItems",
    //     JSON.stringify([...cartItems, cartData])
    //   );
    // }
  };

  const addToExistedCart = () => {
    console.log("gsd");
    cartItems.map((f) => {
      if (f.item_id === cartData.item_id) {
        const num = parseFloat(f.purchase_quantity);
        f.purchase_quantity = num + 1;
        console.log(f.purchase_quantity);
      }
    });
    dispatch({
      type: actionType.SET_CART_ITEMS,
      cartItems: [...cartItems],
    });
    localStorage.removeItem("cartItems");
    localStorage.setItem("cartItems", JSON.stringify([...cartItems]));
    // cart();
  };
  console.log(cartItems);

  const update = () => {
    let check = true;
    if (cartItems && cartData) {
      cartItems.map((f) => {
        if (f.item_id === cartData.item_id) {
          addToExistedCart();
          check = false;
        }
      });
      if (check) {
        cart();
      }
      // localStorage.removeItem("cartItems");
      // localStorage.setItem("cartItems", JSON.stringify([...cartItems, cartData]));
    }
  };

  /**
   * The function `addToCart` adds an item to the cart and updates the quantity if the item is already
   * in the cart.
   */
  let flg = true;

  const addtoCart = (item) => {
    console.log(item);
    setCartData((prevCartData) => ({
      ...prevCartData,
      item_id: item._id,
      item_name: item.item_name,
      sale: item.sale,
      price: item.price,
      category: item.category,
      purchase_quantity: 1,
      cartORadd: "cart",
      SKU: item.SKU,
      picture: item.image,
      offer: item.offer,
    }));

    product.map((f) => {
      if (f._id === item._id) {
        console.log(f.cartORadd);
        f.cartORadd = "add";
        console.log(f.cartORadd);
        return;
      }
    });
    localStorage.removeItem("product");
    localStorage.setItem("product", JSON.stringify([...product]));
    // updateDATA();
    // if (item.cartORadd === "cart") {
    //   // cart(item)
    //   console.log(cartData);
    //   console.log("cart");
    //   item.cartORadd = "add";

    // } else if (item.cartORadd === "add") {
    //   console.log("add");
    //   // addToExistedCart(item)
    // }
    // localStorage.setItem("cartItems", JSON.stringify(cartItems));
  };

  useEffect(() => {
    // This code will run every time cartData changes
    console.log(cartData);
    update();
  }, [cartData]);

  console.log(data);

  return (
    <div className="text-gray-900 z-30">
      {/* laptop view */}
      <div
        ref={rowContainer}
        className={`w-full hidden md:flex  items-center my-10 gap-6 md:gap-7 p-1 scroll-smooth ${
          flag
            ? "overflow-x-scroll scrollbar-none scroll-auto"
            : "overflow-x-hidden flex flex-wrap justify-center"
        } ${gridORlist ? null : "flex-col p-5"}`}
      >
        {data && Array.isArray(data) &&
          data.map((item) => (
            <div
              key={item?.id}
              onClick={() => navigate(`/singleitem/${item?._id}`)}
              className={`${
                gridORlist
                  ? "w-1/2  md:w-1/4 lg:w-1/4 xl:w-1/5 "
                  : "flex-col w-full"
              } ${
                flag ? "min-w-[320px]" : "min-w-[260px]"
              } h-auto bg-gray-50 bl rounded-lg  my-6 backdrop-blur-lg hover:drop-shadow-2xl`}
            >
              {/* <NavLink to={`/singlefood/${item?.id}`}> */}
              <div
                className={`${!gridORlist ? "flex flex-row" : "flex flex-col"}`}
              >
                <div className="flex items-center justify-center w-full bg-gray-50 rounded-br-[30px] z-30">
                  <div className="m-4 w-full z-30 hover:z-40">
                    <motion.img
                      whileHover={{ scale: 1.2 }}
                      src={item?.image}
                      alt=""
                      className={` h-60 ${
                        flag ? "rounded-lg" : "rounded-md"
                      }  -mt-7 drop-shadow-2xl ${
                        gridORlist ? "w-full" : "w-64"
                      }`}
                    />
                  </div>
                  {item.offer && (
                    <div>
                      <div className="w-14 h-6 bg-red-500 absolute top-5 left-2 z-30 rounded-e-md flex items-center justify-center">
                        <p>{item.offer}</p>
                      </div>
                      <div className="w-14 h-6 bg-red-400 absolute top-[29px] left-0 z-10"></div>
                      <div className="w-14 h-10 bg-red-200 absolute top-[30px] left-[14px] rotate-45 z-10"></div>
                    </div>
                  )}
                </div>
                <div
                  className={`w-10 h-10 bg-gray-300 absolute right-0 top-[13rem] z-10 ${
                    gridORlist ? "" : "hidden"
                  }`}
                ></div>

                <div className="bg-gray-300 p-4 rounded-tl-[30px] rounded-b-lg w-full z-10">
                  <div className="flex flex-col items-start justify-between w-full">
                    <p className="text-base font-semibold text-textColor md:text-lg">
                      ratings
                    </p>
                    <p
                      className={`text-base font-semibold text-textColor ${
                        flag ? "text-md" : "md:text-lg"
                      }`}
                    >
                      {item?.item_name} {pls}
                    </p>
                  </div>
                  <div className="flex items-start flex-row justify-between gap-8 mt-5">
                    {item?.sale ? (
                      <p
                        className={`text-base flex items-start justify-start gap-4  text-textColor ${
                          flag ? "text-md" : "md:text-lg"
                        }`}
                      >
                        <p className="line-through">
                          <span className="text-sm text-red-500">$</span>
                          {item?.price}
                        </p>
                        <p className="font-semibold">
                          <span className="text-sm  text-red-500">$</span>
                          {item?.sale}
                        </p>
                      </p>
                    ) : (
                      <p
                        className={`text-base flex items-start justify-start gap-4  text-textColor ${
                          flag ? "text-md" : "md:text-lg"
                        }`}
                      >
                        <p className="font-semibold">
                          <span className="text-sm  text-red-500">$</span>
                          {item?.price} 
                        </p>
                      </p>
                    )}

                    <div
                      className={`flex flex-col absolute right-2 ${
                        gridORlist ? "top-[15rem]" : ""
                      } `}
                    >
                      <motion.div
                        whileTap={{ scale: 1.2 }}
                        className="flex items-center justify-center w-12 h-12 text-2xl bg-orange-00  rounded-full cursor-pointer hover:shadow-lg"
                        onClick={(e) => {
                          stopEventPropagationTry(e); // Prevent event from propagating
                          addtoFavorite(item);
                        }}
                      >
                        {item?.favorite === true ? (
                          <MdFavorite className="" />
                        ) : (
                          <AiOutlineHeart className="" /> 
                        )}
                       
                      </motion.div>

                      <motion.div
                        whileTap={{ scale: 1.2 }}
                        className="flex items-center justify-center w-12 h-12 text-2xl bg-orange-00  rounded-full cursor-pointer hover:shadow-lg"
                        onClick={(e) => {
                          stopEventPropagationTry(e); // Prevent event from propagating
                          viewProd(item);
                        }}
                      >
                        <IoEyeSharp className="" />
                      </motion.div>

                      <motion.div
                        whileTap={{ scale: 1.2 }}
                        className="flex items-center justify-center w-12 h-12 text-2xl bg-orange-00  rounded-full cursor-pointer hover:shadow-lg"
                        onClick={(e) => {
                          stopEventPropagationTry(e); // Prevent event from propagating
                          addtoCart(item);
                        }}
                      >
                        {item?.cartORadd === "cart" ? (
                          <MdShoppingBasket className="" />
                        ) : (
                          <BsCartPlusFill className="" />
                        )}
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
              {/* </NavLink> */}
            </div>
            ))}
        {view && specific_data ? (
          <ViewProduct
            // addDataNotifi={addingNewData}
            onClose={handleOnClose}
            visible={view}
            data={specific_data}
          />
        ) : null}
      </div>





      {/* mobile view */}
      <div
      ref={rowContainer}
      className={`w-full flex md:hidden  items-center my-16 gap-6 md:gap-7  scroll-smooth ${
        flag
          ? "overflow-x-scroll scrollbar-none"
          : "overflow-x-hidden flex flex-wrap justify-center"
      } ${gridORlist ? null : "flex-col"}`}
    >
      {data &&
        data.map((item) => (
          <div
            key={item?.id}
            onClick={() => navigate(`/singlefood/${item?._id}`)}
            className={`${
              gridORlist
                ? "w-32  md:w-1/3 lg:w-1/4 xl:w-1/5 "
                : "flex-col w-96"
            } ${
              flag ? "min-w-[150px]" : "min-w-[100px]"
            }  h-auto bg-gray-100 bl rounded-lg p-1 my-7 backdrop-blur-lg hover:drop-shadow-2xl`}
          >
            {/* <NavLink to={`/singlefood/${item?.id}`}> */}
            <div className="flex items-center justify-center w-full bg-gray-50 rounded-br-[30px] z-30">
            <div className="flex items-center justify-center z-30 w-full">
              <motion.img
                whileHover={{ }}
                src={item?.image}
                alt=""
                className={`w-full ${
                  gridORlist ? "h-32" : "h-full"
                } rounded-xl  -mt-8 drop-shadow-2xl`}
              />
              <motion.div
                        whileTap={{ scale: 1.2 }}
                        className="flex items-center justify-center absolute -top-10 right-0 w-14 h-14 text-3xl bg-orange-00  rounded-full cursor-pointer hover:shadow-lg"
                        onClick={(e) => {
                          stopEventPropagationTry(e); // Prevent event from propagating
                          addtoFavorite(item);
                        }}
                      >
                        {item?.favorite === true ? (
                          <MdFavorite className="" />
                        ) : (
                          <AiOutlineHeart className="" /> 
                        )}
                       
                      </motion.div>
            </div>
            {item.offer && (
                    <div>
                      <div className="w-14 h-6 bg-red-500 absolute top-4 left-1 z-30 rounded-e-md flex items-center justify-center">
                        <p>{item.offer}</p>
                      </div>
                      <div className="w-14 h-6 bg-red-400 absolute top-[24px] left-0 z-10"></div>
                      <div className=" bg-red-200 absolute top-[9px] left-[19px] rotate-45 z-10"></div>
                    </div>
                  )}
            </div>

            <div className="flex flex-col items-start justify-between w-full">
              <p className="text-base font-semibold text-textColor md:text-lg">
                ratings
              </p>
              <p className="text-base text-textColor md:text-lg">
                {item?.item_name}
              </p>
            </div>
            <div className="flex items-center flex-row justify-between gap-8">
              <p className="text-lg font-semibold text-headingColor">
                <span className="text-sm text-red-500">$</span>{item?.price}
              </p>
              <motion.div
                whileTap={{ scale: 1.2 }}
                className="flex items-center justify-center w-8 h-8 text-2xl bg-red-600 rounded-full cursor-pointer hover:shadow-md"
                onClick={(e) => {
                  stopEventPropagationTry(e); // Prevent event from propagating
                  addtoCart(item);
                }}
              >
                {item?.cartORadd === "cart" ? (
                  <MdShoppingBasket className="text-white" />
                ) : (
                  <BsCartPlusFill className="text-white" />
                )}
              </motion.div>
            </div>
            {/* </NavLink> */}
          </div>
        ))}
    </div>
    </div>
  );
}
