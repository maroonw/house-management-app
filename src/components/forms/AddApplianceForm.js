import React, { useState } from 'react';
import axios from 'axios';

const AddApplianceForm = () => {
  const [name, setName] = useState('');
  const [model, setModel] = useState('');
  const [purchaseDate, setPurchaseDate] = useState('');
  const [warranty, setWarranty] = useState('');
  const [area, setArea] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newAppliance = { name, model, purchaseDate, warranty, area };

    try {
      await axios.post('/api/appliances', newAppliance);
      alert('Appliance added successfully!');
    } catch (err) {
      console.error('Error adding appliance:', err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Appliance</h2>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </label>
      <label>
        Model:
        <input type="text" value={model} onChange={(e) => setModel(e.target.value)} required />
      </label>
      <label>
        Purchase Date:
        <input type="date" value={purchaseDate} onChange={(e) => setPurchaseDate(e.target.value)} required />
      </label>
      <label>
        Warranty:
        <input type="text" value={warranty} onChange={(e) => setWarranty(e.target.value)} />
      </label>
      <label>
        Area:
        <input type="text" value={area} onChange={(e) => setArea(e.target.value)} required />
      </label>
      <button type="submit">Add Appliance</button>
    </form>
  );
};

export default AddApplianceForm;
