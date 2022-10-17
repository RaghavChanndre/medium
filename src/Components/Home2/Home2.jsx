import React from "react";
import "./home2.css";
import JS from "../Image/img1.png";

const Home2 = () => {
  return (
    <>
      <div className="over-div">
        <div class="header-wrap">
          <h2 class="header-1">Over 100 million readers and growing.</h2>
        </div>

        <div className="header-wrap2">
          <div className="image-person">
            <img src={JS} alt="" className="jasmine" />
          </div>
          <div className="thought">
            "There’s no other place that combines such an excellent level of
            writing with a truly engaged and active community. Medium is truly
            where ideas are born, shared, and spread.
          </div>
          <div className="thought-person">Jasmine Bina</div>
        </div>
      </div>
    </>
  );
};

export default Home2;
