// BookingFormComponent.js
import React, { useState } from 'react';

const BookingFormComponent = ({ availableTimes, submitForm }) => {
  const [date, setDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [guests, setGuests] = useState("");
  const [occasions, setOccasions] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    submitForm(e);
  };

  const handleChange = (e) => {
    setDate(e.target.value);
  };

  const handleTimeChange = (e) => {
    setSelectedTime(e.target.value);
  };

  const renderTimeOptions = () => {
    return (
      <>
        <option value="" disabled>Select a time</option>
        {availableTimes && availableTimes.map((availableTime, index) => (
          <option key={index} value={availableTime}>{availableTime}</option>
        ))}
      </>
    );
  };

  return (
    <header>
      <section>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <div>
              <label htmlFor='book-date'>Choose Date:</label>
              <input id='book-date' value={date} onChange={handleChange} type='date' required />
            </div>
            <div>
              <label htmlFor='book-time'>Choose Time:</label>
              <select id='book-time' value={selectedTime} onChange={handleTimeChange}>
                {renderTimeOptions()}
              </select>
            </div>
            <div>
              <label htmlFor='book-guests'>Number of Guests:</label>
              <input id='book-guests' min='1' value={guests} onChange={(e) => setGuests(e.target.value)} />
            </div>
            <div>
              <label htmlFor='book-occasions'>Occasion:</label>
              <select id='book-occasions' value={occasions} onChange={(e) => setOccasions(e.target.value)}>
                <option value="Birthday">Birthday</option>
                <option value="Anniversary">Anniversary</option>
              </select>
            </div>
            <div className='btnReceive'>
              <input aria-label='onClick' type='submit' value={"Make Your Reservation"} />
            </div>
          </fieldset>
        </form>
      </section>
    </header>
  );
};

export default BookingFormComponent;