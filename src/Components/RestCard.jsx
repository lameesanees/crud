import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function RestCard({ restArray }) {
  console.log(restArray);
  
  return (
    <div>
      <div className="row">
        {restArray.map((item) => (
          <div className="col-md-4 mb-4">
            <Link to={`/view/${item.id}`} className="text-decoration-none">
              <Card style={{ width: "100%" }}>
                <Card.Img variant="top" src={item.image} />
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>{item.instructions}</Card.Text>
                  <Button variant="primary">View</Button>
                </Card.Body>
              </Card>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RestCard;
