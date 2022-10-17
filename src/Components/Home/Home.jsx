import React from "react";
import "./home.css";
import Image from "../Image/img0.gif";
const Home = () => {
  return (
    <>
      <div className="main-container">
        <div className="container-bord">
          <div className="bord-container text-center">
            <h1>
              Every idea needs a<strong> Medium .</strong>
            </h1>
          </div>
        </div>
        <div className="d-flex">
          <div className=" row-main col-lg-6 col-sm-12 order-2 order-lg-2">
            <h3 className="paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              quibusdam esse perferendis dolore est optio repudiandae nisi
              asperiores velit sunt! Voluptates et dolore natus inventore
              deserunt quo, totam possimus recusandae libero rerum est magni
              sunt. Odio, mollitia? Ipsa molestias, quasi necessitatibus, fugit
              voluptate est tempora eligendi, sed minus minima inventore. Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Ab unde,
              provident maiores iusto numquam quidem minus impedit eaque quasi
              labore?
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad libero
              reprehenderit vitae nobis accusamus ut odit dolorem neque
              consequatur aspernatur! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Vitae et qui sapiente, eum vel repellendus
              ratione ipsum exercitationem molestias pariatur?
            </h3>
          </div>
          <div className="col-lg-6 col-sm-12 order-1 order-lg-2 bo">
            <div className="image img-fluid">
              <img
                src={Image}
                alt="globe.img"
                 width="90%"
                height="100%"
                allow="autoplay"
                frameorder="0"
                positioning="relative"
                
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
