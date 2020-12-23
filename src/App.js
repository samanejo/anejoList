import React from "react";
import "./styles.css";
import Header from "./Header";
import SpiritList from "./SpiritList";

export default function App() {
  return (
    <div className="App">
      <Header />
      <SpiritList className="bottom-pad" />
    </div>
  );
}
