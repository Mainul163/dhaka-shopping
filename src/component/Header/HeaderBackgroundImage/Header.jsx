import React, { useState } from "react";
import { Form, Input, Button, Space, Col, Row } from "antd";
import "./Header.scss";
import HeaderTitle from "../HederTitle/HeaderTitle";
const Header = () => {
  return (
    <>
      <section className="addBackgroundImage">
        <Row align="middle" justify="center">
          <Col xs={12} sm={12} md={12} lg={12} xl={16} xxl={16}>
            <HeaderTitle />
          </Col>
        </Row>
      </section>
    </>
  );
};

export default Header;
