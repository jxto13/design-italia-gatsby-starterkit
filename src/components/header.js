import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

import {
  Button,
  Collapse,
  Row,
  Col,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Header,
  Headers,
  HeaderContent,
  HeaderSearch,
  HeaderRightZone,
  HeaderSocialsZone,
  HeaderToggler,
  HeaderLinkZone,
  Icon,
  LinkList,
  LinkListItem,
  Nav,
  NavItem,
  NavLink,
  HeaderBrand,
  UncontrolledDropdown,
} from 'design-react-kit';

import Hamburger from '../components/Hamburger/hamburger';
import Img1 from '../images/imagem2.png';

function capitalize(str) {
  return `${str[0].toUpperCase()}${str.slice(1)}`;
}

function getSectionFullName(section) {
  if (section === 'documenti') {
    return 'Documenti e Dati';
  }
  if (section === 'novita') {
    return 'Novità';
  }
  return section;
}

function getSectionFromLocation({ pathname } = {}) {
  if (pathname === '/') {
    return '';
  }
  if (/amministrazione/.test(pathname)) {
    return 'amministrazione';
  }
  if (/novita/.test(pathname)) {
    return 'novita';
  }
  if (/servizi/.test(pathname)) {
    return 'servizi';
  }
  if (/documenti/.test(pathname)) {
    return 'documenti';
  }
}

const SlimHeaderFullResponsive = ({ theme }) => {
  return (
    <Header type="slim" theme={theme}>
      <HeaderContent>
        <HeaderBrand responsive>Ente appartenenza/Owner</HeaderBrand>
        <HeaderRightZone>
          <UncontrolledDropdown nav tag="div">
            <DropdownToggle nav caret>
              ITA
              <Icon icon="it-expand" />
            </DropdownToggle>
            <DropdownMenu>
              <Row>
                <Col size="12">
                  <LinkList>
                    <LinkListItem tag={DropdownItem} href="#">
                      <span>ITA</span>
                    </LinkListItem>
                    <LinkListItem tag={DropdownItem} href="#">
                      <span>ENG</span>
                    </LinkListItem>
                  </LinkList>
                </Col>
              </Row>
            </DropdownMenu>
          </UncontrolledDropdown>
          <Button color="primary" size="full" className="btn-icon" href="#">
            <span className="rounded-icon">
              <Icon color="primary" icon="it-user" />
            </span>
            <span className="d-none d-lg-block">
              Accedi all&#39;area personale
            </span>
          </Button>
        </HeaderRightZone>
      </HeaderContent>
    </Header>
  );
};
{/*
const SlimHeader = ({ theme }) => {
  const [isOpen, toggleDropdown] = useState(false);
  return (
    <Header type="slim" theme={theme}>
      <HeaderContent>
        <HeaderBrand tag={Link} to="/">
          Ente appartenenza/Owner
        </HeaderBrand>
        <HeaderLinkZone>
          <HeaderToggler onClick={() => toggleDropdown(!isOpen)}>
            <span>Ente appartenenza/Owner</span>
            <Icon icon="it-expand" />
          </HeaderToggler>
          <Collapse isOpen={isOpen} header>
            <LinkList tag="div">
              <LinkListItem href="#" tag="a">
                Link 1
              </LinkListItem>
              <LinkListItem active href="#" tag="a">
                Link 2 Active
              </LinkListItem>
            </LinkList>
          </Collapse>
        </HeaderLinkZone>
        <HeaderRightZone>
          <UncontrolledDropdown nav tag="div">
            <DropdownToggle nav caret>
              ITA
              <Icon icon="it-expand" />
            </DropdownToggle>
            <DropdownMenu>
              <Row>
                <Col size="12">
                  <LinkList>
                    <LinkListItem tag={DropdownItem} href="#">
                      <span>ITA</span>
                    </LinkListItem>
                    <LinkListItem tag={DropdownItem} href="#">
                      <span>ENG</span>
                    </LinkListItem>
                  </LinkList>
                </Col>
              </Row>
            </DropdownMenu>
          </UncontrolledDropdown>
          <div className="it-access-top-wrapper">
            <Button color="primary" size="sm">
              Accedi
            </Button>
          </div>
        </HeaderRightZone>
      </HeaderContent>
    </Header>
  );
}; */}

