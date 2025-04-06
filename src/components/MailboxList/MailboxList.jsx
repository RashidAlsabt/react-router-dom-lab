// src/components/MailboxList/MailboxList.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './MailboxList.css'; // optional if you're styling

const MailboxList = ({ mailboxes }) => {
  return (
    <div>
      <h2>All Mailboxes</h2>
      <div className="mailbox-grid">
        {mailboxes.map((mailbox) => (
          <Link
            to={`/mailboxes/${mailbox._id}`}
            key={mailbox._id}
            className="mail-box"
          >
            {mailbox._id}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MailboxList;
