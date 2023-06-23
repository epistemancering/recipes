import React from "react";
import { Link } from "react-router-dom"
const Header = () => {
  return (
    <header style = {{ "height": "60px", "backgroundColor": "peru", "display": "flex", "justifyContent": "space-between", "alignItems": "center" }}>
      <h2 style = {{ "width": "29vw", "display": "flex", "justifyContent": "space-evenly", "color": "white" }}>Devmountain Eatery</h2>
      <nav style = {{ "width": "23vw", "display": "flex", "justifyContent": "space-evenly" }}>
        <Link to = "">
          <button>Home</button>
        </Link>
        <Link to = "NewRecipeScreen">
          <button>Add Recipe</button>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
