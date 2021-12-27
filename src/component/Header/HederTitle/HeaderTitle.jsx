import React from "react";
import "./HeaderTitle.scss";
import { Row, Col } from "antd";
const HeaderTitle = () => {
  return (
    <>
      <h1 className="header-font">DHAKA SHOPPING</h1>
      <marquee behavior="scroll" direction="right" scrollamount="12">
        This is an online based shopping site
      </marquee>
      <marquee behavior="scroll" direction="left" scrollamount="12">
        Address: Merul Badda dhaka,1212
      </marquee>
    </>
  );
};

export default HeaderTitle;
