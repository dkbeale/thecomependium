import {
  Navbar,
  Container,
  Offcanvas,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Nav,
} from "react-bootstrap";

const Navigation = () => {
  return (
    <Navbar bg="light" expand="1g" collapseOnSelect>
      <Container fluid>
        <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Collapse id="offcanvasNavbar">
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">
                Offcanvas
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="#action1">Home</Nav.Link>
                <Nav.Link href="#action2">Link</Nav.Link>
                <NavDropdown title="Dropdown" id="offcanvasNavbarDropdown">
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;

{
  /* <img src={d20icon} alt="" width="30" height="24" class="d-inline-block align-text-top"/> */
}

// <section>
//   <img src={d20icon} />
//   <h1>The Compendium</h1>
//   <ul>
//     <li>
//       <Link to="/" key="home">
//         Home
//       </Link>
//     </li>
//     <li>
//       <Link to="/spells" key="spells">
//         Spells
//       </Link>
//     </li>
//     <li>
//       <Link to="/classes" key="classes">
//         Classes
//       </Link>
//     </li>
//     <li>
//       <Link to="/races" key="races">
//         Races
//       </Link>
//     </li>
//   </ul>
// </section>

// import d20icon from "../images/d20icon.png";
