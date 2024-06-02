import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function EditRest() {
  const [editedRestaurant, setEditedRestaurant] = useState({});
  const { id } = useParams();
  const base_url = "http://localhost:3001/recipes";
  const navigate = useNavigate();

  const fetchRestaurant = async () => {
    try {
      const { data } = await axios.get(`${base_url}/${id}`);
      setEditedRestaurant(data);
    } catch (error) {
      console.error("Error fetching restaurant:", error);
    }
  };

  useEffect(() => {
    fetchRestaurant();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedRestaurant({ ...editedRestaurant, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`${base_url}/${id}`, editedRestaurant);
      navigate(`/view/${id}`);
      alert("Success: Restaurant updated successfully.");
    } catch (error) {
      console.error("Error updating restaurant:", error);
      alert("Error: Failed to update restaurant. Please try again later.");
    }
  };

  return (
    <div>
      <h2>Edit Restaurant</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={editedRestaurant.name || ""}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="formInstructions">
          <Form.Label>Instructions</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="instructions"
            value={editedRestaurant.instructions || ""}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Update Restaurant
        </Button>
      </Form>
    </div>
  );
}

export default EditRest;
