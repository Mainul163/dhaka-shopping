import React, { useState } from "react";
import { Form, Input, Button, Space, Select } from "antd";
import "./Header.scss";
import HeaderTitle from "../HederTitle/HeaderTitle";
const Header = () => {
  return (
    <>
      <section className="addBackgroundImage">
        <HeaderTitle />
      </section>
    </>
  );
};

export default Header;
