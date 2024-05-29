import React, { useState } from 'react';
import axios from 'axios';

const AddUtilityForm = () => {
  const [name, setName] = useState('');
  const [provider, setProvider] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [paymentDueDate, setPaymentDueDate] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newUtility = { name, provider, accountNumber, paymentDueDate };

    try {
      await axios.post('/api/utilities', newUtility);
      alert('Utility added successfully!');
    } catch (err) {
      console.error('Error adding utility:', err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Utility</h2>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </label>
      <label>
        Provider:
        <input type="text" value={provider} onChange={(e) => setProvider(e.target.value)} required />
      </label>
      <label>
        Account Number:
        <input type="text" value={accountNumber} onChange={(e) => setAccountNumber(e.target.value)} required />
      </label>
      <label>
        Payment Due Date:
        <input type="date" value={paymentDueDate} onChange={(e) => setPaymentDueDate(e.target.value)} required />
      </label>
      <button type="submit">Add Utility</button>
    </form>
  );
};

export default AddUtilityForm;
