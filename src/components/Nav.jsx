import d20icon from "../images/d20icon.png";
import "../styles/Nav.css";
import { Link } from "react-router-dom";
import NavOffCanvas from "./NavOffCanvas";

const Navigation = () => {
  return (
    <section id="nav_bar">
      <div id="nav_content">
        <img alt="site icon" src={d20icon} width="40" height="40" />{" "}
        <h2>The Compendium</h2>
        <div id="nav_links">
          <Link to="/">Home</Link>
          <Link to="/spells">Spells</Link>
          <Link to="/races">Races</Link>
          <Link to="/classes">Classes</Link>
          <NavOffCanvas/>
        </div>
      </div>
    </section>
  );
};

export default Navigation;

{
  /* <Navbar expand="md" fixed="top" id="nav_bar" >
    //   <Container id="nav_container">
    //     <Navbar.Brand id="nav_brand">
    //       <img
    //         alt="site icon"
    //         src={d20icon}
    //         width="30"
    //         height="30"
    //         className="d-inline-block align-top"
    //       />{" "}
    //       The Compendium
    //     </Navbar.Brand>
    //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //     <Navbar.Collapse id="basic-navbar-nav">
    //       <Nav className="me-auto">
    //         <LinkContainer to="/" className="nav_links">
    //           <Nav.Link className="nav_links">Home</Nav.Link>
    //         </LinkContainer>
    //         <LinkContainer to="/spells">
    //           <Nav.Link className="nav_links">Spells</Nav.Link>
    //         </LinkContainer>
    //         <LinkContainer to="/races">
    //           <Nav.Link className="nav_links">Races</Nav.Link>
    //         </LinkContainer>
    //         <LinkContainer to="/classes">
    //           <Nav.Link className="nav_links">Classes</Nav.Link>
    //         </LinkContainer>
    //       </Nav>
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>
 */
}
