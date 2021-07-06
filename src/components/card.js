import React from 'react'
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
    CardCategory,
    CardSignature,
    CardImg,
    Link
  } from "design-react-kit";

  
export default function card() {
    return (
        <>

        {[
                { title: "Luoghi"},
                { title: "Funzionari amministrativi"},
                { title: "Uffici" },
                { title: "Luoghi"},
                { title: "Politici",},
                { title: "Luoghi"},
              ].map(({ title}, i) => (
                
 <Col size="12" sm={6} lg={12} key={`${title}-${i}`}>
                  <article className="card-wrapper card-space">
                    <Card noWrapper className="card-bg card-big rounded shadow">
                        <CardBody tag="div">
                            <CardCategory date="10/12/2018">
                            Category
                            </CardCategory>
                            <CardTitle
                            className="big-heading"
                            tag="h5"
                            >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit…
                            </CardTitle>
                            <CardText tag="p">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </CardText>
                            <CardSignature>
                            di Federico De Paolis
                            </CardSignature>
                            <CardReadMore
                            iconName="it-arrow-right"
                            tag="a"
                            text="Leggi di più"
                            />
                        </CardBody>
                    </Card>
                    </article>
    </Col>
        
              ))}

              </>
    )
}
