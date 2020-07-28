import React from "react";
import Card from "./Card";

export default //Remember to always write "props" as properties, if you need to reference some property
function List(props) {
  console.log(props);

  //running through the array (map), to get each entry by itself (like forEach)
  //For each card we place a <Card> with the data for this one card entry. We destructure the data before passing it {...card}
  //Here we are sending the whole entry (one card) to the Cards function, which then "appends" the child.
  const mappedCards = props.cards.map((card) => (
    <Card
      key={card._id}
      {...card}
      deleteCard={props.deleteCard}
      moveCard={props.moveCard}
      editCard={props.editCard}
    />
  ));

  return (
    <section className={props.header + "1 scrollList hidden"}>
      <div className={props.header}>
        <h1 className="theList mui--text-display2">{props.header}</h1>
      </div>

      <ul>{mappedCards}</ul>
    </section>
  );
}
