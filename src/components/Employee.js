import React, { Component } from "react";

class Employee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      emps: []
    }
  }

  //Calls api once? Can get my results back but need to put them into vars
  componentDidMount() {
    fetch("https://randomuser.me/api/?results=50&inc=picture,name,phone,email")
    .then(res => res.json())
    .then(
      (result) => {
        console.log(result.results[0]);
        this.setState({
          isLoaded: true,
          emps: result.results
        })
      }
    )
  }
  
  render() {
    return (
      <div>
        <img src="#"></img>
        <p>{this.props.name}</p>
        <p>{this.props.phone}</p>
        <p>{this.props.email}</p>
      </div>
    );
  }
}

export default Employee;
