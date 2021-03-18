import React from 'react'
import {Table} from 'react-bootstrap'

function Tab() {
    return (
        <Table striped bordered hover>
  <thead>
    <tr>
      <th>No</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    
  </tbody>
</Table>
    )
}

export default Tab
