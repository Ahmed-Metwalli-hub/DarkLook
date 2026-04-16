import React, { use, useContext, useEffect, useRef, useState } from "react";
import "./SingleProPage.css";
import { spcificCategory } from "../../Context/ProductJson";
import { ApiContext } from "../../Context/ApiContext";
import img from "../../assets/images/left1.jpg";
import Stars from "../Feature/Stars";
import { FaHeart } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";

function SingleProPage() {
  const { allData, allCatigories,getAllData ,  NormalProductCategory, ApiProductCategory } =
    useContext(ApiContext);
    const { addToCart } = useContext(CartContext);
  const [pro, setPro] = useState({});
  const number = useParams().number;
  useEffect(() => {
    (setPro(allData[number]), []);
  });
  const imgRef = useRef(null);
  const changImg = (e) => {
    const target = e.target;
    const bigImgSrc = imgRef.current.getAttribute("src");

    imgRef.current.setAttribute("src", target.src);
    target.setAttribute("src", bigImgSrc);
  };

  return (
    <div className="SingleProPage container">
      <div className="flex justify-content-between p-3 ">
        <b className=" fs-3 fw-medium  ">Products</b>
        <div className="flex gap-1">
          <p className=" p-0 m-0 opacity-75">Home /Products/</p>
          <span>{pro?.title}</span>
        </div>
      </div>
      <div className="row mt-5">
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
              <a
                href="#"
                className="text-decoration-none "
                onClick={() => NormalProductCategory(index)}
                key={index}
              >
                {val.category}
              </a>
            );
          })}
          {allCatigories.map((val, index) => {
            return (
              <a
                href="#"
                className="text-decoration-none "
                onClick={() => ApiProductCategory(val.url)}
                key={index}
              >
                {val.name}
              </a>
            );
          })}

          <div className=" my-5">
            <img src={img} alt="" />
          </div>
        </div>
        <div className="col-lg-9 col-md-12 ">
          <div className="proBage accordion-item flex gap-3 flex-wrap">
            <div className="w-50 h-75 border">
              <img
                ref={imgRef}
                className="card-img"
                src={pro?.img || pro?.thumbnail}
                alt=""
              />
            </div>
            <div style={{ width: "48%" }} className=" h-75">
              <h2 className="fs-5 text-light fw-bold">{pro?.title}</h2>
              <Stars />
              <p
                style={{ color: "var(--body-color)" }}
                className="fs-6 fw-medium py-2"
              >
                $ {pro?.price}
              </p>
              <hr />
              <p>
                Category :
                <span style={{ color: "var(--body-color)" }}>
                  {pro?.category}
                </span>
              </p>
              <p>
                Rating :
                <span style={{ color: "var(--body-color)" }}>
                  {pro?.rating}%
                </span>
              </p>
              <p>
                Avaliablity :
                <span style={{ color: "var(--body-color)" }}>avaliable</span>
              </p>
              <hr />
              <p
                style={{ color: "var(--body-color)" }}
                className="fs-6 fw-light opacity-75"
              >
                {pro?.description || pro?.discription}
              </p>
              <hr />
              <div className="d-flex flex-column gap-2">
                <button className="btn btn-dark fs-6 fw-medium rounded-0 border w-50">
                  Add To Wishlist <FaHeart />
                </button>
                <button onClick={() => addToCart(pro)} className="btn btn-dark fs-6 fw-medium rounded-0 border w-50">
                  Add To Cart <FaCartPlus />
                </button>
              </div>
            </div>
          </div>

          <div className="images flex w-50  gap-3 mt-3">
            {pro?.images?.map((val, index) => {
              return (
                <div key={index} style={{ maxWidth: "120px" }}>
                  <img className="w-100" onClick={changImg} src={val} alt="" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleProPage;
