import { useState, useEffect } from "react";
import { getSpells } from "../utils/api";
import Pagination from "./Pagination";
import { Accordion } from "react-bootstrap";
import "../styles/Spells.css";

const Spells = () => {
  const [spellsList, setSpellsList] = useState([]);
  const [spellLevel, setSpellLevel] = useState(null);
  const [spellsByClass, setSpellsByClass] = useState(null);
  const [page, setPage] = useState(1);
  const [spellCount, setSpellCount] = useState(0);

  useEffect(() => {
    getSpells(spellLevel, spellsByClass, page).then((res) => {
      setSpellsList(res.results);
      setSpellCount(res.count);
    });
  }, [spellLevel, spellsByClass, page]);

  console.log(spellsList[0])

  return (
    <section id="spells_body">
      <h2>Spells</h2>
      <Pagination itemCount={spellCount} setPage={setPage} id="spells_pag" />
      <div id="spell_search_options">
        <select
          className="form-select"
          id="spell_lvl"
          aria-label="Default select example"
          onChange={(e) => setSpellLevel(e.target.value)}
        >
          <option defaultValue="">Choose Spell Level</option>
          <option value="">All Spells</option>
          <option value="0">Cantrip</option>
          <option value="1">Level 1</option>
          <option value="2">Level 2</option>
          <option value="3">Level 3</option>
          <option value="4">Level 4</option>
          <option value="5">Level 5</option>
          <option value="6">Level 6</option>
          <option value="7">Level 7</option>
          <option value="8">Level 8</option>
          <option value="9">Level 9</option>
        </select>
        <select
          className="form-select"
          id="spell_class"
          aria-label="Default select example"
          onChange={(e) => setSpellsByClass(e.target.value)}
        >
          <option defaultValue="">Filter By Class</option>
          <option value="">All Classes</option>
          <option value="Bard">Bard</option>
          <option value="Cleric">Cleric</option>
          <option value="Druid">Druid</option>
          <option value="Paladin">Paladin</option>
          <option value="Ranger">Ranger</option>
          <option value="Sorcerer">Sorcerer</option>
          <option value="Warlock">Warlock</option>
          <option value="Wizard">Wizard</option>
        </select>
      </div>
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
