import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { Link } from 'gatsby';
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  Row
} from 'design-react-kit';

const CardStyle = () => {
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
            <Link to="#">Concerto gratuito piazza XX Settembre</Link>
          </CardText>
          <CardText>
            <Link to="#">Convocazione Consiglio Comunale - Prima seduta</Link>
          </CardText>
          <CardText>
            <Link to="#">Seconda rata TARI</Link>
          </CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div>
        <h3>1</h3>
        <Row className="row-calendar">
          <div className="it-carousel-all owl-carousel it-card-bg owl-loaded owl-drag">
            <div className="owl-stage-outer">
              <div
                className="owl-stage"
                style={{
                  transform: 'translate3d(0px, 0px, 0px)',
                  transition: 'all 0s ease 0s',
                  width: '2664px',
                }}
              >
                <div className="owl-item active" style={{ width: '296px' }}>
                  <CardStyle />
                </div>
              </div>
            </div>
          </div>
        </Row>
      </div>
      <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
      <div>
        <h3>4</h3>
      </div>
      <div>
        <h3>5</h3>
      </div>
      <div>
        <h3>6</h3>
      </div>
    </Slider>
  );
}
