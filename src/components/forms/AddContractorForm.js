import React, { useState } from 'react';
import axios from 'axios';

const AddContractorForm = () => {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [service, setService] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newContractor = { name, contact, service };

    try {
      await axios.post('/api/contractors', newContractor);
      alert('Contractor added successfully!');
    } catch (err) {
      console.error('Error adding contractor:', err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Contractor</h2>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </label>
      <label>
        Contact:
        <input type="text" value={contact} onChange={(e) => setContact(e.target.value)} required />
      </label>
      <label>
        Service:
        <input type="text" value={service} onChange={(e) => setService(e.target.value)} required />
      </label>
      <button type="submit">Add Contractor</button>
    </form>
  );
};

export default AddContractorForm;
