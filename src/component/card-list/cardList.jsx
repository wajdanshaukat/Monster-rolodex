import React from "react";
import "./card-list.css";
import { CardComponent } from "../cards/CardComponent";
export const CardList = (props) => {
  return (
    <div className="card-list">
      {props.monsters.map((monster) => (
        <CardComponent key={monster.id} monster={monster}/>
      ))}
    </div>
  );
};
