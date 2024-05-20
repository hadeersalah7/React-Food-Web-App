import React from "react";
import logoImage from "../assets/logo.jpg";
import Button from "../UI/Button";
const Header = () => {
  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImage} alt="A resturant App" />
        <h1>A Food React App</h1>
      </div>
      <nav>
        <Button textOnly>Cart (0)</Button>
      </nav>
    </header>
  );
};

export default Header;
