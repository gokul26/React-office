import React from "react";

import Header from "./header.component";
import Footer from "./footer.component";
import LeftNavBar from "./imports/sidenavbar";
import RightNavBar from "./imports/rightnavbar";

function Home(params) {
  return (
    <div>
      <Header />
      <br />
      <div class="container-fluid">
        <div className="row">
          <div className="col-md-2">
            <LeftNavBar/>
          </div>
          <div className="col-md-6">
            <div class="jumbotron">
              <h1>Learn to Create Websites</h1>
              <p class="lead">
                In today's world internet is the most popular way of connecting
                with the people. At{" "}
                <a href="https://www.tutorialrepublic.com" target="_blank">
                  tutorialrepublic.com
                </a>{" "}
                you will learn the essential web development technologies along
                with real life practice examples, so that you can create your
                own website to connect with the people around the world.
              </p>
              <p>
                <a
                  href="https://www.tutorialrepublic.com"
                  target="_blank"
                  class="btn btn-success btn-lg"
                >
                  Get started today
                </a>
              </p>
            </div>
          </div>
          <div className="col-md-3">
            <RightNavBar/>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
