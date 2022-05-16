import React from "react";
import "./Menu.css";
import Image from "../../img/logovks.jpg";

import DashboardIcon from "@mui/icons-material/Dashboard";
import HistoryIcon from '@mui/icons-material/History';

const Menu = () => {
  return (
    <aside className="Menu">
      <nav>
        <img src={Image} alt="" width="250px" />
        <ul>
          <li>
            <a href="/">
              <div className="icon">
                <DashboardIcon />
                <div className="name">FMEA</div>
              </div>
            </a>
          </li>
          <li>
            <a href="/about">
              <div className="icon">
                <HistoryIcon />
                <div className="name">Historico</div>
              </div>
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Menu;
