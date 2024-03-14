import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";

// import "bootstrap-icons/font/bootstrap-icons.css";

import Sidebar from "./Sidebar";

import Home from "./Home";

import { useState } from "react";

function Appp() {
  const [toggle, setToggle] = useState(true);
  const Toggle = () => {
    setToggle(!toggle);
  };
  return (
    <div className="container-fluid bg-secondary min-vh-10 ">
      {" "}
      <div className="row ">
       
        {toggle && <div className="col-4 col-md-2"></div>}{" "}
        <div className="col">
          {" "}
          <Home Toggle={Toggle} />{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}
export default Appp;
