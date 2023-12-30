// MainContent.js
import React, { useReducer } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import PageHeader from './PageHeader';
import './MainContent.css';
import BookingComponent from './BookingComponent';
import ConfirmedBookingComponent from './ConfirmedBookingComponent';

const MainContent = () => {
  const seedRandom = function (seed) {
    var m = 2**35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
      return (s = s * a % m) / m;
    };
  };

  const fetchAPI = function (date) {
    let result = [];
    let random = seedRandom(date.getDate());
    for (let i = 17; i <= 23; i++) {
      if (random() < 0.5) {
        result.push(i + ':00');
      }
      if (random() > 0.5) {
        result.push(i + ':30');
      }
    }
    return result;
  };

  const submitAPI = function (formData) {
    return true;
  };

  const initialState = { availableTimes: fetchAPI(new Date()) };
  const [state] = useReducer(updateTimes, initialState);

  function updateTimes(state, date) {
    return { availableTimes: fetchAPI(new Date()) };
  }

  const navigate = useNavigate();

  function submitForm(formData) {
    if (submitAPI(formData)) {
      navigate("/confirmed");
    }
  }

  return (
    <main className='main'>
      <Routes>
        <Route path="/" element={<PageHeader />} />
        <Route
          path="/booking"
          element={<BookingComponent availableTimes={state.availableTimes} submitForm={submitForm} />}
        />
        <Route path="/confirmed" element={<ConfirmedBookingComponent />} />
      </Routes>
    </main>
  );
};

export default MainContent;