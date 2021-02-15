import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Employee from "./components/Employee";
// import reportWebVitals from './reportWebVitals';

// const fName = "Cloud";
// const phoneNum = "FF7-1997";
// const eMail = "bustersword@shinra.com";
// name={`${fName}`} phone={`${phoneNum}`} email={`${eMail}`}

ReactDOM.render(
  <React.StrictMode>
    <Employee />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your Employee, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
