import Tab from "./Tab";
import React, { Component } from "react";
import NavComponent from "./NavComponent";
import Formulir from "./Formulir";

export default class Crud extends Component {
  constructor(props) {
    super(props);

    this.state = {
      makanan: "",
      nama: "",
      deskripsi: "",
      harga: 0,
      id: "",
    };
  }

  //  Ketika user mengisi deskripsi; event target namenya 'deskripsi', event valuenya isi daripada deskripsi
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  //  Menghilangkan reload ketika button submit di click
  handleSubmit = (event) => {
    event.preventDefault();

    console.log("Data : ", this.state);
  };

  render() {
    return (
      <div>
        <NavComponent />
        <div className="container mt-5">
          <Tab />
          <Formulir
            {...this.state}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        </div>
      </div>
    );
  }
}
