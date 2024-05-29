import React, { useState } from 'react';
import axios from 'axios';

const AddMaintenanceTaskForm = () => {
  const [task, setTask] = useState('');
  const [frequency, setFrequency] = useState('');
  const [lastCompleted, setLastCompleted] = useState('');
  const [area, setArea] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newTask = { task, frequency, lastCompleted, area };

    try {
      await axios.post('/api/maintenanceTasks', newTask);
      alert('Maintenance task added successfully!');
    } catch (err) {
      console.error('Error adding maintenance task:', err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Maintenance Task</h2>
      <label>
        Task:
        <input type="text" value={task} onChange={(e) => setTask(e.target.value)} required />
      </label>
      <label>
        Frequency:
        <input type="text" value={frequency} onChange={(e) => setFrequency(e.target.value)} required />
      </label>
      <label>
        Last Completed:
        <input type="date" value={lastCompleted} onChange={(e) => setLastCompleted(e.target.value)} />
      </label>
      <label>
        Area:
        <input type="text" value={area} onChange={(e) => setArea(e.target.value)} required />
      </label>
      <button type="submit">Add Maintenance Task</button>
    </form>
  );
};

export default AddMaintenanceTaskForm;