const CenterHeader = ({ theme, townName, townTagLine }) => {
  return (
    <Header type="center" theme={theme}>
      {/* <HeaderContent style={{justifyContent: "center"}}> */}
      <HeaderContent>
        <HeaderRightZone>
          <div>hello</div>
        </HeaderRightZone>
        <Link to="/" style={{ textDecoration: 'none' }}>
          {/* <HeaderBrand iconName="it-pa" style={{marginRight: "0px"}}> */}
          {/* <h2>{townName}</h2>
            <h3>{townTagLine}</h3> */}
          {/* </HeaderBrand> */}

          <div className="it-brand-wrapper">
            {/* <a><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="icon" style={{marginRight: "0px"}}>
                <path
                    d="M3 21h18v1H3zm0-1h18v-1H3zM22 9H2l10-7zM5.2 8h13.6L12 3.2zM6 18v-8H5v8zm4 0v-8H9v8zm5 0v-8h-1v8zm4 0v-8h-1v8z">
                </path>
                <path fill="none" d="M0 0h24v24H0z"></path>
            </svg>
            <div className="it-brand-text"></div>
        </a> */}
            <img src={Img1} alt={'test'} />
          </div>
        </Link>

        <div>
          <HeaderRightZone>
            {/* <HeaderSocialsZone label="Seguici su"> */}
            <HeaderSocialsZone>
              <ul>
                <li>
                  <Link to="#" aria-label="Facebook" target="_blank">
                    <Icon icon="it-facebook" />
                  </Link>
                </li>
                <li>
                  <Link to="#" aria-label="Github" target="_blank">
                    <Icon icon="it-github" />
                  </Link>
                </li>
                <li>
                  <Link to="#" aria-label="Twitter" target="_blank">
                    <Icon icon="it-twitter" />
                  </Link>
                </li>
              </ul>
            </HeaderSocialsZone>
            {/* <HeaderSearch label="Cerca" iconName="it-search" /> */}
          </HeaderRightZone>
        </div>
      </HeaderContent>
    </Header>
  );
};

const NavHeader = ({ active, theme }) => {
  const [isOpen, toggleDropdown] = useState(false);
  return (
    <Header type="navbar" theme={theme} style={{borderBottomWidth: "5px", borderColor: "#06c",borderBottomStyle: "solid"}}>
      <HeaderContent expand="lg" megamenu>
        <HeaderToggler
          onClick={() => toggleDropdown(!isOpen)}
          aria-controls="nav1"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <Icon icon="it-burger" />
        </HeaderToggler>
        <Collapse
          isOpen={isOpen}
          navbar
          header
          onOverlayClick={() => toggleDropdown(!isOpen)}
        >
          <div className="menu-wrapper" style={{ justifyContent: 'center'}}>
            <Nav navbar className="navbar-secondary">
              {['amministrazione', 'novita', 'servizi', 'documenti'].map(
                label => {
                  const isActive = label === active;
                  return (
                    <NavItem active={isActive} key={label}>
                      <NavLink to={`/${label}`} active={isActive} tag={Link}>
                        <span>{capitalize(getSectionFullName(label))}</span>
                        {isActive && <span className="sr-only">current</span>}
                      </NavLink>
                    </NavItem>
                  );
                }
              )}
            </Nav>

            {/* <Nav navbar className="navbar-secondary">
              {[
                { label: "Argomento 1" },
                { label: "Argomento 2" },
                { label: "Tutti gli argomenti...", bold: true },
              ].map(({ label, bold }) => {
                return (
                  <NavItem key={label}>
                    <NavLink to={`/${label}`} tag={Link}>
                      <span className={`${bold ? "font-weight-bold" : ""}`}>
                        {label}
                      </span>
                    </NavLink>
                  </NavItem>
                );
              })}
            </Nav> */}
          </div>
        </Collapse>
      </HeaderContent>
    </Header>
  );
};

