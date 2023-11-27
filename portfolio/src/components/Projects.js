import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import Particle from "./Particle";
import viscenarioGo from "../assets/projects/viscenario-go.png";

import vzCloud  from "../assets/projects/vz-cloud.png"
import comakeit from "../assets/projects/comakeit.png";
import kickstart from "../assets/projects/kickstart.png";
import Verizon from "../assets/projects/verizon-web.png"
import viscenario from "../assets/projects/viscenario.png";

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Verizon}
              isBlog={false}
              title="Verizon"
              description="It's an E-Commerce application and the most popular Network and e-mobile in the USA we can sell the version products and version E-sim Plan and trading devices for all sales it's we have done."
              ghLink="https://www.verizon.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={vzCloud}
              isBlog={false}
              title="Verizon One Cloud"
              description="Verizon Cloud is a service that offers secure cloud storage to wirelessly back up and sync content between your phone, tablet, computer, and other devices"
              ghLink="https://www.verizon.com/business/products/security/network-cloud-security/cloud-access-security/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kickstart}
              isBlog={false}
              title="Springboard"
              description="This Springboard website utilizes a REST API built with ReactJs and Redux, allowing for easy post Blog and view blogs dashboard on each users."
              ghLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={comakeit}
              isBlog={false}
              title="coMakeIT"
              description="coMakeIT helps software businesses innovate continuously by building future-ready software products and modernizing legacy applications."
              ghLink="https://www.comakeit.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={viscenarioGo}
              isBlog={false}
              title="Viscenario Go"
              description="Verizon redefines wireless freedom, launches first in U.S. plan that puts customers in charge. Design and develop a highly responsive and interactive Facility Management mobile tablet application where a 3D view of any construction will be rendered to help various groups of communities including Construction companies, Real Estate, Janitors, etc."
              ghLink="https://product.viscenario.com/users/login"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={viscenario}
              isBlog={false}
              title="Viscenario"
              description="Developed web application for Viscenario to explore their duties and overview. Design and develop a highly responsive and interactive Facility Management mobile tablet application where a 3D view of any construction will help various groups of communities including Construction companies, Real Estate, Janitors, etc."
              ghLink="https://viscenario.com/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Projects