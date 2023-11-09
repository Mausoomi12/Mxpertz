import React from 'react';
import './ReservationContact.css';

const ReservationContact = () => {
  const handleSubscribe = (e) => {
    e.preventDefault();
    const email = e.target.elements.email.value;
    const name = e.target.elements.name.value;
    const phone = e.target.elements.phone.value;

    // Add your logic for handling the subscription here
    console.log('Email:', email);
    console.log('Name:', name);
    console.log('Phone:', phone);

    // Clear the form fields (optional)
    e.target.reset();
  };

  return (
    <div className="reservation-contact-container">
      <div className="reservation">
        <h2>Hours of Operation</h2>
        <p class='reserve-align'>MON - FRI</p>
        <p class='reserve-align'>10:00am - 1:00pm</p>
        <p class='reserve-align'><span className='mon-fri'>4:00pm - 10:30pm</span></p>
        <p class='reserve-align'>SAT</p>
        <p class='reserve-align'><span className='mon-fri'>3:00Pm - 10:30pm</span></p>
        <p class='reserve-align'>SUN</p>
        <p class='reserve-align'>We are closed</p>
        {/* Add reservation form or button as needed */}
        <button className="reserve-button">MAKE A RESERVATION</button>

      </div>
      <div className="contact">
        <h2>Drop Us a Line</h2>
        <p class='reserve-align'>Don't be shy. Let us know if you have any questions!</p>
        <button className="reserve-button">Contact Us</button>

        <div className="subscribe-form">
          <h3 class='reserve-align'>Our Newsletter</h3>
          <p class='reserve-align'>Dialogue is an essential part of any script</p>
          <form onSubmit={handleSubscribe}>
           
            <input placeholder='First Name' className="subscribe-input" type="name" name="name" required />

          
            <input  placeholder= 'Last Name' className="subscribe-input" type="text" name="name" />

        
            <input  placeholder='Email' className="subscribe-input" type="email" name="email" />

            <button className="contact-button" type="submit">CONTACT US</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ReservationContact;
