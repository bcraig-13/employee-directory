import React, { Component } from "react";

class Employee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      query: "",
      emps: [],
    };
  }

  componentDidMount() {
    fetch("https://randomuser.me/api/?results=10&inc=picture,name,phone,email")
      .then((res) => res.json())
      .then((result) => {
        this.setState({
          isLoaded: true,
          emps: result.results,
        });
      });
  }

  changeInput(e) {
    this.setState({query: e.target.value})
  }

  render() {
    return this.state.emps.length === 0 ? (
      <div>
        <p>Loading...</p>
      </div>
    ) : (
      <div>
        <input value={this.state.query} type="text" onChange={this.changeInput.bind(this)} className="nameInput" />
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {this.state.emps.filter((emp) => emp.name.first.includes(this.state.query) || emp.name.last.includes(this.state.query)).map((emp, idx) => {
              return (
                <tr key={idx}>
                  <td><img src={emp.picture.medium} alt={emp.name} /></td>
                  <td>
                    {emp.name.first} {emp.name.last}
                  </td>
                  <td>{emp.phone}</td>
                  <td>{emp.email}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Employee;