const NewHeader = ({ active, theme }) => {
  const [isOpen, toggleDropdown] = useState(false);
  return (
    <Header type="center" theme={theme} style={{height: "120%"}}>
      {/* <HeaderContent style={{justifyContent: "center"}}> */}
      <HeaderContent style={{ justifyContent: 'center' }}>
        <Link to="/" style={{ textDecoration: 'none' }}>
          {/* <img src={Img1} style={{width: "82px", height: "82px", marginRight: "16px"}} alt={'test'} /> */}
        
          {/* <HeaderBrand style={{marginRight: "0px"}}>  */}
          {/* <div className="it-brand-wrapper">
            <a>
              
              <img className="icon" src={Img1} alt={'test2'} style={{height: "90%"}}/>
              <div className="it-brand-text">
              <h2>Nome del Comune</h2>
            <h3>Uno dei tanti Comuni d'Italia</h3>
            <h2>Porto Santo</h2>
            <h3>Junta de Freguesia</h3>
              </div>
            </a>
          </div> */}

          <HeaderBrand iconName="it-pa" style={{marginRight: "0px"}}> 
            <h2>Nome del Comune</h2>
            <h3>Uno dei tanti Comuni d'Italia</h3>
           </HeaderBrand>
          

        </Link>
      </HeaderContent>
    </Header>
  );
};

const SlimHeader = ({ theme }) => {
  const [isOpen, toggleDropdown] = useState(false);
  return (
    <Header type="slim" theme={theme}>
      <HeaderContent>
        <HeaderBrand tag={Link} to="/">
          Ente appartenenza/Owner
        </HeaderBrand>
        
        <HeaderRightZone>
          <UncontrolledDropdown nav tag="div">
            <DropdownToggle nav caret>
              ITA
              <Icon icon="it-expand" />
            </DropdownToggle>
            <DropdownMenu>
              <Row>
                <Col size="12">
                  <LinkList>
                    <LinkListItem tag={DropdownItem} href="#">
                      <span>ITA</span>
                    </LinkListItem>
                    <LinkListItem tag={DropdownItem} href="#">
                      <span>ENG</span>
                    </LinkListItem>
                  </LinkList>
                </Col>
              </Row>
            </DropdownMenu>
          </UncontrolledDropdown>
          <UncontrolledDropdown nav tag="div">
            <DropdownToggle nav caret>
              ITA
              <Icon icon="it-expand" />
            </DropdownToggle>
            <DropdownMenu>
              <Row>
                <Col size="12">
                  <LinkList>
                    <LinkListItem tag={DropdownItem} href="#">
                      <span>ITA</span>
                    </LinkListItem>
                    <LinkListItem tag={DropdownItem} href="#">
                      <span>ENG</span>
                    </LinkListItem>
                  </LinkList>
                </Col>
              </Row>
            </DropdownMenu>
          </UncontrolledDropdown>
        </HeaderRightZone>
      </HeaderContent>
    </Header>
  );
};

const CompleteHeader = ({ location, sticky, theme, type, town }) => {
  const SlimTag = type === 'default' ? SlimHeader : SlimHeaderFullResponsive;

  const page = getSectionFromLocation(location);
  const { name, tagLine } = town;
  return (
    <Headers sticky={!sticky}>
      {/* <SlimTag theme={theme} /> */}
      <div className="it-nav-wrapper">
        {/* <CenterHeader theme={theme} townName={name} townTagLine={tagLine} /> */}
        <NewHeader theme={theme} active={page} />
        <NavHeader theme={theme} active={page} />
      </div>
    </Headers>
  );
};

CompleteHeader.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  type: PropTypes.string,
  town: PropTypes.shape({
    name: PropTypes.string.isRequired,
    tagLine: PropTypes.string,
  }),
};

CompleteHeader.defaultProps = {
  type: 'default',
};

export default CompleteHeader;
