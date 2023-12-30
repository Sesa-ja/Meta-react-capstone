// BookingComponent.js
import React from 'react';
import BookingFormComponent from './BookingFormComponent';

const BookingComponent = (props) => {
  const { availableTimes, dispatch, submitForm } = props;

  return (
    <BookingFormComponent
      availableTimes={availableTimes}
      dispatch={dispatch}
      submitForm={submitForm}
    />
  );
}

export default BookingComponent;