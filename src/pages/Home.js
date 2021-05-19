import React, { Component } from "react";

import { Navbar } from "../layouts";
import { Button } from "../components";
import { Footer } from "../layouts";

import coverImage from "../images/home/cover.jpg";
import avatarImage from "../images/home/avatar.png";
import productImage from "../images/product.jpg";

class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <section>
          <div
            className="bg-scroll bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${coverImage})`, minHeight: "400px" }}>
          </div>
          <div className="relative mt-20">
            <img src={avatarImage} className="absolute inset-x-0 mx-auto -top-px -mt-40" alt="avatar" />
          </div>
          <div className="text-center text-md mb-10">
            <h2 className="font-bold text-gray-darken">
              DIGITAL PRODUCTS
            </h2>
            <p className="text-gray-dark">
              100% Cuteness overload by Thai artists.
            </p>
          </div>
        </section>
        <section className="flex flex-col justify-around mx-auto mb-10 max-w-screen-sm">
          <div className="flex my-2 mx-4">
            <div className="w-full">
              <Button to="/" label="DIGITAL PLANNER" />
            </div>
          </div>
          <div className="flex my-2 mx-4">
            <div className="w-full mr-1">
              <Button to="/" label="MEMO" />
            </div>
            <div className="w-full ml-1">
              <Button to="/" label="STICKER" />
            </div>
          </div>
          <div className="flex my-2 mx-4">
            <div className="w-full mr-1">
              <Button to="/" label="FONT" />
            </div>
            <div className="w-full ml-1">
              <Button to="/" label="APP ICON" />
            </div>
          </div>
        </section>
        <section className="flex flex-col justify-around mx-auto mb-10 max-w-screen-sm">
          <header className="text-center text-md mb-10">
            <h3 className="font-bold text-gray-darken">
              NEW IN
            </h3>
          </header>
          <div className="flex">
            <div className="border rounded-sm p-xs">
              <div className="flex flex-col flex-wrap">
                <img src={productImage} className="rounded-xs" alt="avatar" />
                <div className="mx-xxs">
                  <h4 className="font-medium text-sm text-gray-darken my-xxs">
                    Digital sticker book gooknotes
                  </h4>
                  <div className="font-medium text-sm text-gray-base my-xxs">
                    13 USD
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <Footer />
        </section>
      </div>
    );
  }
};

export default Home;
