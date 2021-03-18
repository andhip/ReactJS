import Tab from "./Tab";
import React, { Component } from "react";
import NavComponent from "./NavComponent";
import Formulir from "./Formulir";

export default class Crud extends Component {
  render() {
    return (
      <div>
        <NavComponent />
        <div className="container mt-5">
          <Tab />
          <Formulir />
        </div>
      </div>
    );
  }
}
