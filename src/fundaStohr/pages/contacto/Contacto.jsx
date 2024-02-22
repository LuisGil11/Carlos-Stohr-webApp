import React from "react";
import { Col, Row } from "react-bootstrap";
import { pageStyles } from "../styles";
import { Sidebar } from "../../components/Sidebar";

export const Contacto = () => {
  return (
    <Row>
      <Col style={pageStyles.col} sm={2}>
        <Sidebar />
      </Col>
    </Row>
  );
};
