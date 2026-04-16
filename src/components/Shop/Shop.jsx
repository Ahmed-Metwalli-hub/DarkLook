import React, { useContext, useEffect, useRef } from "react";
import "./Shop.css";
import img from "../../assets/images/left1.jpg";
import Product from "../Feature/Product";
import { RiGridFill } from "react-icons/ri";
import { FaList } from "react-icons/fa";
import BrandLogo from "../LatestNews/BrandLogo";
import { FlexDirContex } from "../../Context/FlexDirContex";
import { ApiContext } from "../../Context/ApiContext";
import { spcificCategory } from "../../Context/ProductJson";
import { Link } from "react-router-dom";
import Skelton from "../../../skeltons/Skelton";

function Shop() {
  const { flexDir, changeFlexDir } = useContext(FlexDirContex);
  const { changeSorting  , loadingSkelton, getAllData ,sort, allData , allCatigories , NormalProductCategory , ApiProductCategory } = useContext(ApiContext);

  const row = useRef(null);
  const col = useRef(null);
  const change = useRef(null);
  const changemode = (state) => {
    if (state == "row") {
      row.current.classList.add("active");
      col.current.classList.remove("active");
      change.current.classList.remove("change");
      changeFlexDir("row");
    } else {
      col.current.classList.add("active");
      row.current.classList.remove("active");
      change.current.classList.add("change");
      changeFlexDir("col");
    }
  };

  const showData = allData?.map((val, index) => {
    return (
      <div key={index} className="product col-lg-4 col-md-6 col-sm-12">
        <Product val={val} index={index} desc={true} />
      </div>
    );
  });

  useEffect(() => {
    if (flexDir == "row") {
      row.current.classList.add("active");
      col.current.classList.remove("active");
      change.current.classList.remove("change");
    } else {
      col.current.classList.add("active");
      row.current.classList.remove("active");
      change.current.classList.add("change");
    }
  }, []);

  return (
    <div className="Shop container ">
      <div className="flex justify-content-between p-3 ">
        <b className=" fs-3 fw-medium  ">Products</b>
        <div className="flex gap-1">
          <p className=" p-0 m-0 opacity-75">Home /</p>
          <span>Products</span>
        </div>
      </div>
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
        <div className="col-lg-9 col-md-12">
          <div className="head flex justify-content-between  align-items-center border border-2  px-3 py-2">
            <div className=" flex gap-3 fs-4">
              <span
                ref={row}
                onClick={() => changemode("row")}
                className=" icon active p-0 m-0"
              >
                <RiGridFill />
              </span>
              <span
                ref={col}
                onClick={() => changemode("col")}
                className=" icon p-0 m-0"
              >
                <FaList />
              </span>
            </div>
            <div className="flex gap-2">
              <span>Sort By :</span>
              <select onChange={changeSorting} defaultValue={sort} className=" px-1  text-light bg-dark">
                <option value="Defult">Defult</option>
                <option value="Name(A-Z)">Name(A-Z)</option>
                <option value="Name(Z-A)">Name(Z-A)</option>
                <option value="Price(Low - High)">Price(Low - High)</option>
                <option value="Price(High - Low)">Price(High - Low)</option>
              </select>
            </div>
          </div>
          
            
            <div className="container mt-4 ">
              <div ref={change} className="box row">
                {showData}
              </div>
            </div>

          
        </div>
      </div>
      <BrandLogo />
    </div>
  );
}

export default Shop;
