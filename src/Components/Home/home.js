import React from "react";
import "./home.css";
import Nav from "../nav";
import { Link } from "react-router-dom";
import Footer from "../footer";

export default function Home() {

  return (
    <>
      <div className="home-main">
        <Nav />
        <div className="img">
          <div className="main-img">
            <div className="img-shad d-flex align-items-center justify-content-center">
              <div className="title-text">
                <h1>Welcome to Enchanted Game Haven!</h1>
                <p className="fw-semibold mt-5">
                  Your ultimate destination for the latest and greatest in
                  gaming. Dive into a world of adventure, excitement, and
                  endless possibilities.
                </p>
                <Link to={"/products"}>
                  <button className="home-btn fw-semibold mt-4">
                    Browser Games
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid ">
          <div className="row d-flex align-item-center justify-content-center">
            <div className="col-4 p-5 pb-0 d-flex justify-content-end">
              <div className="img1"></div>
            </div>
            <div className="col-7 p-5 pb-0 ps-0">
              <div className="img1-text d-flex align-items-center">
                <p className="fs-4 fw-semibold">
                  <span>Magical Selection:</span> Explore our treasure trove of
                  games, from enchanting board games to thrilling video games.
                  We handpick each game to ensure it adds a touch of magic to
                  your collection.
                </p>
              </div>
            </div>
          </div>
          <div className="row d-flex align-item-center justify-content-center">
            <div className="col-7 p-5 pb-0 pe-0">
              <div className="img1-text d-flex align-items-center">
                <p className="fs-4 fw-semibold">
                  <span>Exclusive Releases:</span> Be the first to get your
                  hands on the latest and most anticipated game releases. Stay
                  ahead of the game with our exclusive pre-orders and special
                  editions.
                </p>
              </div>
            </div>
            <div className="col-4 p-5 pb-0 d-flex justify-content-end">
              <div className="img2"></div>
            </div>
          </div>
          <div className="row d-flex align-item-center justify-content-center">
            <div className="col-4 p-5 pb-0 d-flex justify-content-end">
              <div className="img3"></div>
            </div>
            <div className="col-7 p-5 pb-0 ps-0">
              <div className="img1-text d-flex align-items-center">
                <p className="fs-4 fw-semibold">
                  <span>Community:</span> Join our vibrant community of gamers and
                  enthusiasts. Share tips, participate in events, and immerse
                  yourself in the magic of gaming with like-minded adventurers.
                </p>
              </div>
            </div>
          </div>
        </div>
        <p className="logo-title fs-3 fw-semibold text-center"><i className="fa-regular fa-game-console-handheld me-3"></i>PARTNERS<i className="fa-regular fa-game-console-handheld ms-3"></i></p>
        <div className="logo">
          <div className="logo1 mx-5 pe-auto" data-bs-toggle="tooltip" data-bs-title="Default tooltip"></div>
          <div className="logo2 mx-5"></div>
          <div className="logo3 mx-5"></div>
          <div className="logo4 mx-5"></div>
          <div className="logo5"></div>
        </div>
        <Footer/>
      </div>
    </>
  );
}
