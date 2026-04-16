import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

export const CartContext = createContext();
export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const addToCart = (product) => {
    let existingProduct = cart.find((val) => val.title === product.title);
    if (!existingProduct) {
      setCart([...cart, { ...product, amount: 1 }]);
      toast.success(`Product Added To Cart Successfully`);
    } else {
      Swal.fire({
        title: "The Product Already Exists In Cart!",
        text: "You won't be able to revert this!",
        icon: "info",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "rgb(86, 21, 21)",
        confirmButtonText: "Add One More",
        cancelButtonText: "Cancel",
      }).then((result) => {
        if (result.isConfirmed) {
          existingProduct.amount += 1;
          setCart([...cart]);
          Swal.fire({
            title: `You Now Have ${existingProduct.amount} Of This Product`,
            icon: "success",
            timer: 2000,
            showConfirmButton: false,
          });
        }
      });
    }
  };
  const [wishlist, setWishlist] = useState([]);
  const addToWishlist = (product) => {
    let existingProduct = wishlist.find((val) => val.title === product.title);
    if (!existingProduct) {
      setWishlist([...wishlist, { ...product, amount: 1 }]);
      toast(`Product Added To Wishlist Successfully`, {
        icon: "❤️",
        duration: 2000,

      });
    } else {
      Swal.fire({
        title: "The Product Already Exists In Wishlist!",
        text: "You won't be able to revert this!",
        icon: "warning",
        timer: 2000,
        showConfirmButton: false,
      });
    }
  };
  const deleteFromCart = (product) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        let newArr = cart.filter((val) => val.title !== product.title);
        setCart(newArr);

        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
          showConfirmButton: false,
          timer: 2000,
        });
      }
    });
  };
  const deleteFromWishlist = (product) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        let newArr = wishlist.filter((val) => val.title !== product.title);
        setWishlist(newArr);

        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
          showConfirmButton: false,
          timer: 2000,
        });
      }
    });
  };
  function changeAmount(e, val) {
    val.amount = +e.target.value;
    setCart([...cart]);
    toast.success(`You Have Now ${val.amount} Of ${val.title} `);
  }
  function clearCart() {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, clear it!",
    }).then((result) => {
      if (result.isConfirmed) {
        setCart([]);
        Swal.fire({
          title: "Cleared!",
          text: "Your cart has been cleared.",
          icon: "success",
          showConfirmButton: false,
          timer: 2000,
        });
      }
    });
  }

  const totalCart = cart.reduce((a, b) => a + b.price * b.amount, 0).toFixed(2);
  function buttonChangeAmount(state, val) {
    if (state === "plus") {
      val.amount += 1;
      setCart([...cart]);
      toast.success(`You Have Now ${val.amount} Of ${val.title} `);
    } else if (state === "minus") {
      if (val.amount > 1) {
        val.amount -= 1;
        setCart([...cart]);
        toast.success(`You Have Now ${val.amount} Of ${val.title} `);
      } else {
        deleteFromCart(val);
      }
    }
  }
  const cartLenght = cart.reduce((a, b) => a + b.amount, 0);
  useEffect(() => {
    if (localStorage.getItem("cartData")) {
      setCart(JSON.parse(localStorage.getItem("cartData")));
    } else {
      setCart([]);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cartData", JSON.stringify(cart));
  }, [cart]);
  useEffect(() => {
    if (localStorage.getItem("wishlistData")) {
      setWishlist(JSON.parse(localStorage.getItem("wishlistData")));
    } else {
      setWishlist([]);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("wishlistData", JSON.stringify(wishlist));
  }, [wishlist]);
  return (
    <CartContext.Provider
      value={{
        cart,
        buttonChangeAmount,
        addToCart,
        deleteFromCart,
        changeAmount,
        clearCart,
        totalCart,
        cartLenght,
        wishlist,
        addToWishlist,
        deleteFromWishlist,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
