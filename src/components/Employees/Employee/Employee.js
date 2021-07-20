import React from "react";
import classes from "../../Employees/Employees.module.css";

import imgMale from "../../../assets/imgMale.png";
import imgFemale from "../../../assets/imgFemale.png";
import car from "../../../assets/car.png";

const Employee = (props) => {
  return (
    <div className={classes.card}>
      <div className={classes.cardtop}>
        {" "}
        <div className={classes.name}>{props.Title} </div>{" "}
      </div>

      <img
        className={classes.image}
        src={
          props.pic_url
            ? props.pic_url
            : props.gender === "Male"
            ? imgMale
            : imgFemale
        }
      />

      <br></br>

      <br></br>

      <div className={classes["card-body"]}>
        <ul>
          {props.city == null ? null : (
            <li>
              {" "}
              <b>city: </b>
              {props.city}
            </li>
          )}
          {props.email == null ? null : (
            <li>
              {" "}
              <b>mail:</b>{" "}
              <a href={`mailto:${props.email}?subject=Hi, ${props.Title}`}>
                {props.email}
              </a>{" "}
            </li>
          )}

          {props.gender == null ? null : (
            <li>
              <b>gender: </b> {props.gender}
            </li>
          )}
        </ul>
      </div>

      <br></br>
      <div className={classes.car}>
        {props.car === true ? (
          <img className={classes.carIcon} src={car}></img>
        ) : null}
      </div>
    </div>
  );
};

export default Employee;
