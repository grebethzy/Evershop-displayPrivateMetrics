import React, { useState } from 'react';
import './DateDeleter.scss'; 
import { Date as DatePicker } from '@components/common/form/fields/Date'; 

const DateDeleter = ({ deleteUrl, metric, customer_id, onDataChange }) => {
  const [deleteDate, setDate] = useState('');

  const handleDelete = async () => {
    if (deleteDate) {
      const newRow = {
        deleteDate, 
        metric, 
        customer_id
      }; 
    
      const response = await fetch(deleteUrl, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newRow),
        credentials: 'include'
      });
    
      const data = await response.json();
      if (!data.success) {
        console.error(data.message); 
      } 
      onDataChange();
    } else {
      alert('Please select a date first.');
    }
  };

  const handleDateChange = (dateStr) => {
    setDate(dateStr);
  };

  return (
    <div className="date-deleter">
        <div className="date-picker-container">
            <DatePicker
            name="delete_date"
            value={deleteDate}
            onChange={handleDateChange}
            placeholder="Select date"
            />
            <div className="field-border"></div> 
        </div>
        <button className="delete-button" onClick={handleDelete}>
            Delete
        </button>
    </div>

  );
};

export default DateDeleter;
