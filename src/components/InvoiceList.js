import React, { useEffect, useState } from 'react';

const InvoiceList = () => {
  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    // Fetch due invoices from the backend
    // Example: fetch('/api/invoices')
    //   .then(response => response.json())
    //   .then(data => setInvoices(data))
    //   .catch(error => console.error('Error fetching invoices:', error));
  }, []);

  return (
    <div>
      <h2>Due Invoices</h2>
      <ul>
        {invoices.map((invoice) => (
          <li key={invoice.id}>
            Amount: {invoice.amount}, Due Date: {invoice.dueDate}, Recipient: {invoice.recipient}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InvoiceList;
