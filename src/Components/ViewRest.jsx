import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function ViewRest() {
  const [restData, setViewData] = useState({});
  const { id } = useParams();
  const base_url = "http://localhost:3001/recipes";
  const navigate = useNavigate();
  
  const viewRestaurant = async () => {
    try {
      const { data } = await axios.get(`${base_url}/${id}`);
      setViewData(data);
    } catch (error) {
      console.error("Error fetching restaurant:", error);
    }
  };

  useEffect(() => {
    viewRestaurant();
  }, []);

  const handleDelete = async () => {
    try {
      await axios.delete(`${base_url}/${id}`);
      // Redirect to the main page after successful deletion
      navigate("/");
      alert("Success: Restaurant deleted successfully.");
    } catch (error) {
      console.error("Error deleting restaurant:", error);
      alert("Error: Failed to delete restaurant. Please try again later.");
    }
  };

  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={restData.image} />
        <Card.Body>
          <Card.Title>{restData.name}</Card.Title>
          <Card.Text>{restData.instructions}</Card.Text>
          {/* Edit and delete buttons */}
          <Button variant="primary" as={Link} to={`/edit/${id}`}>
            Edit
          </Button>{" "}
          <Button variant="danger" onClick={handleDelete}>
            Delete
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ViewRest;
