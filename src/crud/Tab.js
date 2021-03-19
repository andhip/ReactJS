import React from "react";
import { Table } from "react-bootstrap";

function Tab({ makanans, editData }) {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>No</th>
          <th>Nama Makanan</th>
          <th>Deskripsi</th>
          <th>Harga</th>
          <th>Aksi</th>
        </tr>
      </thead>
      <tbody>
        {/* looping dgn map */}
        {makanans.map((makanan, index) => {
          return (
            <tr key={index}>
              {/* start from 1 */}
              <td>{index + 1}</td>
              <td>{makanan.nama}</td>
              <td>{makanan.deskripsi}</td>
              <td>Rp. {makanan.harga}</td>
              <td>
                <button
                  className="btn btn-warning"
                  onClick={() => editData(makanan.id)}
                >
                  Edit
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}

export default Tab;
