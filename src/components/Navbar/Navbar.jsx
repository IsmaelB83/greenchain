// React components
import { Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';
// Own Styles
import './Navbar.css'

function NavBar() {
  return (
    <Navbar className="Navbar" bg="light" expand="lg">
        <Container fluid>
            <Navbar.Brand>Greenchain API Client</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll >
                <Nav.Link>Enter API Key</Nav.Link>
                <NavDropdown title="Select API" id="navbarScrollingDropdown">
                <NavDropdown.Item>
                    API Test
                </NavDropdown.Item>
                <NavDropdown.Item>
                    API Production
                </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link disabled>
                API Test
                </Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  );
}

export default NavBar;