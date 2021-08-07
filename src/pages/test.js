import React from 'react'
import { Link } from "gatsby";
import {
  Breadcrumb,
  BreadcrumbItem,
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardReadMore,
  Container,
  Icon,
  Input,
  Row,
  Col,
  LinkListItem,
  LinkList,
  UncontrolledCollapse,
  CardCategory
} from "design-react-kit";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Slider from "../components/slider";

const CardStyle  = () => {
    return (
    <div className="it-single-slide-wrapper">
                          <Card className="card-bg">
                            <CardBody>
                              <CardTitle tag="h5">
                                15<span>lun</span>
                              </CardTitle>
                              <CardText>
                                <Link to="#">Saldo TASI</Link>
                              </CardText>
                              <CardText>
                                <Link to="#">
                                  Concerto gratuito piazza XX Settembre
                                </Link>
                              </CardText>
                              <CardText>
                                <Link to="#">
                                  Convocazione Consiglio Comunale - Prima seduta
                                </Link>
                              </CardText>
                              <CardText>
                                <Link to="#">Seconda rata TARI</Link>
                              </CardText>
                            </CardBody>
                          </Card>
                        </div>
    );
};




export default function test({ location }) {
    return (
        <Layout location={location}>
        {/* eslint-disable-next-line*/}
            <SEO title="Servizi" />
                <main>
                <section id="calendario">
        <div className="section section-muted pb-5 pt-0">
          <Container>
          
            <Row className="row-title pt-5 pb-3">
              <h2>Calendario</h2>
            </Row>
            <Row className="row-calendar">
              <div className="it-carousel-wrapper it-carousel-landscape-abstract-three-cols it-calendar-wrapper">
                <div className="it-header-block">
                  <div className="it-header-block-title">
                    <h4 className="mb-0 text-center">Settembre 2019</h4>
                  </div>
                </div>
                <div className="it-carousel-all owl-carousel it-card-bg owl-loaded owl-drag">
                  <div className="owl-stage-outer">
                    <div
                      className="owl-stage"
                      style={{
                        transform: "translate3d(0px, 0px, 0px)",
                        transition: "all 0s ease 0s",
                        width: "2664px",
                      }}
                    >
                      <div
                        className="owl-item active"
                        style={{ width: "296px" }}
                      >
                        <CardStyle/>
                      </div>
                      <div
                        className="owl-item active"
                        style={{ width: "296px" }}
                      >
                        <div className="it-single-slide-wrapper">
                        <CardStyle/>
                          
                        </div>
                      </div>
                      <div
                        className="owl-item active"
                        style={{ width: "296px" }}
                      >
                        <div className="it-single-slide-wrapper">
                        <CardStyle/>
                          
                        </div>
                      </div>
                      <div
                        className="owl-item active"
                        style={{ width: "296px" }}
                      >
                        <div className="it-single-slide-wrapper">
                        <CardStyle/>
                          
                        </div>
                      </div>
                      
                      
                    </div>
                  </div>
                  <div className="owl-nav disabled">
                    <button className="owl-prev" aria-label="1" type="button"></button>
                    <button className="owl-next" aria-label="2" type="button"></button>
                  </div>
                  <div className="owl-dots">
                    <button
                      className="owl-dot active"
                      aria-labelledby="owl-dot-0"
                    >
                      <span></span>
                    </button>
                    <button className="owl-dot" aria-labelledby="owl-dot-1">
                      <span></span>
                    </button>
                    <button className="owl-dot" aria-labelledby="owl-dot-2">
                      <span></span>
                    </button>
                  </div>
                </div>
              </div>
            </Row>
          </Container>
        </div>
      </section>
                <section id="slider">
                    <div className="section section-muted pb-5 pt-0">
                    <Container>
                <Slider/>
                </Container>
                </div>
                </section>
                </main>
        </Layout>
        
    )
}
