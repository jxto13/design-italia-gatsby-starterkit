import React , { useState } from "react";
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
  Headers
} from "design-react-kit";

import Layout from "../components/layout";
import Page_Layout from "../components/page_layout";
import SEO from "../components/seo";

import Banner from "../components/card";

const Amministrazione = ({ location }) => (
  <Layout location={location}>
  <Page_Layout location={location}>
    {/* eslint-disable-next-line*/}
    <SEO title="Amministrazione" />
    <main>
      <Container tag="section" id="briciole" className="px-4 my-4">
        <Row>
          <Col className="px-lg-4">
            <nav aria-label="breadcrumb" className="breadcrumb-container">
              <Breadcrumb>
                <BreadcrumbItem>
                  <Link to="/">Home</Link>
                  <span className="separator">/</span>
                </BreadcrumbItem>
                <BreadcrumbItem aria-current="page" active>
                  Amministrazione
                </BreadcrumbItem>
              </Breadcrumb>
            </nav>
          </Col>
        </Row>
      </Container>

      <Container tag="section" id="intro" className="px-4 my-4">
        <Row>
          
          <Col lg={9} className="px-lg-4 py-lg-2">
            <h1>Amministrazione</h1>
            <p>
              Donec in consequat nunc. Duis semper fermentum lacus, ac
              condimentum justo auctor a. Nam erat erat, porta vel pharetra in,
              ullamcorper vel turpis.
            </p>
            <Banner/>

            {/* <div className="form-group mt-5">
              <form>
                <Input
                  id="ricerca-amministrazione"
                  type="search"
                  label='Cerca contenuti in "Amministrazione"'
                />
                <span aria-hidden="true" className="autocomplete-icon">
                  <Icon icon="it-search" size="sm" />
                </span>
              </form>
            </div>
            <div id="filtri-ricerca-amministrazione">
              <h6 className="small">Filtri</h6>
              <div className="chip chip-lg">
                <span className="chip-label">Tutto</span>
                <button>
                  <Icon icon="it-close" />
                  <span className="sr-only">Elimina label</span>
                </button>
              </div>
              <div className="ml-2 d-inline">
                <button className="btn btn-icon btn-outline-primary btn-sm align-top">
                  <Icon icon="it-plus" color="primary" />
                  <span>Aggiungi filtro</span>
                </button>
              </div>
            </div> */}
          </Col>
          {/* <div className="section section-muted pb-5 pt-0">
              <Banner/>
            </div> */}
          <Col lg={{ size: 3, offset: 0 }} className="pt-5 pt-lg-2">
            <LinkList className="footer-list clearfix">
              {[
                "Tutta l'Amministrazione",
                "Organi di governo",
                "Aree amministrative",
                "Uffici",
                "Enti e fondazioni",
                "Politici",
                "Personale Amministrativo",
                "Luoghi",
              ].map((label, i) => {
                if (i === 0) {
                  return (
                    <LinkListItem key={label} tag="h3" header>
                      {label}
                    </LinkListItem>
                  );
                }
                return (
                  <LinkListItem key={label} href="#">
                    <span>{label}</span>
                  </LinkListItem>
                );
              })}
            </LinkList>
          </Col>
        </Row>
      </Container>
      <section id="in-evidenza">
        <div className="bg-light py-5">
          <Container className="px-4">
            <Row>
              <Col>
                <h3 className="mb-4">In evidenza</h3>
              </Col>
            </Row>
            <Row>
              {[
                { title: "Luoghi", icon: "it-pa", flagIcon: true },
                { title: "Funzionari amministrativi", icon: "it-user" },
                { title: "Uffici", icon: "it-pa" },
                { title: "Luoghi", icon: "it-pa" },
                { title: "Politici", icon: "it-user" },
                { title: "Luoghi", icon: "it-pa" },
              ].map(({ title, icon, flagIcon }, i) => (
                <Col size="12" sm={6} lg={4} key={`${title}-${i}`}>
                  <article className="card-wrapper card-space">
                    <Card noWrapper className="card-bg card-big rounded shadow">
                      <div
                        className={`flag-icon ${flagIcon ? "" : "invisible"}`}
                      ></div>
                      <div className="etichetta">
                        <Icon icon={icon} />
                        <span>{title}</span>
                      </div>
                      <CardBody>
                        <CardTitle tag="h5">
                          {i % 2
                            ? "Lorem ipsum dolor sit amet "
                            : `Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor…`}
                        </CardTitle>
                        <CardText>
                          {i % 2
                            ? `Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut labore et
                              dolore magna aliqua.`
                            : `Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed.`}
                        </CardText>
                        <CardReadMore
                          icon="it-arrow-right"
                          text="Leggi di più"
                          href="#"
                        />
                      </CardBody>
                    </Card>
                  </article>
                </Col>
              ))}
            </Row>
          </Container>
        </div>
      </section>
      <section>
        <div className="py-5">
          <Container className="px-4">
            <Row>
              <Col>
                <h3 className="mb-4">Tutta l&#39;Amministrazione</h3>
              </Col>
            </Row>
            <Row>
              {[
                "Organi di governo",
                "Aree amministrative",
                "Uffici",
                "Politici",
                "Funzionari Amministrativi",
                "Enti e fondazioni",
                "Luoghi",
              ].map(label => {
                return (
                  <Col size="12" sm={6} lg={4} key={label}>
                    <Card>
                      <CardBody>
                        <Link to="#">
                          <CardTitle tag="h5">{label}</CardTitle>
                        </Link>
                        <CardText>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.
                        </CardText>
                      </CardBody>
                    </Card>
                  </Col>
                );
              })}
            </Row>
          </Container>
        </div>
        <div className="py-5">
          <Container className="px-4">
            <Row>
              <Col>
                <h3 className="mb-4">Argomenti</h3>
              </Col>
            </Row>
            <Row>
              <div className="col text-center">
                <Link to="#">
                  <span className="chip chip-simple chip-primary">
                    <span className="chip-label">Cultura</span>
                  </span>
                </Link>
                <Link to="#">
                  <span className="chip chip-simple chip-primary">
                    <span className="chip-label">Muoversi</span>
                  </span>
                </Link>
                <Link to="#">
                  <span className="chip chip-simple chip-primary">
                    <span className="chip-label">Argomento di esempio</span>
                  </span>
                </Link>
              </div>
            </Row>
          </Container>
        </div>
      </section>
    </main>
  </Page_Layout>
  </Layout>
);

export default Amministrazione;
