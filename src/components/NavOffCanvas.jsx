import React from "react";
import { useState } from "react";
import { Offcanvas } from "react-bootstrap";
import { FiMenu } from "react-icons/fi";
import { Link } from "react-router-dom";
import "../styles/Nav.css"

const NavOffCanvas = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button onClick={handleShow} id="nav_button">
        <FiMenu id="button_bars"/>
      </button>
      <Offcanvas show={show} onHide={handleClose} placement="end" id="offcanvas_container">
        <Offcanvas.Header closeButton id="offcanvas_header">
          <Offcanvas.Title>The Compendium</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body id="Offcanvas_body">
          <Link to="/" className="offcanvas_nav_link">Home</Link>
          <Link to="/spells" className="offcanvas_nav_link">Spells</Link>
          <Link to="/races" className="offcanvas_nav_link">Races</Link>
          <Link to="/classes" className="offcanvas_nav_link">Classes</Link>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default NavOffCanvas;
