import "./Navbar.css";
import { useState } from "react";

function Navbar({ websitename }) {
  const [iswhite, setIswhite] = useState(false);
  return (
    <div className="navbar">
      <ul className="nav-link">
        <li>
          
            <h3>Portfolio</h3>
          
        </li>
        <li>
          <a href="#">Home</a>
        </li>

        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Service</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
        <li>
          <a href="#">
            <i class="fa-solid fa-grip-lines"></i>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
