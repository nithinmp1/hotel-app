import React from 'react';

const reservationStep = () => {
  return (
    <div className="reservation_step">
        <ul>
            <li><a href="#"><span>1.</span>  Choose Date</a></li>
            <li className="active"><a href="#"><span>2.</span> Choose Room</a></li>
            <li><a href="#"><span>3.</span> Make a Reservation</a></li>
            <li><a href="#"><span>4.</span> Confirmation</a></li>
        </ul>
    </div>
  )
}

export default reservationStep