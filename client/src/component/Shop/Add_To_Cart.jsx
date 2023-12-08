import React, { useEffect, useState } from 'react'
import { useStateValue } from '../../context/StateProvider';
import { actionType } from '../../context/reducer';
import { toast } from 'react-toastify';

export default function Add_To_Cart({data,quantity}) {


    const [{product, cartShow, cartItems, user }, dispatch] = useStateValue();
    // const [quantity, setQuantity] = useState(1);


    // add to cart functionalities
    const [cartData, setCartData] = useState(null);

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
          f.purchase_quantity = num + quantity;
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
        item_id: item._id || item.item_id,
        item_name: item.item_name,
        sale: item.sale,
        price: item.price,
        category: item.category,
        purchase_quantity: quantity,
        cartORadd: "cart",
        SKU: item.SKU,
        picture: item.image || item.picture,
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
      toast.success("Successfully added to the cart.")

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




  return (
    <button className="border w-full p-3 h-8 text-xl hover:bg-slate-900 hover:text-white rounded-md flex items-center justify-center"
                onClick={(e) => {
                    // stopEventPropagationTry(e); // Prevent event from propagating
                    addtoCart(data);
                  }}>
                  Add To Cart
                </button>
  )
}
