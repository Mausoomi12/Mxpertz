import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  return (
    <div className="testimonials-container">
      <h2 className="testimonial-heading">TES<span className='test'>TIMONI</span>ALS</h2>
      <h1>What People are Saying</h1>
      <div className="testimonials">
        
        <div className="testimonial">
          <div className="rating">
            <span>★★★★★</span>
          </div>
          <h3>"A Great Find"</h3>
          <p class='news'>
            "This is the first testimonial. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. 
            Quisque non justo ut mi dictum fringilla."
          </p>
          <h4>Divi</h4>
        </div>
        <div className="testimonial">
          <div className="rating">
            <span className='star'>★★★★★</span>
          </div>
          <h3>"Fabulous food & flawless service"</h3>
          <p class='news'>
            "The second testimonial. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Quisque non justo ut mi dictum fringilla."
          </p>
          <h4>Bloom</h4>
        </div>
        <div className="testimonial">
          <div className="rating">
            <span>★★★★★</span>
          </div>
          <h3>"Another Successful Experience"</h3>
          <p class='news'>
            "Testimonial number three. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Quisque non justo ut mi dictum fringilla."
          </p>
          <h4>Extra</h4>
        </div>
        <div className="testimonial">
          <div className="rating">
            <span>★★★★★</span>
          </div>
          <h3>"Speechless"</h3>
          <p class='news'>
            "The fourth testimonial. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Quisque non justo ut mi dictum fringilla."
          </p>
          <h4>Monarch</h4>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
