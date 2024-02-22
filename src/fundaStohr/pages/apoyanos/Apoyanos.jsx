import React from "react";
import { Col, Row } from "react-bootstrap";
import { Sidebar } from "../../components/Sidebar";
import { pageStyles } from "../styles";

export const Apoyanos = () => {
  return (
    <Row>
      <Col style={pageStyles.col} sm={2}>
        <Sidebar />
      </Col>
    </Row>
  );
};
