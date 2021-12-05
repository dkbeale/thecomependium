import React from "react";

const SpellFilter = ({ setSpellLevel, changeClass }) => {
  return (
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
        onChange={(e) => changeClass(e.target.value)}
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
  );
};

export default SpellFilter;
