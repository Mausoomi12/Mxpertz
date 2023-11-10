import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <div>
      <nav>
          <h3 className="header-text">Restaurant</h3>
          <h3 className="header-text1">Landing</h3>
          <h3 className="header-text2">Page</h3>
        <ul>
          <li>Landing</li>
          <li>Home</li>
          <li>Gallery</li>
          <li>Shop</li>
          <li>Blog</li>
          <li>About</li>
          <li>Team</li>
          <li>Contact</li>
        </ul>
        
      </nav>
      <div className="content">
      
        <img src="pic1.png" alt="Restaurant Image" />
        
        <div className="button-container">
        <div className="textbox-container">
              <div className="centered-text"><h1>Only Quality Food</h1>
              <p class='home-text'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum, similique beatae eum nobis ipsa tenetur reprehenderit. Ipsum, incidunt, rem iste pariatur, explicabo voluptate fuga dolorum deserunt illum voluptas dicta vitae.</p></div>
              
          </div>
          <button className="view-menu-button">View Menu</button>
          <button className="reservation-button">Reservation</button>
          
        </div>
        
      </div>
    </div>
  );
};

export default Navbar;
