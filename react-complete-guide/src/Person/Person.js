import React from "react";
import './Person.css';

const person = (props) => {
  return (
    <div className="Person">
      <p onClick={props.click}>
        Ja sam {props.name} i imam {props.age} godina
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value = {props.name}/>
    </div>
  );
};

export default person;
