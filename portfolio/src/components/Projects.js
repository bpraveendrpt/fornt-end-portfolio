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
import coserve from "../assets/projects/corserv.png";
import sankranthi from "../assets/projects/sankranthi.png";
import srinidhi from "../assets/projects/srinidhi-home.png";
import fourIds from "../assets/projects/fourids.png";
import sudio from "../assets/projects/studio.png";
import itkakam from "../assets/projects/itkakam.png";
import kent from "../assets/projects/kent.png";
import rityport from "../assets/projects/ritypromt.png";
import krafkatha from "../assets/projects/krafkatha.png";
import vgit from "../assets/projects/vgyanit.png";
import telangakiratam from "../assets/projects/telanganakiratam.png";
import golconda from "../assets/projects/golconda.png";


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
        <h1 className="" style={{ color: "white" }}>Other Projects</h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={coserve}
              isBlog={false}
              title="Coserve Solutions"
              description="Coserve is a transformation solutions enabler, providing seamless digital evolution for organizations looking to expand and increase their revenues"
              ghLink="https://coservesolutions.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={srinidhi}
              isBlog={false}
              title="Srinidhi Design Build"
              description="SRINIDHI is a premier company in Bangalore known to create unique landmarks, build value for money projects and to maintain quality standards to ensure customer satisfaction."
              ghLink="http://srinidhidesignbuild.in"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fourIds}
              isBlog={false}
              title="4ID's"
              description="We offer high quality innovative design and expert evaluation services for integrated & multifunctional solutions that help our customers and partners in their business."
              ghLink="https://4ids.in"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={vgit}
              isBlog={false}
              title="Vgyan It Services"
              description="At Vgyan IT services, we support a full-cycle development process from requirements definition and specification, architecture design, coding, testing and validation to product maintenance and support."
              ghLink="http://www.vgyanitservices.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rityport}
              isBlog={false}
              title="RityPropmart"
              description="Human being since its existence has some secret wishes one of them is saving his hard earned money at a safe place but in this modern era of fast living style we want to finish our jobs quickly."
              ghLink="http://www.ritypropmart.com"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kent}
              isBlog={false}
              title="Kentmskclinic "
              description="We provide advanced diagnostic assessments and a wide range of ultrasound guided injection procedures.We are using the latest research and evidence-based techniques to set the standards in musculoskeletal care."
              ghLink="https://kentmskclinic.co.uk"
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sankranthi}
              isBlog={false}
              title="Sankanthi"
              description="Our SANKRANTI RESTAURANT, blossomed from the passion to celebrate food every day as a festival, like as we celebrate on our auspicious and much celebrated harvest festival, SANKRANTI."
              ghLink="https://www.sankrantihotels.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sudio}
              isBlog={false}
              title="Veedesign Studio"
              description="VeeDesign Studio are Expertise in Dealing with Interior Designing with Certified Professinals, Resources, Coordinates and Manages well any Projects."
              ghLink="https://www.veedesignstudio.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={itkakam}
              isBlog={false}
              title="ITKakam"
              description="We are a global IT services company that provides software product development and testing services."
              ghLink="http://itkakaam.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={krafkatha}
              isBlog={false}
              title="Thecraft Katha"
              description="Arts of different kinds, over centuries have risen to their pinnacle and fallen. Some lost forever to time. Subtle changes in culture and shifts in peoples interest decided the fate of many an art."
              ghLink="https://thecraftkatha.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={telangakiratam}
              isBlog={false}
              title="Telangana Keratam"
              description="Its pubilc new Paper Protal"
              ghLink="https://telanganakeratam.net"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={golconda}
              isBlog={false}
              title="Golconda Express News"
              description="Its pubilc new Paper Protal."
              ghLink="https://golcondaexpressnews.com/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Projects