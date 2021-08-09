import React from 'react'
import { Link } from "gatsby";

import {
    Card,
    CardBody,
    CardTitle,
    CardText,
    CardCategory,
    CardReadMore,
    Container,
    Row,
    Col
  } from "design-react-kit";
  
export default function index() {
    return (
        <section id="head-section" style={{marginTop:"50px",marginBottom:"50px"}}>
        <Container>
          <Row>
            <Col lg={{ size: 6, offset: 1, order: 2 }}>
              <img
                src="https://picsum.photos/800/600"
                title="img title"
                alt="imagealt"
                className="img-fluid"
              />
            </Col>
            <Col lg={{ size: 5, order: 1 }}>
              <Card>
                <CardBody className="pb-5">
                  <CardCategory date="18 mag 2018" iconName="it-calendar">
                    Notizie
                  </CardCategory>
                  <CardTitle tag="h4">
                    Parte l&#39;estate con oltre 300 eventi in centro e nei
                    quartieri, tutti gli eventi previsti
                  </CardTitle>
                  <CardText>
                    Inaugurazione lunedì 2 luglio con il concerto gratuito in
                    piazza XX Settembre degli Sweet Soul Revue. Sul palco 20
                    musicisti da tutto il mondo.
                  </CardText>
                  <div className="chip chip-simple chip-primary">
                    <Link to="#" className="chip-label">
                      Estate in città
                    </Link>
                  </div>
                  <CardReadMore
                    text="Tutte le novità"
                    className="pb-3"
                    href="#"
                  />
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    )
}
