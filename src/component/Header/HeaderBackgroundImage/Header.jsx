import React, { useState } from "react";
import { Form, Input, Button, Space, Col, Row } from "antd";
import "./Header.scss";
import HeaderTitle from "../HederTitle/HeaderTitle";
const Header = () => {
  return (
    <>
      <section className="addBackgroundImage textAlign">
        <HeaderTitle />
      </section>
    </>
  );
};

export default Header;
