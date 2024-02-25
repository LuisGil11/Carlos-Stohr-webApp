import React from "react";
import { Col, Row } from "react-bootstrap";
import { Sidebar } from "../../components/Sidebar";
import { pageStyles } from "../styles";
import Footer from "../../components/Footer";

export const Concursos = () => {
  return (
    <Row>
      <Col style={pageStyles.col} sm={2}>
        <Sidebar />
      </Col>
      <Footer />
    </Row>
  );
};
