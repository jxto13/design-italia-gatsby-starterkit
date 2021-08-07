import React from 'react';

import Card from './card.js';

export default function threecollum() {
  return (
    <div>
      <div class="container pt-5">
        <div class="row row-cols-lg-3 mt-lg-3">
          <div class="d-none d-lg-block col-lg-4 mt-lg-3">
            <Card />
          </div>
          <div class="d-none d-lg-block col-lg-4 mt-lg-3">
            <Card />
          </div>
          <div class="d-none d-lg-block col-lg-4 mt-lg-3">
            <Card />
          </div>

          <div class="col-lg-12">
            <div class="my-5 pb-4 pb-lg-4 text-center">
              <a
                href="/notizie"
                class="btn text-uppercase btn-primary"
                style={{}}
                aria-label="Notizie: Scopri di più"
              >
                Scopri di più
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
