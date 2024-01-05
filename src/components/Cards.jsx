import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function Cards() {
  return (
    <div>
      <Card
        className="card mt-5"
        style={{ width: "18rem", maxHeight: "360px" }}
      >
        <Card.Img variant="top" src="https://source.unsplash.com/random" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <div className="container w-100">
            <select className="m-2 h-100 bg-success rounded" name="" id="">
              {Array.from(Array(6), (e, i) => {
                return (
                  <option key={i + 1} className="bg-success" value="i+1">
                    {i}
                  </option>
                );
              })}
            </select>
            <select name="" id="" className="m-2 h-100 bg-success rounded">
              <option value="Half">Half</option>
              <option value="Full">Full</option>
            </select>

            <div className="d-inline h-100 fs-5">Total Price</div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}
