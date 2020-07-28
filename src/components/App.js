import React, { useState, useEffect } from "react";
/* import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider"; */
import Nav from "./Nav";
import Main from "./Main";
import { RestDb } from "./modules/restdb";
import { init } from "./modules/mobNavigation";
/* import EditForm from "./EditForm"; */

/* import theme from "./theme"; */

export default function App() {
  const [cards, setCards] = useState([]);

  /*   function onFormSubmit(data) {
    console.log("submitted", data);
    //We make a new const (array) called "cards" (above).
    //The updater function is called "setCards" and the initial value is our old array above; "myCards"
    //in the callback, we have an event handler on the button, so when it's clicked this happens:
    //We call the updater function "setCards", and in the function we take "myCards" array and creates a copy of it
    //Then we tell the script to push the afterward entry into the end of the array. This is done by .concat
    //the array now has 3 entries instead of the initial 2.
    setCards(cards.concat(data));
  } */

  //RestDb.function is a function imported from the restdb.js module
  async function onFormSubmit(data) {
    console.log("submitted db1", data);
    RestDb.postCard(setCards, data, cards);
  }
  async function deleteCard(_id) {
    console.log("delete clicked");
    //deletes the card from the UI right away
    const newCards = cards.filter((c) => c._id !== _id);
    setCards(newCards);
    //then deletes it from the DB
    RestDb.deleteCard(_id);
  }

  async function moveCard(payload, _id, list) {
    console.log("move clicked");
    RestDb.moveCard(setCards, payload, _id, list, cards);
  }
  async function editCard(
    payload,
    _id,
    title,
    list,
    assignedTo,
    color,
    category,
    description
  ) {
    console.log(_id);
    console.log("payload " + JSON.stringify(payload));
    RestDb.editCard(
      setCards,
      payload,
      _id,
      title,
      list,
      assignedTo,
      color,
      category,
      description,
      cards
    );
  }
  /*  async function editCard(
    payload,
    title,
    list,
    added,
    assignedTo,
    color,
    category,
    description,
    _id
  ) {
    const title = title;
    const list = list;
    const assignedTo = assignedTo;
    const color = color;
    const category = category;
    const description = description;
    const id = _id; */
  /* RestDb.editCard(
      setCards,
      payload,
      title,
      list,
      added,
      assignedTo,
      color,
      category,
      description,
      _id,
      cards
    ); 
    console.log("sent to editCards " + JSON.stringify(payload));
    console.log(cards);
  }*/

  useEffect(() => {
    RestDb.getCards(setCards);
  }, []);

  if (cards.length === 0) {
    return (
      <div className="load_container">
        <h1 className="loading">LOADING</h1>
      </div>
    );
  } else {
    setTimeout(() => {
      init();
    }, 10);
  }

  return (
    <div className="App">
      {cards === "" && <h1>LOADING</h1>}
      <Nav onFormSubmit={onFormSubmit} />
      <Main
        deleteCard={deleteCard}
        moveCard={moveCard}
        editCard={editCard}
        cards={cards}
      />
    </div>
  );
}
