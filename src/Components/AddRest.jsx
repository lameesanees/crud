import React, { useState } from 'react';
import axios from 'axios';
import { Button, Form } from 'react-bootstrap';

const AddRest = ({ fetchData }) => {
  const [newRestaurant, setNewRestaurant] = useState({ name: '', instructions: '' });
  const base_url = 'http://localhost:3001/recipes'

  const addRestaurant = async () => {
  
      const response = await axios.post(`${base_url}`, newRestaurant);
      setNewRestaurant({ name: '', instructions: '' });
      fetchData(); // Fetch data again to update the restaurant list
      alert("Success: Restaurant added successfully.");
  };
  

  return (
    <div>
      <h2>Add Restaurant</h2>
      <Form>
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" value={newRestaurant.name} onChange={(e) => setNewRestaurant({ ...newRestaurant, name: e.target.value })} />
        </Form.Group>
        <Form.Group controlId="formInstructions">
          <Form.Label>Instructions</Form.Label>
          <Form.Control as="textarea" rows={3} value={newRestaurant.instructions} onChange={(e) => setNewRestaurant({ ...newRestaurant, instructions: e.target.value })} />
        </Form.Group>
        <Button variant="primary" onClick={addRestaurant}>Add Restaurant</Button>
      </Form>
    </div>
  );
};

export default AddRest;
