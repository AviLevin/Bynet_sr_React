import React, { Component } from "react";
import { Link } from "react-router-dom";
import classes from "./Employees.module.css";
import imgMale from "../../assets/imgMale.png";
import imgFemale from "../../assets/imgFemale.png";

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
    console.log(this.state.employees.gender + "ff");
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
                    src={user.pic_url ? user.pic_url : this.imghandler()}
                  />

                  <br></br>

                  <br></br>

                  <div className={classes["card-body"]}>
                    <ul>
                      <li>city: {user.city}</li>
                      <li>mail: {user.email}</li>
                      <li>gender: {user.gender}</li>
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

  imghandler() {
    let image = imgMale;
    image = this.state.employees.gender === "Female" ? imgMale : imgFemale;
    return image;
  }
}

export default Employees;
