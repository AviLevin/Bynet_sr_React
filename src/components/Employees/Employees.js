import React, { Component } from "react";
import classes from "./Employees.module.css";
import imgMale from "../../assets/imgMale.png";
import imgFemale from "../../assets/imgFemale.png";
import car from "../../assets/car.png";

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
                <div className={classes.card}>
                  <div className={classes.cardtop}>
                    {" "}
                    <div className={classes.name}>{user.Title} </div>{" "}
                  </div>

                  <img
                    className={classes.image}
                    src={
                      user.pic_url
                        ? user.pic_url
                        : user.gender === "Male"
                        ? imgMale
                        : imgFemale
                    }
                  />

                  <br></br>

                  <br></br>

                  <div className={classes["card-body"]}>
                    <ul>
                      {user.city == null ? null : (
                        <li>
                          {" "}
                          <b>city: </b>
                          {user.city}
                        </li>
                      )}
                      {user.email == null ? null : (
                        <li>
                          {" "}
                          <b>mail:</b>{" "}
                          <a
                            href={`mailto:${user.email}?subject=Hi, ${user.Title}`}
                          >
                            {user.email}
                          </a>{" "}
                        </li>
                      )}

                      {user.gender == null ? null : (
                        <li>
                          <b>gender: </b> {user.gender}
                        </li>
                      )}
                    </ul>
                  </div>

                  <br></br>
                  <div className={classes.car}>
                    {user.car === true ? (
                      <img className={classes.carIcon} src={car}></img>
                    ) : null}
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

  carHandler() {
    let car1 = ' color: "red"  ';
    car1 = this.state.employees.car === "true" ? car1 : ', display: "none" ';
    return car1;
  }
}

export default Employees;
