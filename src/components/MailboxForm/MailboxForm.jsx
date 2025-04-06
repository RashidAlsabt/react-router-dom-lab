// src/components/MailboxForm/MailboxForm.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MailboxForm = ({ addBox }) => {
  const [boxOwner, setBoxOwner] = useState('');
  const [boxSize, setBoxSize] = useState('Small');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newMailbox = {
      boxOwner,
      boxSize,
    };

    addBox(newMailbox);
    navigate('/mailboxes');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Box Owner:</label>
        <input
          type="text"
          value={boxOwner}
          onChange={(e) => setBoxOwner(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Box Size:</label>
        <select value={boxSize} onChange={(e) => setBoxSize(e.target.value)}>
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
        </select>
      </div>
      <button type="submit">Create Mailbox</button>
    </form>
  );
};

export default MailboxForm;
