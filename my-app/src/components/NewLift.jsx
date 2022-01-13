import React, { Component } from "react";
import {
  Form,
  FormGroup,
  Label,
  Col,
  Input,
  FormText,
  Button,
  FormFeedback
} from "reactstrap";

export default class NewLift extends Component {
  render() {
    return (
      <Form>
        <FormGroup row>
          <Label for="exampleSelect" sm={2}>
            Select lift
          </Label>
          <Col sm={10}>
            <Input id="exampleSelect" name="select" type="select">
              <option>Squat</option>
              <option>Bench</option>
              <option>Deadlift</option>
              <option>OHP</option>
              <option>Weighted Chin</option>
            </Input>
          </Col>
        </FormGroup>
        <FormGroup>
          <Label for="weight">Weight</Label>
          <Input type="number" id="weight"/>
          <FormText>Input the weight</FormText>
        </FormGroup>
        <FormGroup>
          <Label for="reps">Reps</Label>
          <Input type="number" id="reps"/>
          <FormText>Input the reps</FormText>
        </FormGroup>
        <FormGroup row>
          <Label for="dateSelect" sm={2}>
            Choose date
          </Label>
          <Col sm={10}>
            <Input id="dateSelect" type="date" />
          </Col>
        </FormGroup>
        <FormGroup check row>
          <Col
            sm={{
              offset: 2,
              size: 10,
            }}
          >
            <Button>Submit</Button>
          </Col>
        </FormGroup>
      </Form>
    );
  }
}
