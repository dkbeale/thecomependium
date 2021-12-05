import React, { useEffect, useState } from "react";
import { getRaces } from "../utils/api";
import { Card } from "react-bootstrap";
import "../styles/Races.css";
import { Modal } from "react-bootstrap";

const Races = () => {
  //const [chooseRace, setChooseRace] = useState(null)
  const [races, setRaces] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [singleRace, setSingleRace] = useState([])

  useEffect(() => {
    getRaces(null).then((res) => {
      setRaces(res.results);
    });
  }, []);

  //console.log(races);

  const handleModalOpen = (race) => {
    setShowModal(true)
    setSingleRace(race)
  }

  console.log(singleRace)

  return (
    <section>
      <h1>Races</h1>
      <div id="races_card">
        {races.map((race, index) => {
          return (
            
              <Card
                key={race.slug}
                style={{ width: "18rem" }}
                onClick={() => handleModalOpen(race)}
              >
                <Card.Img
                  variant="top"
                  src={require(`../assets/${race.slug}.png`).default}
                />
                <Card.Body>
                  <Card.Title>{race.name}</Card.Title>
                </Card.Body>
              </Card>
              
            
          );
        })}
      </div>
      <Modal
        dialogClassName="race-modal"
        show={showModal}
        onHide={() => setShowModal(false)}
      >
        <Modal.Header closeButton>
          <Modal.Title>{singleRace.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {" "}
          <p>
            {singleRace.traits}
          </p>
        </Modal.Body>
      </Modal>
    </section>
  );
};

export default Races;
