import React from "react";
import "./Menu.css";
import Image from "../../img/logovks.jpg";

import DashboardIcon from "@mui/icons-material/Dashboard";
import HistoryIcon from '@mui/icons-material/History';
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <aside className="Menu">
      <nav>
        <img src={Image} alt="" width="250px" />
        <ul>
          <li>
            <Link to="/">
              <div className="icon">
                <DashboardIcon />
                <div className="name">FMEA</div>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/about">
              <div className="icon">
                <HistoryIcon />
                <div className="name">Historico</div>
              </div>
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Menu;
