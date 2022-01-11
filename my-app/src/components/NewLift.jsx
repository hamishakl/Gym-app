import React, { useState } from "react";
import {
  Form,
  FormGroup,
  Label,
  Col,
  Input,
  FormText,
  Button,
} from "reactstrap";

function NewLift() {
  let calc1rm = (a, b) => {
    let weight = a * b * 0.0333 + a;
    console.log(weight);
    return weight;
  };
  const [oneRM, setCount] = useState(0);

  return (
    <>
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
          <Input type="number" id="weight" />
          <FormText>Input the weight</FormText>
        </FormGroup>
        <FormGroup>
          <Label for="reps">Reps</Label>
          <Input type="number" id="reps" />
          <FormText>Input the reps</FormText>
        </FormGroup>
        <FormGroup row>
          <Label for="dateSelect" sm={2}>
            Choose dated
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
            <Button onClick={() => setCount(oneRM + 1)}>Submits</Button>
          </Col>
        </FormGroup>
      </Form>
      <p>You clicked {oneRM} times</p>
    </>
  );
}

export default NewLift;
