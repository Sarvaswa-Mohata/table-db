import React, { useState, useEffect } from 'react';

const channel_deny = new BroadcastChannel('order-denial-channel');
const channel_approve = new BroadcastChannel('order-approval-channel');

export default function User() {
  const [denialMessage, setDenialMessage] = useState('');
  const [approvalMessage, setApprovalMessage] = useState('');
  useEffect(() => {
    channel_deny.addEventListener('message', (event) => {
      const receivedMessage = event.data;
      setDenialMessage(receivedMessage);
    });

    channel_approve.addEventListener('message', (event) => {
      const receivedMessage = event.data;
      const message = receivedMessage.message;
      const code = receivedMessage.VerificationCode;
      const amount = receivedMessage.Amount;
      setApprovalMessage({message, code, amount});
    });
  }, []);

  return (
    <div className="parent-div">
      <div>Hello Samson!</div>
      {denialMessage && <div>{denialMessage}</div>}
      {approvalMessage && (
  <div>
    <p>Message: {approvalMessage.message}</p>
    <p>Code: {approvalMessage.code}</p>
    <p>Amount: {approvalMessage.amount}</p>
  </div>
)}

    </div>
  );
}
