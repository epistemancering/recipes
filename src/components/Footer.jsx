import React from "react";
import { ImFacebook, ImInstagram, ImTwitter, ImGithub } from "react-icons/im";

const Footer = () => {
  return (
    <footer style = {{ "position": "absolute", "bottom": "-150px", "height": "150px", "width": "100%", "backgroundColor": "rgb(63, 63, 63)", "display": "flex", "justifyContent": "space-between", "alignItems": "center" }}>
      <div style = {{ "width": "35vw", "display": "flex", "flexDirection": "column", "alignItems": "center", "color": "white" }}>
        <h5>Hit us up on our socials!</h5>
        <div style = {{ "display": "flex", "flexDirection": "row" }}>
          <a href="https://www.devmountain.com" target="_blank">
            <ImFacebook size="1.5em" color="#3f3f3f" />
          </a>
          <a href="https://www.devmountain.com" target="_blank">
            <ImInstagram size="1.5em" color="#3f3f3f" />
          </a>
          <a href="https://www.devmountain.com" target="_blank">
            <ImTwitter size="1.5em" color="#3f3f3f" />
          </a>
          <a href="https://www.devmountain.com" target="_blank">
            <ImGithub size="1.5em" color="#3f3f3f" />
          </a>
        </div>
      </div>
      <svg style = {{ "width": "23vw", "display": "flex", "justifyContent": "space-evenly" }}
        width="110"
        height="110"
        viewBox="0 0 512 512"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="256" cy="256" r="248" stroke="#25AAE1" stroke-width="16" />
        <path
          d="M255 222L203 132.5L83.9282 338H233L331 168L427.675 338.571L317.5 338.5"
          stroke="#25AAE1"
          stroke-width="16"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </footer>
  );
};

export default Footer;
