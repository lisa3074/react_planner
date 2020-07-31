import React from "react";
import List from "./List";

//The list container
export default function Main(
  { cards, onFormSubmit, moveCard, deleteCard, editCard },
  props
) {
  /*   function onDragOver(event) {
    event.preventDefault();
  }
  function onDrop(e) {
    console.log("dropped");
    e.preventDefault();
    const targetHeader = props.header;
    console.log(targetHeader);
  } */
  return (
    <main className="Main">
      <section className="relativeContainer">
        {/*header is a prop I decided to use. This prop can be referenced by writing {props.header}
      This is a good level to filter data, so we dont pass along too much (save speed)
      Here I say: let cards be all enrties in the card array that match the filter, here the filter is on the list*/}
        <List
          deleteCard={deleteCard}
          moveCard={moveCard}
          editCard={editCard}
          onFormSubmit={onFormSubmit}
          header="To Do"
          cards={cards.filter((c) => c.list === "To Do")}
          /*    onDrop={onDrop}
          onDragOver={(event) => onDragOver(event)} */
        />
        <List
          deleteCard={deleteCard}
          moveCard={moveCard}
          editCard={editCard}
          onFormSubmit={onFormSubmit}
          header="Doing"
          cards={cards.filter((c) => c.list === "Doing")}
          /*    onDrop={onDrop}
          onDragOver={(event) => onDragOver(event)} */
        />
        <List
          deleteCard={deleteCard}
          moveCard={moveCard}
          editCard={editCard}
          onFormSubmit={onFormSubmit}
          header="Done"
          cards={cards.filter((c) => c.list === "Done")}
          /*       onDrop={onDrop}
          onDragOver={(event) => onDragOver(event)} */
        />
      </section>
    </main>
  );
}
