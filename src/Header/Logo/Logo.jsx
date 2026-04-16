import React, { useContext, useRef } from "react";
import "./Logo.css";
import img1 from "../../assets/images/logo.png";
import { FaCartArrowDown } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import { IoIosCloseCircle } from "react-icons/io";
import { CartContext } from "../../Context/CartContext";
import { Link, useLocation } from "react-router-dom";

function Logo() {
  const { cart, buttonChangeAmount, cartLenght, deleteFromCart, totalCart } =
    useContext(CartContext);
  const { pathname } = useLocation();
  const cartToggle = useRef(null);
  function openCartToggle() {
    cartToggle.current.classList.toggle("active");
  }
  const cartItems = cart?.map((val, index) => (
    <div key={index} className="col-12  ">
      <div className="row g-2 border-bottom border-secondary py-2 ">
        <div className="col-11">
          <div className="row  g-2">
            <div className="col-5">
              <div>
                <img
                  src={val.img || val.thumbnail}
                  className="card-img w-100"
                  alt=""
                />
              </div>
            </div>
            <div className="col-7">
              <div className="d-flex flex-column gap-2">
                <div className="d-flex flex-column gap-1 ">
                  <b
                    className="text-nowrap fw-bold"
                    style={{ wordSpacing: "2px" }}
                  >
                    {val.title}
                  </b>
                  <span className="fw-normal">
                    $ {(val.price * val.amount).toFixed(2)}
                  </span>
                </div>
                <div className="d-flex align-items-center gap-2 ">
                  <button
                    onClick={() => buttonChangeAmount("plus", val)}
                    className="btn btn-dark text-light btn-sm rounded-2"
                  >
                    +
                  </button>
                  <span className="text-dark fw-normal">{val.amount}</span>
                  <button
                    onClick={() => buttonChangeAmount("minus", val)}
                    className="btn btn-dark text-light btn-sm rounded-2"
                  >
                    -
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div onClick={() => deleteFromCart(val)} className="col-1 icon-2">
          <IoIosCloseCircle />
        </div>
      </div>
    </div>
  ));

  return (
    <div className="logo container  flex justify-content-between py-4">
      <div className="search position-relative">
        <input
          type="text"
          className="form-control rounded-0 border py-1 border-secondary bg-dark"
          placeholder="search"
        />
        <IoMdSearch
          className="icon position-absolute top-50"
          style={{ transform: "translateY(-50%)", right: "10px" }}
        />
      </div>
      <div>
        <img src={img1} className="w-100 " alt="" />
      </div>
      {pathname === "/cart" ? (
        <div style={{ width: "40px" }}></div>
      ) : (
        <div className="cart">
          <div className="flex gap-3 text-uppercase">
            <div
              className="flex gap-3"
              onClick={openCartToggle}
              style={{ cursor: "pointer" }}
            >
              <FaCartArrowDown className="fs-2 icon" />
              <div
                className="d-flex flex-column lh-sm "
                style={{ fontSize: "14px" }}
              >
                <b>Shopping Cart</b>
                <span>items ({cartLenght})</span>
              </div>
            </div>
            <div
              style={{ maxHeight: "83vh" }}
              className="dropdown-cart container overflow-y-scroll overflow-x-hidden"
              ref={cartToggle}
            >
              <div className="row ">{cartItems}</div>
              <div className="totall">
                <div className="flex justify-content-between py-3 fw-normal">
                  <b className="fw-bold text-capitalize h6 p-0">Totall :</b>
                  <span>${totalCart}</span>
                </div>
                <Link to="/cart" className="btn btn-dark py-2 w-100">
                  View Cart
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Logo;
