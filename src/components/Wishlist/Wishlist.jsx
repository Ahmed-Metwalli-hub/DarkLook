import React, { useContext } from "react";
import "./Wishlist.css";
import { spcificCategory } from "../../Context/ProductJson";
import { ApiContext } from "../../Context/ApiContext";
import img from "../../assets/images/left1.jpg";
import { Link } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";
import { CartContext } from "../../Context/CartContext";

function Wishlist() {
  const {
    getAllData,
    allCatigories,
    NormalProductCategory,
    ApiProductCategory,
  } = useContext(ApiContext);
  const { wishlist, addToCart, deleteFromWishlist } = useContext(CartContext);
  return (
    <div className="Wishlist container mb-5 ">
      <div className="row  mt-5">
        <div className="col-lg-3 col-md-12 justify-content-start d-flex flex-column gap-2">
          <b className="mb-3 fs-5 border-bottom p-2 fw-bold">TOP CATEGORY</b>
          <Link
            to="/shop"
            className="text-decoration-none"
            onClick={getAllData}
          >
            All Categories
          </Link>
          {spcificCategory.map((val, index) => {
            return (
              <Link
                to="/shop"
                href="#"
                className="text-decoration-none"
                onClick={() => NormalProductCategory(index)}
                key={index}
              >
                {val.category}
              </Link>
            );
          })}
          {allCatigories.map((val, index) => {
            return (
              <Link
                to="/shop"
                href="#"
                className="text-decoration-none "
                onClick={() => ApiProductCategory(val.url)}
                key={index}
              >
                {val.name}
              </Link>
            );
          })}

          <div className=" my-5">
            <img src={img} alt="" />
          </div>
        </div>
        <div className="col-lg-9">
          <div className="row g-2 mt-3">
              {wishlist.map((val, index) => {
                return (
                  <div className="col-lg-4 col-md-6">
                  <div
                    key={index}
                    className="card bg-black text-light p-3 border border-secondary"
                  >
                    <div className="flex ">
                      <img style={{width:'75%', height:'250px'}} src={val.img || val.thumbnail} className=" card-img" alt="..." />
                    </div>
                    <div className="card-body">
                      <h5 className="card-title fs-5 fw-medium text-center">
                        {val.title}
                      </h5>
                      <div className="flex justify-content-between mt-3">
                        <button
                          onClick={() => deleteFromWishlist(val)}
                          className="flex btn btn-danger fs-6 fw-bold"
                        >
                          <IoIosClose />
                        </button>
                        <button
                          onClick={() => addToCart(val)}
                          className="flex btn btn-success fs-6 fw-bold"
                        >
                          <FaCartPlus />
                        </button>
                      </div>
                    </div>
                  </div>
                  </div>  
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Wishlist;
