// src/pages/BookingPage.jsx

import React from 'react';
import RoomBooking from '../components/BookingForm/RoomBooking';
import SEOHead from '../components/SEO/SEOHead';

const BookingPage = () => {
  return (
    <>
      <SEOHead 
        title="Room Booking | Gouri Inn"
        description="Book your room at Gouri Inn. We offer a variety of rooms to suit your needs."
        keywords="hotel booking, room booking, gouri inn"
        canonicalPath="/room-booking"
      />
      <div className="container mx-auto p-4">
        <RoomBooking />
      </div>
    </>
  );
};

export default BookingPage;
