import React from 'react';
import { useStaticQuery, graphql } from "gatsby";

const  Test3 = () => {
  const tes = "test";
  const data = useStaticQuery(graphql`
  query Test {
    allStrapiArticles(filter: {slug: {eq: "test"}}) {
    edges {
      node {
        title
        content
      }
    }
  }
    }
    `);

  const town = data.allStrapiArticles.edges;
  
  return (
    <main id="content" tabindex="-1">
      <div>
        {console.log(town)}
        <div class="container pb-1 text-center text-sm-left">
          <div class="row">
            <div class="offset-lg-1 " style={{marginRight: "8.3333%"}}>
              <div class="text-center text-sm-left pb-4">
                <h1 class="h2">
                  G20: la Dichiarazione dei Ministri del digitale
                </h1>
                <p class="lead">
                  A Trieste, i Ministri del digitale hanno adottato la
                  Dichiarazione che mette al centro la digitalizzazione per una
                  ripresa inclusiva e sostenibile
                </p>
              </div>
              <div class="row mb-5 mb-md-0 mb-lg-5">
                <div class="col-md-6">
                  <span class="mid-caption text-uppercase font-weight-semibold mb-2 d-block mid-caption--large ">
                    Data
                  </span>{' '}
                  <span>05 agosto 2021</span>
                  
                </div>
                <div class="col-md-6">
                  <span class="mid-caption text-uppercase font-weight-semibold mb-2 d-block mid-caption--large ">
                    Tempo di lettura
                  </span>{' '}
                  <div class="post__reading-time">3 minuti</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container border-top pb-5">
        <div class="row no-gutter">
          <aside class="col-lg-3 border-right hidden d-none d-lg-block px-0">
            <nav
              aria-hidden="false"
              aria-label="indice di pagina"
              class="sticky-top menu-wrapper pb-5"
            >
              <div class="it-list-wrapper menu-link-list">
                <p class="h3 pt-3 pb-2 text-uppercase mid-caption font-weight-semibold">
                  Indice della pagina
                </p>
                {/* <div class="col-12 neutral-1-bg-a1 pr-0 pl-0 relative">
                  <div
                    class="_progress-indicator progress-indicator primary-bg-b1"
                    style={{width: "0%"}}
                  ></div>
                </div> */}
                <ul class="it-list small pt-3 _top-menu">
                  <li class="nav-item">
                    <a
                      href="#governo-digitale-i-punti-salienti-della-dichiarazione-ministeriale"
                      class="nav-link pr-4"
                    >
                      Governo digitale: i punti salienti della Dichiarazione
                      Ministeriale
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      href="#la-transizione-digitale-al-centro-del-g20"
                      class="nav-link pr-4"
                    >
                      La transizione digitale al centro del G20{' '}
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="#_attachments" class="nav-link pr-4" tabindex="-1">
                      Allegati
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      href="#_related-content"
                      class="nav-link pr-4"
                      tabindex="-1"
                    >
                      Potrebbero interessarti
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </aside>
          <div class="col-12 col-lg-9 pt-lg-5 _content">
            <div class="row">
              <nav
                aria-hidden="true"
                aria-label="indice di pagina mobile"
                class="sticky-top menu-wrapper col-12 d-lg-none px-0 bg-white"
              >
                <div class="it-list-wrapper menu-link-list">
                  <div
                    class="collapse-div"
                    id="accordionDiv-aside"
                    role="tablist"
                  >
                    <div class="collapse-header" id="headingA-aside">
                      <div
                        aria-controls="accordion-aside"
                        aria-expanded="false"
                        class="p-0 pt-2"
                        data-target="#accordion-aside"
                        data-toggle="collapse"
                        role="button"
                      >
                        <div class="pt-1 pb-2 px-3">
                          <p class="h3 text-uppercase mid-caption font-weight-semibold">
                            Indice della pagina
                          </p>
                        </div>
                        <div class="col-12 neutral-1-bg-a1 pr-0 pl-0 relative">
                          <div
                            class="_progress-indicator progress-indicator primary-bg-b1"
                            style={{width: "0%"}}
                          ></div>
                        </div>
                      </div>
                    </div>
                    <div
                      aria-labelledby="headingA-aside"
                      class="collapse"
                      data-parent="#accordionDiv-aside"
                      id="accordion-aside"
                      role="tabpanel"
                    >
                      <div class="collapse-body p-0">
                        <ul class="it-list small py-3 _top-menu">
                          <li class="nav-item">
                            <a
                              href="#governo-digitale-i-punti-salienti-della-dichiarazione-ministeriale"
                              class="nav-link pr-4"
                            >
                              Governo digitale: i punti salienti della
                              Dichiarazione Ministeriale
                            </a>
                          </li>
                          <li class="nav-item">
                            <a
                              href="#la-transizione-digitale-al-centro-del-g20"
                              class="nav-link pr-4"
                            >
                              La transizione digitale al centro del G20{' '}
                            </a>
                          </li>
                          <li class="nav-item">
                            <a
                              href="#_attachments"
                              class="nav-link pr-4"
                              tabindex="-1"
                            >
                              Allegati
                            </a>
                          </li>
                          <li class="nav-item">
                            <a
                              href="#_related-content"
                              class="nav-link pr-4"
                              tabindex="-1"
                            >
                              Potrebbero interessarti
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </nav>
              <div class="col-12 col-lg-9 px-0 pl-lg-4 pr-lg-5 offset-lg-1 pt-5 pt-lg-0">
                <div class="mb-5">
                  <figure class="m-0">
                    <img
                      src="https://assets.innovazione.gov.it/1628172022-6e5675cc-c260-4519-8ab0-5fa067582ed3.jpg?w=700&amp;h=1000&amp;fit=max&amp;auto=compress"
                      data-sizes="100vw"
                      data-src="https://assets.innovazione.gov.it/1628172022-6e5675cc-c260-4519-8ab0-5fa067582ed3.jpg?w=700&amp;h=1000&amp;fit=max&amp;auto=compress"
                      data-srcset="https://assets.innovazione.gov.it/1628172022-6e5675cc-c260-4519-8ab0-5fa067582ed3.jpg?w=450&amp;h=700&amp;fit=max&amp;auto=compress 480w, https://assets.innovazione.gov.it/1628172022-6e5675cc-c260-4519-8ab0-5fa067582ed3.jpg?w=750&amp;h=950&amp;fit=max&amp;auto=compress 632w, https://assets.innovazione.gov.it/1628172022-6e5675cc-c260-4519-8ab0-5fa067582ed3.jpg?w=960&amp;h=900&amp;fit=max&amp;auto=compress 844w, https://assets.innovazione.gov.it/1628172022-6e5675cc-c260-4519-8ab0-5fa067582ed3.jpg?w=700&amp;h=1000&amp;fit=max&amp;auto=compress 1091w, https://assets.innovazione.gov.it/1628172022-6e5675cc-c260-4519-8ab0-5fa067582ed3.jpg?w=1000&amp;h=1500&amp;fit=max&amp;auto=compress 1320w"
                      class="d-block w-100 m-0 lazyloaded"
                      alt="il Ministro Colao in riunione al G20"
                      sizes="100vw"
                      srcset="https://assets.innovazione.gov.it/1628172022-6e5675cc-c260-4519-8ab0-5fa067582ed3.jpg?w=450&amp;h=700&amp;fit=max&amp;auto=compress 480w, https://assets.innovazione.gov.it/1628172022-6e5675cc-c260-4519-8ab0-5fa067582ed3.jpg?w=750&amp;h=950&amp;fit=max&amp;auto=compress 632w, https://assets.innovazione.gov.it/1628172022-6e5675cc-c260-4519-8ab0-5fa067582ed3.jpg?w=960&amp;h=900&amp;fit=max&amp;auto=compress 844w, https://assets.innovazione.gov.it/1628172022-6e5675cc-c260-4519-8ab0-5fa067582ed3.jpg?w=700&amp;h=1000&amp;fit=max&amp;auto=compress 1091w, https://assets.innovazione.gov.it/1628172022-6e5675cc-c260-4519-8ab0-5fa067582ed3.jpg?w=1000&amp;h=1500&amp;fit=max&amp;auto=compress 1320w"
                    />
                  </figure>
                </div>
              </div>
              <div class="col-12 col-lg-11 offset-lg-1 ">
                <div class="container mb-4 _anchor mid-formatted-content">
                  <div class="row">
                    <div class="col-12 col-lg-9">
                      <p>
                        Si è tenuta questa mattina a Trieste, sotto la
                        Presidenza italiana, la riunione dei Ministri del
                        digitale del G20. Al termine della sessione congiunta è
                        stata adottata la{' '}
                        <strong>
                          Dichiarazione Ministeriale sulla digitalizzazione
                        </strong>{' '}
                        che riconosce il fondamentale contributo che il digitale
                        può fornire ai governi per costruire società più forti,
                        inclusive e sostenibili, soprattutto a seguito di un
                        evento eccezionale quale è stata la pandemia. I temi
                        della transizione digitale diventano parte integrante
                        dell’agenda dei futuri G20, grazie all’importante
                        risultato raggiunto dalla Presidenza italiana che ha
                        promosso la trasformazione della{' '}
                        <strong>Digital Economy Task Force (DETF)</strong> nel{' '}
                        <strong>Digital Economy Working Group (DEWG)</strong>.
                      </p>{' '}
                      <p>
                        La Dichiarazione è il risultato di un{' '}
                        <strong>percorso di collaborazione e confronto</strong>{' '}
                        le cui basi erano state poste durante le ultime edizioni
                        del G20 e che, grazie al lavoro della Presidenza
                        italiana, è giunto a compimento favorendo
                        l’apprendimento reciproco tra i Paesi membri, nella
                        consapevolezza della diversità degli approcci normativi
                        e regolamentari.
                      </p>{' '}
                      <p>
                        I Ministri hanno riconosciuto l’importanza della
                        cooperazione a livello internazionale sul tema del
                        digitale, per contribuire all’attuazione degli Obiettivi
                        di Sviluppo Sostenibile delle Nazioni Unite (SDGs), in
                        linea con le priorità della Presidenza italiana del G20,
                        People, Planet and Prosperity, identificando come temi
                        prioritari la “<strong>Digital Economy</strong>”
                        (Economia digitale) e il “
                        <strong>Digital Government</strong>” (Governo digitale).
                      </p>{' '}
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-12 col-lg-11 offset-lg-1 ">
                <div class="container d-flex flex-column align-items-center flex-sm-row mb-5">
                  <a
                    href="https://assets.innovazione.gov.it/1628084642-declaration-of-g20-digital-ministers-2021final.pdf"
                    class="btn my-3 mr-sm-4 btn-primary"
                    target="_blank"
                    rel="noopener"
                    aria-label="DICHIARAZIONE DEI MINISTRI DEL DIGITALE: (Link esterno) Scarica la Dichiarazione (PDF)"
                  >
                    Scarica la Dichiarazione (PDF)
                  </a>
                </div>
              </div>
              <div class="col-12 col-lg-9 px-0 pl-lg-4 pr-lg-5 offset-lg-1 ">
                <div class="mb-5">
                  <figure class="m-0">
                    <img
                      src="https://assets.innovazione.gov.it/1627892610-uomov.png?w=700&amp;h=1000&amp;fit=max&amp;auto=compress"
                      data-sizes="100vw"
                      data-src="https://assets.innovazione.gov.it/1627892610-uomov.png?w=700&amp;h=1000&amp;fit=max&amp;auto=compress"
                      data-srcset="https://assets.innovazione.gov.it/1627892610-uomov.png?w=450&amp;h=700&amp;fit=max&amp;auto=compress 480w, https://assets.innovazione.gov.it/1627892610-uomov.png?w=750&amp;h=950&amp;fit=max&amp;auto=compress 632w, https://assets.innovazione.gov.it/1627892610-uomov.png?w=960&amp;h=900&amp;fit=max&amp;auto=compress 844w, https://assets.innovazione.gov.it/1627892610-uomov.png?w=700&amp;h=1000&amp;fit=max&amp;auto=compress 1091w, https://assets.innovazione.gov.it/1627892610-uomov.png?w=1000&amp;h=1500&amp;fit=max&amp;auto=compress 1320w"
                      class="d-block w-100 m-0 lazyloaded"
                      alt="g20"
                      sizes="100vw"
                      srcset="https://assets.innovazione.gov.it/1627892610-uomov.png?w=450&amp;h=700&amp;fit=max&amp;auto=compress 480w, https://assets.innovazione.gov.it/1627892610-uomov.png?w=750&amp;h=950&amp;fit=max&amp;auto=compress 632w, https://assets.innovazione.gov.it/1627892610-uomov.png?w=960&amp;h=900&amp;fit=max&amp;auto=compress 844w, https://assets.innovazione.gov.it/1627892610-uomov.png?w=700&amp;h=1000&amp;fit=max&amp;auto=compress 1091w, https://assets.innovazione.gov.it/1627892610-uomov.png?w=1000&amp;h=1500&amp;fit=max&amp;auto=compress 1320w"
                    />
                  </figure>
                </div>
              </div>
              <div class="col-12 col-lg-11 offset-lg-1 ">
                <div class="container mb-4 _anchor mid-formatted-content">
                  <h2
                    class="h4 mb-4 _mid-target"
                    id="governo-digitale-i-punti-salienti-della-dichiarazione-ministeriale"
                  >
                    Governo digitale: i punti salienti della Dichiarazione
                    Ministeriale
                  </h2>
                  <div class="row">
                    <div class="col-12 col-lg-9">
                      <p>
                        La Dichiarazione Ministeriale approfondisce aree
                        tematiche di interesse per la transizione digitale del
                        settore pubblico. In particolare, la Dichiarazione:{' '}
                      </p>{' '}
                      <ul>
                        {' '}
                        <li>
                          <p>
                            Riconosce l’importanza della{' '}
                            <strong>
                              digitalizzazione dei servizi pubblici
                            </strong>{' '}
                            per cittadini e imprese, dimostrata soprattutto
                            durante la pandemia, e la necessità di fornire
                            servizi pubblici digitali inclusivi e facilmente
                            accessibili, che mettano al centro le persone nel
                            rispetto della loro privacy ma senza escludere
                            coloro che non hanno ancora accesso alle tecnologie
                            digitali. Con questo spirito i Ministri hanno
                            accolto il{' '}
                            <em>
                              Compendio sull’uso degli strumenti digitali per
                              assicurare la continuità nei servizi pubblici
                            </em>{' '}
                            e si sono impegnati nella raccolta di casi pratici
                            volti a guidare lo sviluppo di condizioni e
                            competenze abilitanti per l’implementazione di
                            servizi pubblici digitali integrati, incentrati
                            sull’uomo e basati sui diritti, orientati
                            all’utente, proattivi, etici ed inclusivi.
                          </p>
                        </li>{' '}
                        <li>
                          <p>
                            Definisce l’<strong>Identità Digitale</strong> come
                            “facile da usare, portabile, sicura e affidabile”. I
                            vari sistemi di identità digitale adottati dai Paesi
                            G20 garantiscono ai cittadini e alle imprese
                            l’accesso ai servizi digitali in sicurezza e nel
                            rispetto della privacy. La Dichiarazione fa inoltre
                            riferimento al potenziale dell’identità digitale in
                            contesti emergenziali e di aiuto umanitario, e di
                            come questa possa contribuire al raggiungimento del
                            target di Sviluppo Sostenibile 16.9 “Fornire
                            un’identità legale a tutti”. Per promuovere il
                            dialogo internazionale sul tema e avanzare la
                            discussione sull’interoperabilità, i Paesi G20 hanno
                            contribuito alla redazione della{' '}
                            <em>
                              Raccolta di Pratiche G20 sull’Identità Digitale
                            </em>
                            .
                          </p>
                        </li>{' '}
                        <li>
                          <p>
                            Riconosce il ruolo della cosiddetta “
                            <strong>regolamentazione agile</strong>” nel
                            favorire l’innovazione e la crescita economica, così
                            come nel controllare e prevenire i possibili impatti
                            negativi del progresso tecnologico, specie in ambito
                            sociale e ambientale. I membri G20 hanno offerto un
                            importante contributo all’analisi del tema
                            attraverso la partecipazione all’
                            <em>
                              Indagine sulla regolamentazione agile nei Paesi
                              G20
                            </em>{' '}
                            dove sono raccolti i diversi modelli adottati per
                            favorire una regolamentazione più agile, flessibile
                            e resiliente, anche attraverso le cosiddette “
                            <strong>regulatory sandboxes</strong>”, ovvero spazi
                            sicuri e circoscritti nei quali si può effettuare la
                            sperimentazione.
                          </p>
                        </li>{' '}
                      </ul>{' '}
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-12 col-lg-11 offset-lg-1 ">
                <div class="container mb-4 _anchor mid-formatted-content">
                  <h2
                    class="h4 mb-4 _mid-target"
                    id="la-transizione-digitale-al-centro-del-g20"
                  >
                    La transizione digitale al centro del G20{' '}
                  </h2>
                  <div class="row">
                    <div class="col-12 col-lg-9">
                      <blockquote>
                        {' '}
                        <p>
                          La Presidenza italiana ha potuto definire una
                          Dichiarazione solida e mirata e ha inoltre ottenuto
                          l'importante risultato di trasformare la Task Force
                          sull'Economia Digitale in un Gruppo di Lavoro
                          Permanente, il Digital Economy Working Group
                        </p>{' '}
                      </blockquote>{' '}
                      <p>
                        <em>
                          Vittorio Colao, Ministro per l'innovazione tecnologica
                          e la transizione digitale.
                        </em>
                      </p>{' '}
                      <p>
                        La trasformazione della Task Force in un Gruppo di
                        Lavoro potrà assicurare al dibattito G20 sul digitale
                        continuità e sistematicità. Il{' '}
                        <strong>Digital Economy Working Group (DEWG)</strong>{' '}
                        impegna i Paesi membri del G20 a includere i temi
                        relativi alla transizione digitale come parte integrante
                        dei programmi delle future Presidenze.
                      </p>{' '}
                      <p>
                        Il Documento della Dichiarazione Ministeriale è
                        disponibile e scaricabile in formato PDF, insieme ai
                        documenti elaborati nel corso del dibattito di questi
                        mesi.{' '}
                      </p>{' '}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
export default Test3;
