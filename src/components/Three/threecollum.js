import React from 'react';

import Card from './card.js';
import {
  Col,
  Row,
  Container
} from 'design-react-kit';

export default function threecollum() {
  return (
    <div>
      <Container className="pt-5">
  
          <Row>
            <Col lg={{ size: 4, offset: 0, order: 1 }}>
              <Card />
            </Col>
            <Col lg={{ size: 4, offset: 0, order: 2 }}>
              <Card />
            </Col>
            <Col lg={{ size: 4, offset: 0, order: 3 }}>
              <Card />
            </Col>
          </Row>
          

          <Row>
            <Col lg={{ size: 12, offset: 0, order: 1 }}>
              <div class="my-5 pb-4 pb-lg-4 text-center">
                  <a
                    href="/"
                    class="btn text-uppercase btn-primary"
                    aria-label="Notizie: Scopri di più"
                  >
                    Scopri di più
                  </a>
                </div>
            </Col>
          </Row>

      </Container>
        



    </div>
  );
}
