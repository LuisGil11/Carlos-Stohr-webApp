import React from "react";
import { Sidebar } from "../../components/Sidebar";
import { Row, Col } from "react-bootstrap";
import { pageStyles } from "../styles";

export const Exposiciones = () => {
  return (
    <Row>
      <Col style={pageStyles.col} sm={2}>
        <Sidebar />
      </Col>
    </Row>
  );
};
