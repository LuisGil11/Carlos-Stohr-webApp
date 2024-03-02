import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Sidebar } from "../../components/Sidebar";
import { pageStyles } from "../styles";

export const Talleres = () => {
  return (
    <Row id="Talleres">
      <Col style={pageStyles.col} sm={2}>
        <Sidebar />
      </Col>
      <Col
        style={pageStyles.col}
        sm={10}
        className="animate__animated animate__fadeIn"
      ></Col>
    </Row>
  );
};
