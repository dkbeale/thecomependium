import { useState, useEffect } from "react";
import { getSpells } from "../utils/api";
import Pagination from "./Pagination";
import { Accordion } from "react-bootstrap";
import "../styles/Spells.css";
import SpellFilter from "./SpellFilter";

const Spells = () => {
  const [spellsList, setSpellsList] = useState([]);
  const [spellLevel, setSpellLevel] = useState(null);
  const [spellsByClass, setSpellsByClass] = useState(null);
  const [page, setPage] = useState(1);
  const [spellCount, setSpellCount] = useState(0);

  useEffect(() => {
    //setPage(1)
    getSpells(spellLevel, spellsByClass, page).then((res) => {
      setSpellsList(res.results);
      setSpellCount(res.count);
    });
  }, [spellLevel, spellsByClass, page]);

  const changeClass = ((e) => {
    setSpellsByClass(e)
    setPage(1)
  })

  return (
    <section id="spells_body">
      <h2>Spells</h2>
      <Pagination itemCount={spellCount} setPage={setPage} spellsByClass={spellsByClass} id="spells_pag" />
      <SpellFilter setSpellLevel={setSpellLevel} changeClass={changeClass}/>
      {spellsList.map((spell) => {
        return (
          <Accordion key={spell.slug} className="spell_accordion">
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                <span className="accordion_button_name">{spell.name}</span>
                <span className="accordion_button_lvl">{spell.level}</span>
                <span className="accordion_button_school">{spell.school}</span>                
              </Accordion.Header>
              <Accordion.Body className="spell_accordion_body">
                <div className="accordion_contents_head">
                  <div>
                    <p>Casting Time:</p>
                    <span className="spell_accordion_time">
                      {spell.casting_time}
                    </span>
                  </div>
                  <div>
                    <p>Range:</p>
                    <span className="spell_accordion_range">{spell.range}</span>
                  </div>
                  <div>
                    <p>Duration:</p>
                    <span className="spell_accordion_duration">
                      {spell.duration}
                    </span>
                  </div>
                  <div>
                    <p>Components:</p>
                    <span className="spell_accordion_comp">
                      {spell.components}
                    </span>
                  </div>
                  <div>
                    <p>School:</p>
                    <span className="spell_accordion_school">
                      {spell.school}
                    </span>
                  </div>
                  <div>
                    <p>Concentration:</p>
                    <span id="spell_accordion_conc">
                      {spell.concentration}
                    </span>
                  </div>
                </div>
                <span className="spell_accordion_desc">{spell.desc}</span>
                <div className="accordion_contents_foot">
                  <span className="spell_accordion_level">
                    <p>Higher Levels: </p>
                    {spell.higher_level}
                  </span>
                  <span className="spell_accordion_material">
                    <p>Materials: </p> {spell.material}
                  </span>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        );
      })}
    </section>
  );
};

export default Spells;
