import React from 'react';
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';

function ContactUs() {
  return (
    <>
    <div className="container mt-5 bg-light">
      <div className="contact-info-container p-4">
        <h2>Contact Us</h2>
        <p>Feel free to contact us via the following methods:</p>
        <div className="contact-info">
          <p><strong>Email:</strong> contact@newsify.com</p>
          <p><strong>Phone:</strong> +1234567890</p>
          <p><strong>Social Media:</strong> 
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className='mx-2'><FaTwitter /></a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className='mx-2'><FaFacebook /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className='mx-2'><FaInstagram /></a>
          </p>
          <p><strong>Address:</strong> 123 Main Street, City, Country</p>
        </div>
      </div>
    </div>
   
    </>   
  );
}

export default ContactUs;
