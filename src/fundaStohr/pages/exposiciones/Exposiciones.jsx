import React from "react";
import { Sidebar } from "../../components/Sidebar";
import { Row, Col } from "react-bootstrap";
import { pageStyles } from "../styles";
import Footer from "../../components/Footer";

export const Exposiciones = () => {
  return (
    <Row>
      <Col style={pageStyles.col} sm={2}>
        <Sidebar />
      </Col>
      <Footer/>
    </Row>
  );
};
