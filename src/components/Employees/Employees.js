import React, { Component } from "react";
import classes from "./Employees.module.css";

import Employee from "./Employee/Employee";

class Employees extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      employees: [],
      imageLoadError: true,
    };
  }

  componentDidMount() {
    fetch("/data.json")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            employees: result,
          });
        },

        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  render() {
    const { error, isLoaded, employees } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      console.log(employees);
      return (
        <div className={classes.container}>
          <div className="row">
            <div className="col"></div>

            <div className="col-11">
              {employees.map((user) => (
                <Employee
                  id={user.id}
                  Title={user.Title}
                  email={user.email}
                  gender={user.gender}
                  car={user.car}
                  pic_url={user.pic_url}
                />
              ))}
            </div>
            <div className="col"></div>
          </div>
        </div>
      );
    }
  }
}

export default Employees;
