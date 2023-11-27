import React from "react";
import { Col, Row } from "react-bootstrap";

import { FaReact, FaHtml5, FaCss3Alt, FaBootstrap, FaNode, FaPhp, FaSass, FaLess, FaAngular    } from "react-icons/fa";
import { SiRedux, SiJavascript } from "react-icons/si";

import { DiJqueryLogo, DiMysql  } from "react-icons/di";

const Techstack = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
       <Col xs={4} md={2} className="tech-icons">
        <FaReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRedux />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaAngular />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJavascript />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaCss3Alt />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaBootstrap />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaSass />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaLess />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaNode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJqueryLogo />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaPhp  />
      </Col>  
      <Col xs={4} md={2} className="tech-icons">
        <DiMysql  />
      </Col>  
    </Row>
  );
}

export default Techstack;