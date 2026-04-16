import React, { useContext } from "react";
import "./AboutUs.css";
import { ApiContext } from "../../Context/ApiContext";
import { Link } from "react-router-dom";
import { spcificCategory } from "../../Context/ProductJson";
import img from "../../assets/images/left1.jpg";
import img1 from "../../assets/images/about-page-gaando.jpg";
import img11 from "../../assets/images/tm1.jpg";
import img2 from "../../assets/images/tm2.jpg";
import img3 from "../../assets/images/tm3.jpg";
import img4 from "../../assets/images/tm4.jpg";
import img5 from "../../assets/images/tm5.jpg";
import img6 from "../../assets/images/user1.jpg";
import img7 from "../../assets/images/user2.jpg";
import img8 from "../../assets/images/user3.jpg";

import Accordion from "./S";
import Skills from "./Skills";
import SubTitle from "../SubTitle";
import { Swiper, SwiperSlide } from "Swiper/react";
import { Autoplay, Pagination, Navigation } from "Swiper/modules";

function AboutUs() {
  const CreativeTeam = [
    {
      id: 1,
      name: "John Doe",
      position: "Designer",
      image: img11,
      p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 2,
      name: "Jane Smith",
      position: "Developer",
      image: img2,
      p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 3,
      name: "Mike Johnson",
      position: " JavaScript Developer ",
      image: img3,
      p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 4,
      name: "User One",
      position: " JavaScript Developer ",
      image: img4,
      p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 5,
      name: "User Two",
      position: " JavaScript Developer ",
      image: img5,
      p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 6,
      name: "User Three",
      position: " JavaScript Developer ",
      image: img6,
      p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 7,
      name: "User Four",
      position: " JavaScript Developer ",
      image: img7,
      p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 8,
      name: "User Five",
      position: " JavaScript Developer ",
      image: img8,
      p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  const {
    getAllData,
    allCatigories,
    NormalProductCategory,
    ApiProductCategory,
  } = useContext(ApiContext);

  return (
    <div className="AboutUs container">
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
          <div className="row">
            <div className="col-lg-12">
              <div className="flex flex-column gap-4">
                <div>
                  <img className="w-100" src={img1} alt="" />
                </div>

                <div className="card-body">
                  <h2
                    style={{ letterSpacing: "0.9px" }}
                    className=" fs-5 fw-bold text-uppercase mb-3"
                  >
                    themini Design is Best Part of my Life
                  </h2>
                  <p style={{ color: "rgb(136, 136, 136)" }}>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable. If you are going to use a
                    passage of Lorem Ipsum, you need to be sure there isn't
                    anything embarrassing hidden in the middle of text. All the
                    Lorem Ipsum generators on the Internet tend to repeat
                    predefined chunks as necessary, making this the first true
                    generator on the Internet. It uses a dictionary of over 200
                    Latin words, combined with a handful of model sentence
                    structures, to generate Lorem Ipsum which looks reasonable.
                    The generated Lorem of text. All the Lorem Ipsum generators
                    on the Internet tend to repeat predefined chunks as
                    necessary, making this the first true generator on the
                    Internet. It uses a Ipsum is therefore always free from
                    repetition, injected humour, or non-characteristic words
                    etc.
                  </p>
                  <button className="btn w-25 rounded-0 btn-success">
                    Hire Me
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="row g-2 container">
                <div className="col-lg-6  ">
                  <div className="mt-5 mb-3 fs-4 fw-medium border-bottom border-secondary">
                    -- What We Do ?
                  </div>
                  {Accordion()}
                </div>
                <div className="col-lg-6">
                  <div>
                    <div className="mt-5 mb-3 fs-4 fw-medium border-bottom border-secondary">
                      {" "}
                      -- Skills ..
                    </div>

                    {Skills()}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <SubTitle name="Our Creative Team" showLinks={false} />
              <div className="container my-5 ">
                <Swiper
                  className=""
                  slidesPerView={3}
                  spaceBetween={10}
                  modules={[Autoplay, Pagination, Navigation]}
                  autoplay={{
                    delay: 2000,
                    pauseOnMouseEnter: true,
                  }}
              
                  navigation={{
                    prevEl: ".Feature .slide-to-left ",
                    nextEl: ".Feature .slide-to-right ",
                  }}
                  loop={true}
                  breakpoints={{
                    0: {
                      slidesPerView: 1,
                    },
                    544: {
                      slidesPerView: 2,
                    },
                    768: {
                      slidesPerView: 3,
                    },
                    992: {
                      slidesPerView: 3,
                    },
                  }}
                >
                  {CreativeTeam.map((val) => (
                    <SwiperSlide key={val.id} className="col-3 one flex flex-column gap-2">
                      <div
                        className="card custom-card dg-dark border-0"
                        
                      >
                        <div className="img-wrapper">
                          <img
                            src={val.image}
                            className="card-img-top"
                            alt="..."
                          />
                        </div>

                        <div className="card-body text-center bg-black">
                          <h5 className="card-title text-light">{val.name}</h5>
                          <p className="card-text my-1">{val.position}</p>
                          <p style={{fontSize:'12px'}} className="card-text w-100">{val.p}</p>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
