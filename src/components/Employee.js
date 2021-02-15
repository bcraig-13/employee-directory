import React, { Component } from "react";

class Employee extends Component {
  state = {
    result: {},
    response: []
  }

  componentDidMount() {
    // const emps = this.API.search().then((res) => this.setState({ result: res.results })).catch((err) => console.log(err));
    // console.log(emps);
  }

  render() {
    return (
      <Employee /> 
    )
}}

export default Employee;
