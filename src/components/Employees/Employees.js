import React, { Component } from "react";
import { Link } from "react-router-dom";
import classes from "./Employees.module.css";
import img1 from "../../assets/img1.png";

class Employees extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      employees: [],
    };
  }

  componentDidMount() {
    fetch('/data.json')
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            employees: result,
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
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
                <div className={classes.card}>
                  <div className={classes.cardtop}>
                    {" "}
                    <div className={classes.name}>{user.Title} </div>{" "}
                  </div>
                  <img
                    className={classes.image}
                    src={user.pic_url}
                    alt="Card image"
                    style={{ width: "200px" }}
                  />
                  <div classNameName="card-body">
                   
                   <ul>
                     <li>dd</li>
                     <li>dd</li>
                     <li>dd</li>
                     <li>dd</li>
                   </ul>
                 
                  </div>
                </div>
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
