import React, { useState } from 'react';

function NativeDatePicker() {
  const [selectedDate, setSelectedDate] = useState('');

  return (
    <div>
      <label htmlFor="start-date">Choose a date: </label>
      <input 
        type="date" 
        id="start-date"
        value={selectedDate} 
        onChange={(e) => setSelectedDate(e.target.value)} 
      />
      <p>You selected: {selectedDate}</p>
    </div>
  );
}

export default NativeDatePicker;