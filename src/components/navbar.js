import React from  'react';
import { Link } from "react-router-dom";
import './main.css';
const Navbar = (props) => {
   
      return (
          <div className="nav">
              <Link to='/' className="nav-link">Home</Link>
              <Link to='/animations' className="nav-link">Animation</Link>
              <Link to='/games' className="nav-link">Game</Link>
              <Link to='/posenet' className="nav-link">Pose Estimation</Link>
          </div>
      )
}

export default Navbar;