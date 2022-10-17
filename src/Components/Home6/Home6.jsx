import React from "react";
import "./home6.css";
import { NavLink } from "react-router-dom";

const Home6 = () => {
  return (
    <>
      <div className="triple-flex">
        <div className="one-flex">
          <h2 className="one-flex-head">Learn more about us. Or join us.</h2>
        </div>
        <div className="two-flex">
          <div className="two-first1">
            <div className="two-text">
              <h2 className="triple-head"> The Medium blog </h2>
              <div className="triple-title">
                <p className="triple-para">
                  Visit our company blog for the latest news,
                  product updates, and tips and tricks.
                </p>
              </div>
            </div>
            <NavLink to="" className="btn">
              <div className="btn-text">
                Read our Blog
              </div>
            </NavLink>
          </div>

               <div className="two-first2">
            <div className="two-text">
              <h2 className="triple-head"> The Medium blog</h2>
              <div className="triple-title">
                <p className="triple-para">
                  Visit our company blog for the latest news,
                  product updates, and tips and tricks.
                </p>
              </div>
            </div>
            <NavLink to="" className="btn">
              <div className="btn-text">
              Visew open Positions
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home6;
