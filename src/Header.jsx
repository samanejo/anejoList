import React from "react";
import "./styles.css";
import logo from "./LOGO.png";

export default function Header() {
  return (
    <div>
      <img alt="logo" src={logo}></img>
      <h1 className="title">Endangered Spirits List</h1>
      <h4 className="blurb">
        These spirits, only in stock for a limited time, have been knocked down
        from $$$. Don't miss out on these great deals!
      </h4>
    </div>
  );
}
