import React from "react";
import "./home4.css";
import LG from "../Image/Logo1.svg";
import MG from "../Image/Logo2.svg"
const Home4 = () => {
  return (
    <>
      <div className="svg">
        <div className="svg1">
          <div className="svg-title">
            <h2 className="svg-head">Read as much as you want.</h2></div>
          <div className="svg-image">
            <img src={LG} alt="" />
          </div>
          <div className="svg-text">
            Enjoy unlimited access to every story across all of your devices.
          </div>
        </div>
        <div className="svg2">
        <div className="svg-title">
            <h2 className="svg-head">Reward quality content.</h2></div>
          <div className="svg-image">
            <img src={MG} alt="" />
          </div>

          <div className="svg-text">
          Your membership helps us pay writers, and keeps your experience ad-free.
          </div>
      </div>
      </div>
    </>
  );
};

export default Home4;
