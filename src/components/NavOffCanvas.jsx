import React from "react";
import { useState } from "react";
import { Offcanvas } from "react-bootstrap";

const NavOffCanvas = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button onClick={handleShow}>show</button>
      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
            <Offcanvas.Title>The Compendium</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
            Text
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default NavOffCanvas;
