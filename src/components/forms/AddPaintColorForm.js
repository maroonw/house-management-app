import React, { useState } from 'react';
import axios from 'axios';

const AddPaintColorForm = () => {
  const [room, setRoom] = useState('');
  const [color, setColor] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newPaintColor = { room, color };

    try {
      await axios.post('/api/paintColors', newPaintColor);
      alert('Paint color added successfully!');
    } catch (err) {
      console.error('Error adding paint color:', err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Paint Color</h2>
      <label>
        Room:
        <input type="text" value={room} onChange={(e) => setRoom(e.target.value)} required />
      </label>
      <label>
        Color:
        <input type="text" value={color} onChange={(e) => setColor(e.target.value)} required />
      </label>
      <button type="submit">Add Paint Color</button>
    </form>
  );
};

export default AddPaintColorForm;
