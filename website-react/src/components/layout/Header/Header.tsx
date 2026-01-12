import { NavLink } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import styles from './Header.module.css';

const Header = () => {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand as={NavLink} to="/main">
            Home
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarSupportedContent" />
          <Navbar.Collapse id="navbarSupportedContent">
            <Nav className="me-auto mb-2 mb-lg-0">
              <Nav.Link as={NavLink} to="/about">
                About
              </Nav.Link>
              <Nav.Link as={NavLink} to="/blog">
                Blog
              </Nav.Link>
              <Nav.Link as={NavLink} to="/design">
                Design
              </Nav.Link>
              <Nav.Link as={NavLink} to="/design">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className={`${styles.jumbotron} bg-transparent text-dark`}>
        <h1 className="display-4 text-center">Daniel's New Website</h1>
        <hr className="my-4" />
      </div>
    </>
  );
};

export default Header;
