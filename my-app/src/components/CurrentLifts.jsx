import React, { Component } from "react";
import { Table } from "reactstrap";

export default class CurrentLifts extends Component {
  render() {
    return (
      <Table responsive>
        <thead>
          <tr>
            <th>Lifts</th>
            <th>Squat</th>
            <th>Bench</th>
            <th>Deadlift</th>
            <th>OHP</th>
            <th>Weighted Chin</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">PR</th>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr>
        </tbody>
      </Table>
    );
  }
}
