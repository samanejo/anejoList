import React from "react";
import "./styles.css";
import SectionHeader from "./SectionHeader";
import blancos from "./Lists/blancoList";
import repos from "./Lists/repoList";
import anejos from "./Lists/anejoList";
import extras from "./Lists/extraList";
import espadins from "./Lists/espadinList";
import silvestres from "./Lists/silvestreList";
import ensambles from "./Lists/ensambleList";
import raicillas from "./Lists/raicillaList";
import sotols from "./Lists/sotolList";

export default function SpiritList() {
  return (
    <div>
      <SectionHeader spirit="Tequila - Blanco" />
      {blancos.map((item, index) => (
        <p key={index}>
          {item.name} <span>{item.price}</span>
        </p>
      ))}
      <SectionHeader spirit="Tequila - Reposado" />
      {repos.map((item, index) => (
        <p key={index}>
          {item.name} <span>{item.price}</span>
        </p>
      ))}
      <SectionHeader spirit="Tequila - Anejo" />
      {anejos.map((item, index) => (
        <p key={index}>
          {item.name} <span>{item.price}</span>
        </p>
      ))}
      <SectionHeader spirit="Tequila - Extra Anejo" />
      {extras.map((item, index) => (
        <p key={index}>
          {item.name} <span>{item.price}</span>
        </p>
      ))}
      <SectionHeader spirit="Mezcal - Espadin" />
      {espadins.map((item, index) => (
        <p key={index}>
          {item.name} <span>{item.price}</span>
        </p>
      ))}
      <SectionHeader spirit="Mezcal - Silvestres" />
      {silvestres.map((item, index) => (
        <p key={index}>
          {item.name} <span>{item.price}</span>
        </p>
      ))}
      <SectionHeader spirit="Mezcal - Ensambles" />
      {ensambles.map((item, index) => (
        <p key={index}>
          {item.name} <span>{item.price}</span>
        </p>
      ))}
      <SectionHeader spirit="Raicilla" />
      {raicillas.map((item, index) => (
        <p key={index}>
          {item.name} <span>{item.price}</span>
        </p>
      ))}
      <SectionHeader spirit="Sotol" />
      {sotols.map((item, index) => (
        <p key={index}>
          {item.name} <span>{item.price}</span>
        </p>
      ))}
    </div>
  );
}
