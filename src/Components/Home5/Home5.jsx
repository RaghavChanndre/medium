import React from "react";
import "./home5.css";
import APP from "../Image/AppleStore.png";
import PLAY from "../Image/PlayStore.png";
import MOB from "../Image/Mobile.png";

const Home5 = () => {
  return (
    <>
      <div className="medium">
        <div className="up-div">
          <div className="up-title">
            <h2 className="up-text">Take Medium with you.</h2>
          </div>
          <div className="up-dis">
            <p>Download our app so you can read wherever you are.</p>
          </div>
          <div className="up-image">
            <img className="apps" src={APP} alt="" />
            <img className="apps" src={PLAY} alt="" />
          </div>
        </div>

        <div className="down-div">
         

            <img className="mobile" src={MOB} alt="" />
          </div>
        </div>
 
    </>
  );
};

export default Home5;
