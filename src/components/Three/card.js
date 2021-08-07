import React from 'react';

import {
  Icon,
  CardText,
  Card,
  CardBody,
  CardCategory,
  CardTitle,
  CardReadMore,
} from 'design-react-kit';

export default function card() {
  return (
    <div>
      <div class="card">
      <div class="">
          <div class="">
            <figure class="img-wrapper">
              <img
                src="https://assets.innovazione.gov.it/1628172022-6e5675cc-c260-4519-8ab0-5fa067582ed3.jpg?w=700&amp;h=400&amp;fit=crop&amp;auto=compress"
                data-sizes="100vw"
                data-src="https://assets.innovazione.gov.it/1628172022-6e5675cc-c260-4519-8ab0-5fa067582ed3.jpg?w=700&amp;h=400&amp;fit=crop&amp;auto=compress"
                data-srcset="https://assets.innovazione.gov.it/1628172022-6e5675cc-c260-4519-8ab0-5fa067582ed3.jpg?w=450&amp;h=330&amp;fit=crop&amp;auto=compress 480w, https://assets.innovazione.gov.it/1628172022-6e5675cc-c260-4519-8ab0-5fa067582ed3.jpg?w=600&amp;h=333&amp;fit=crop&amp;auto=compress 632w, https://assets.innovazione.gov.it/1628172022-6e5675cc-c260-4519-8ab0-5fa067582ed3.jpg?w=560&amp;h=333&amp;fit=crop&amp;auto=compress 844w, https://assets.innovazione.gov.it/1628172022-6e5675cc-c260-4519-8ab0-5fa067582ed3.jpg?w=700&amp;h=400&amp;fit=crop&amp;auto=compress 1091w, https://assets.innovazione.gov.it/1628172022-6e5675cc-c260-4519-8ab0-5fa067582ed3.jpg?w=320&amp;h=200&amp;fit=crop&amp;auto=compress 1320w, https://assets.innovazione.gov.it/1628172022-6e5675cc-c260-4519-8ab0-5fa067582ed3.jpg?w=400&amp;h=245&amp;fit=crop&amp;auto=compress 1400w"
                class="d-block w-100 ls-is-cached lazyloaded"
                alt="il Ministro Colao in riunione al G20"
                sizes="100vw"
                srcset="https://assets.innovazione.gov.it/1628172022-6e5675cc-c260-4519-8ab0-5fa067582ed3.jpg?w=450&amp;h=330&amp;fit=crop&amp;auto=compress 480w, https://assets.innovazione.gov.it/1628172022-6e5675cc-c260-4519-8ab0-5fa067582ed3.jpg?w=600&amp;h=333&amp;fit=crop&amp;auto=compress 632w, https://assets.innovazione.gov.it/1628172022-6e5675cc-c260-4519-8ab0-5fa067582ed3.jpg?w=560&amp;h=333&amp;fit=crop&amp;auto=compress 844w, https://assets.innovazione.gov.it/1628172022-6e5675cc-c260-4519-8ab0-5fa067582ed3.jpg?w=700&amp;h=400&amp;fit=crop&amp;auto=compress 1091w, https://assets.innovazione.gov.it/1628172022-6e5675cc-c260-4519-8ab0-5fa067582ed3.jpg?w=320&amp;h=200&amp;fit=crop&amp;auto=compress 1320w, https://assets.innovazione.gov.it/1628172022-6e5675cc-c260-4519-8ab0-5fa067582ed3.jpg?w=400&amp;h=245&amp;fit=crop&amp;auto=compress 1400w"
              />
            </figure>
          </div>
        </div>
        <div class="pb-5 card-body">
          <div class="category-top categoryicon-top">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              class="icon"
            >
              <path d="M20.5 4H17V3h-1v1H8V3H7v1H3.5A1.5 1.5 0 002 5.5v13A1.5 1.5 0 003.5 20h17a1.5 1.5 0 001.5-1.5v-13A1.5 1.5 0 0020.5 4zm.5 14.5a.5.5 0 01-.5.5h-17a.5.5 0 01-.5-.5v-13a.5.5 0 01.5-.5H7v1h1V5h8v1h1V5h3.5a.5.5 0 01.5.5zM4 8h16v1H4z"></path>
              <path fill="none" d="M0 0h24v24H0z"></path>
            </svg>
            <span class="text">Notizie</span>
            <span class="data">18 mag 2018</span>
          </div>
          <h4 class="card-title">
            Parte l'estate con oltre 300 eventi in centro e nei quartieri, tutti
            gli eventi previsti
          </h4>
          <p class="card-text">
            Inaugurazione lunedì 2 luglio con il concerto gratuito in piazza XX
            Settembre degli Sweet Soul Revue. Sul palco 20 musicisti da tutto il
            mondo.
          </p>
          <div class="chip chip-simple chip-primary">
            <a class="chip-label" href="/#">
              Estate in città
            </a>
          </div>
          <a class="pb-3 read-more" href="#">
            <span class="text">Tutte le novità</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              class="icon"
            >
              <path d="M13.9 5.4l-.7.7 5.3 5.4H3v1h15.5l-5.3 5.4.7.7 6.6-6.6zM19 12z"></path>
              <path fill="none" d="M0 0h24v24H0z"></path>
            </svg>
          </a>
        </div>
      </div>
      
    </div>
  );
}
