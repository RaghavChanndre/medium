import React from "react";
import  "./home1.css";

const Home1 = () => {
  return (
    <>
      <div className="header ">
        {/* ----- upper div ----- */}
        <div className="upper-div">
          <div className="heading">
            <h1 className="head-data">
              Lorem ipsum dolor sit amet consectetur .
            </h1>
          </div>
          <div className="p-title">
            <p className="title">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              id cumque, placeat illo quo pariatur voluptates natus quia animi
              aliquid. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Magni necessitatibus autem amet a nostrum maiores! Lorem ipsum
              dolor sit amet.
            </p>
          </div>
        </div>
        {/* ----- lower div ----- */}
        <div className="lower-div">
            <div className="first  col-lg-4 col-md-6 ">
                <a className= "a-lower" href="/">Raghav</a>
                <a className= "a-lower"href="/">Anil</a>
                <a className= "a-lower"href="/">Aniket</a>
                <a className= "a-lower"href="/">Arvind</a>
            </div>
            <div className="second  col-lg-4 col-md-6">
                <a className= "a-lower"href="/">Abhishek</a>
                <a className= "a-lower"href="/">Ankit</a>
                <a className= "a-lower"href="/">Samiksha</a>
                <a className= "a-lower"href="/">Mohit</a>
            </div>
            <div className="third  col-lg-4 col-md-6" >
                <a className= "a-lower"href="/">Urvashi</a>
                <a className= "a-lower"href="/">Naveen</a>
                <a className= "a-lower"href="/">Nilesh</a>
                <a className= "a-lower"href="/">Sourabh</a>
            </div>
        
        </div>
      </div>
    </>
  );
};

export default Home1;
