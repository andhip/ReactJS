import Tab from "./Tab";
import React, { Component } from "react";
import NavComponent from "./NavComponent";
import Formulir from "./Formulir";

export default class Crud extends Component {
  constructor(props) {
    super(props);

    this.state = {
      makanans: [],
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

    if (this.state.id === "") {
      this.setState({
        makanans: [
          ...this.state.makanans, //Semua makanan yang sudah ada
          {
            id: this.state.makanans.length + 1, //ditambah yang sekarang
            nama: this.state.nama,
            deskripsi: this.state.deskripsi,
            harga: this.state.harga,
          },
        ],
      });
    } else {
      const notEditMakanan = this.state.makanans //makanan yang tidak dipilih/diedit
        .filter((makanan) => makanan.id !== this.state.id)
        .map((filterMakanan) => {
          return filterMakanan;
        });

      this.setState({
        makanans: [
          ...notEditMakanan, //makanan yang tidak dipilih/didedit
          {
            id: this.state.makanans.length + 1, //ditambah yang sekarang
            nama: this.state.nama,
            deskripsi: this.state.deskripsi,
            harga: this.state.harga,
          },
        ],
      });
    }

    // menghapus nilai inputan pada form ketika sudah disubmit
    this.setState({
      nama: "",
      deskripsi: "",
      harga: 0,
      id: "",
    });
  };

  editData = (id) => {
    const editMakanan = this.state.makanans
      .filter((makanan) => makanan.id === id)
      .map((filterMakanan) => {
        return filterMakanan;
      });

    this.setState({
      nama: editMakanan[0].nama,
      deskripsi: editMakanan[0].deskripsi,
      harga: editMakanan[0].harga,
      id: editMakanan[0].id,
    });
  };

  deleteData = (id) => {
    const newMakanan = this.state.makanans //makanan yang tidak dipilih/diedit
      .filter((makanan) => makanan.id !== id)
      .map((filterMakanan) => {
        return filterMakanan;
      });

    this.setState({
      makanans: newMakanan,
    });
  };

  render() {
    console.log(this.state.makanans);
    return (
      <div>
        <NavComponent />
        <div className="container mt-5">
          {/* Memasukan inputan form kedalam tabel */}
          <Tab
            makanans={this.state.makanans}
            editData={this.editData}
            deleteData={this.deleteData}
          />
          {/* membuat event change n submit btn */}
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
