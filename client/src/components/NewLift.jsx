import React, { Component } from "react";
import { useFetch } from '../utils/hooks';
import { Table } from "reactstrap";

function List() {

  const [data] = useFetch(
    'http://localhost:8000/api/getList'
  );

  return(
      <div>
      <h1>List from server{"\n"}</h1>
        {data.map((item) => {
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
                <td>{item}</td>
                <td>{item}</td>
                <td>{item}</td>
                <td>{item}</td>
                <td>{item}</td>
              </tr>
            </tbody>
          </Table>
          )
      })}
       
      </div>
  );
}

export default List;
