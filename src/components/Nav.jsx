import d20icon from "../assets/d20icon.png";
import "../styles/Nav.css";
import { Link } from "react-router-dom";
import NavOffCanvas from "./NavOffCanvas";

const Navigation = () => {
  return (
    <section id="nav_bar">
      <div id="nav_content">
        <div id="title_and_icon">
        <img alt="site icon" src={d20icon} width="40" height="40" />{" "}
        <h2>The Compendium</h2>
      </div>
        <div id="nav_links">
          <Link to="/" className="nav_link">Home</Link>
          <Link to="/spells" className="nav_link">Spells</Link>
          <Link to="/races" className="nav_link">Races</Link>
          <Link to="/classes" className="nav_link">Classes</Link>
        </div>
        <NavOffCanvas/>
      </div>
    </section>
  );
};

export default Navigation;

