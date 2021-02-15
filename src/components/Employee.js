import React from "react";

function Employee(props) {
  return (
    <div>
      <img src="#"></img>
      <p>{props.name}</p>
      <p>{props.phone}</p>
      <p>{props.email}</p>
    </div>
  );
}

export default Employee;
