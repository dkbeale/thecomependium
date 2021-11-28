import { useState, useEffect } from "react";
import { getSpells } from "../utils/api";
import Pagination from "./Pagination";

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

  console.log(spellsList);

  return (
    <section>
      <h2>Spells</h2>
      <Pagination itemCount={spellCount} setPage={setPage} />

      <select
        className="form-select"
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
      
        {spellsList.map((spell) => {
          return (
            <li key={spell.slug}>
              <div class="accordion accordion-flush" id={`accordion${spell.slug}`}>
                <div class="accordion-item">
                  <h2 class="accordion-header" id={`flush-heading${spell.slug}`}>
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#flush-collapse${spell.slug}`}
                      aria-expanded="false"
                      aria-controls={`flush-collapse${spell.slug}`}
                    >
                      <span>{spell.level}</span><span>{spell.name}</span><span>{spell.school}</span><span>{spell.components}</span>
                    </button>
                  </h2>
                  <div
                    id={`flush-collapse${spell.slug}`}
                    class="accordion-collapse collapse"
                    aria-labelledby={`flush-heading${spell.slug}`}
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div class="accordion-body">
                      <span>{spell.casting_time}</span>
                      <span>{spell.range}</span>
                      <span>{spell.duration}</span>
                      <span>{spell.desc}</span>
                      <span>{spell.higher_level}</span>
                      <span>{spell.material}</span>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      
    </section>
  );
};

export default Spells;

{
  /* <li key={spell.slug}>
              <p>{spell.name}</p>
            </li> */
}
