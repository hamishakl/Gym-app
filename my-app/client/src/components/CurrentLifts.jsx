import React, { Component } from "react";
import {
    Table
  } from "reactstrap";

export default class CurrentLifts extends Component {
  render() {
    return (
      <Table responsive>
        <thead>
          <tr>
            <th>Lifts to date</th>
            <th>Squat</th>
            <th>Bench</th>
            <th>Deadlift</th>
            <th>OHP</th>
            <th>Weighted Chin</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
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
