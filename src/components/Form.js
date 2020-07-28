import React, { useState } from "react";
import Input from "muicss/lib/react/input";
import Textarea from "muicss/lib/react/textarea";
import Option from "muicss/lib/react/option";
import Select from "muicss/lib/react/select";
import SubmitButton from "./SubmitButton";
import { CirclePicker } from "react-color";

export default function Form(props) {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [color, setColor] = useState("#ffffff");
  const [assignedTo, setAssigned] = useState("");
  let [list, setList] = useState("To Do");

  const titleChanged = (e) => {
    setTitle(e.target.value);
  };
  const catChanged = (e) => {
    setCategory(e.target.value);
  };
  const descriptionChanged = (e) => {
    setDescription(e.target.value);
  };
  const assignedChanged = (e) => {
    setAssigned(e.target.value);
  };
  const colorChanged = (color) => {
    setColor(color.hex);
  };
  const listChanged = (e) => {
    setList(e.target.value);
    console.log(e.target.value);
  };

  const outline = {
    outlineColor: "green",
  };

  function submit(evt) {
    evt.preventDefault();
    console.log(props.header);
    setTitleFocusOn(false);
    setCatFocusOn(false);
    props.onFormSubmit({
      title: title,
      list: list,
      added: Date.now(),
      assignedTo: [assignedTo],
      color: color,
      category: category,
      description: description,
    });
    setTitle("");
    setAssigned("");
    setColor("#ffffff");
    setDescription("");
    setCategory("");
    setList("To Do");
  }
  //MANUEL VALIDERING
  const [titleFocusOn, setTitleFocusOn] = useState("false");
  const [catFocusOn, setCatFocusOn] = useState("false");

  const titleFocusChanged = (e) => {
    console.log("focusChanged");
    setTitleFocusOn(true);
  };
  const catFocusChanged = (e) => {
    console.log("catFocusChanged");
    setCatFocusOn(true);
  };

  const titleBorderStyle = {
    outline: "none",
    borderRight:
      title.length > 0
        ? "2px solid #47ae7a"
        : title.length === 0 && titleFocusOn === true
        ? "2px solid #e68b3c"
        : "0px solid #e68b3c",
  };
  const catBorderStyle = {
    outline: "none",
    borderRight:
      category.length > 0
        ? "2px solid #47ae7a"
        : category.length === 0 && catFocusOn === true
        ? "2px solid #e68b3c"
        : "0px solid #ff5e5e",
  };

  return (
    <form className="addForm" id="form" onSubmit={submit}>
      <Input
        className="title"
        style={titleBorderStyle}
        label="title"
        /*  required={true} */
        floatingLabel={true}
        type="text"
        onFocus={titleFocusChanged}
        onChange={titleChanged}
        name="title"
        value={title}
      />
      <Input
        style={catBorderStyle}
        className="category"
        label="Category"
        /*   required={true} */
        floatingLabel={true}
        type="text"
        onFocus={catFocusChanged}
        onChange={catChanged}
        name="Category"
        value={category}
      />

      <Input
        className="assigned"
        label="Assigned to"
        floatingLabel={true}
        type="text"
        onChange={assignedChanged}
        name="AssignedTo"
        value={assignedTo}
      />
      <Textarea
        className="description"
        label="Description"
        floatingLabel={true}
        onChange={descriptionChanged}
        name="Description"
        style={outline}
        value={description}></Textarea>

      {/*     <Input
        className="color colorInput"
        label="Color"
        floatingLabel={true}
        type="color"
        onChange={colorChanged}
        name="Color"
        value={color}
      /> */}
      <label className="colorLabel">
        Color
        <CirclePicker
          onChange={colorChanged}
          value={color}
          className="color colorInput"
          label="Color"
          floatingLabel={true}
          name="Color"
        />
      </label>
      <Select
        className="list"
        name="input"
        label="List"
        defaultValue="To Do"
        onChange={listChanged}
        /* value={list} */
      >
        <Option value="To Do" label="To Do" />
        <Option value="Doing" label="Doing" />
        <Option value="Done" label="Done" />
      </Select>

      {/* Her er en if/else sætning:
Hvis title.length = 0 (mm.)(hvis der ikke står noget i feltet), 
så sæt name til State title and category. Ellers så giv knappen navnet Add.
Hvis inputfelterne er tomme, så sæt disabled til true og send det videre til SubmitButton.js
I SubmitButton.js bestemmes der så at knappen er disabled, hvis den er true og ellers ikke
Her er det kun nødvendigt at udfylde title og category */}

      <SubmitButton
        name={
          title.length === 0 || category.length === 0
            ? "Not there yet"
            : "Add task"
        }
        disabled={title.length === 0 || category.length === 0}
      />
    </form>
  );
}

//MANUEL VALIDERING
/*   const [titleFocusOn, setTitleFocusOn] = useState("false");
  
    const titleFocusChanged = (e) => {
    console.log("focusChanged");
    setTitleFocusOn(true);
  };

    const titleBorderStyle = {
    outline: "none",
    borderRight:
      title.length > 0
        ? "4px solid green"
        : title.length === 0 && titleFocusOn === true
        ? "3px solid red"
        : "0px solid red",
  }; */
