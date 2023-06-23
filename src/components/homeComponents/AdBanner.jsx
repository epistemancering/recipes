import React from "react";
import salmon from "../../assets/salmon.jpg";
import { Link } from "react-router-dom";

const AdBanner = () => {
  return (
    <div
      style={{ "height": "400px", "width": "100%", "display": "flex", "justifyContent": "center", "alignItems": "center",
        background: `linear-gradient(
          190deg,
          rgba(0, 0, 0, 0.8),
          rgba(0, 0, 0, 0.8)),
          url(${salmon})`,
        backgroundSize: "cover",
      }}
    >
      <div style = {{ "height": "300px", "width": "60vw", "display": "flex", "flexDirection": "column", "justifyContent": "space-evenly", "alignItems": "center", "textAlign": "center", "color": "white" }}>
        <h3>New Recipe</h3>
        <h1 style = {{ "fontSize": "60px", "color": "peru" }}>Pineapple Salmon</h1>
        <h3>
          This recipe consists of fresh wild Alaskan salmon, rubbed in a bbq
          brown sugar rub, baked for 25 minutes on a bed of pineapple, and garnished in butter, garlic, and chives. You won’t want to miss it!
        </h3>
        <Link to="/recipe/3">
          <button className="blue-btn">Check it out</button>
        </Link>
      </div>
    </div>
  );
};

export default AdBanner;
