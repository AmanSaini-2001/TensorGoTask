import React from 'react';

const AutomationButton = () => {
  const triggerAutomation = async () => {
    // Call the backend API to trigger automation
    // Example: fetch('/api/zapier/invoice-reminder', { method: 'POST', body: JSON.stringify({ invoiceId: '123' }) });
  };

  return (
    <button onClick={triggerAutomation}>Trigger Automation</button>
  );
};

export default AutomationButton;
