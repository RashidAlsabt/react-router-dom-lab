import React from 'react';
import { useParams } from 'react-router-dom';

const MailboxDetails = ({ mailboxes }) => {
  const { mailboxId } = useParams();
  const selectedBox = mailboxes.find(
    (mailbox) => mailbox._id === Number(mailboxId)
  );

  if (!selectedBox) {
    return <p>Mailbox Not Found!</p>;
  }

  return (
    <div>
      <h2>Mailbox Details</h2>
      <p><strong>Box Number:</strong> {selectedBox._id}</p>
      <p><strong>Box Owner:</strong> {selectedBox.boxOwner}</p>
      <p><strong>Box Size:</strong> {selectedBox.boxSize}</p>
    </div>
  );
};

export default MailboxDetails;
