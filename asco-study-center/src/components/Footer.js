import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import Image from 'react-bootstrap/Image';

const Footer = () => {
  const scrollToTop = (url) => {
    window.location.href = url;
    window.scrollTo({
      top: 0,
      behavior: 'auto',
    });
  };
  return (
    <footer className="mt-3 footer">

      <Link to="/asco-study-center" onClick={() => scrollToTop('/asco-study-center')} className='footer-image'> <Image className='footer-image' src={process.env.PUBLIC_URL + '/assets/ascologo.png'} fluid />
      </Link>
      <br></br>
      <br></br>
      <Link to="/asco-study-center/aboutasco" onClick={() => scrollToTop('/asco-study-center/aboutasco')} style={{ textDecoration: 'none' }} className='footer-text'>About Asco</Link>
      <br></br>
      <Link to="/asco-study-center/products" onClick={() => scrollToTop('/products')} style={{ textDecoration: 'none' }} className='footer-text'>ASCO Products
      </Link>
      <br></br>
      <Link to="/asco-study-center/studycenter" onClick={() => scrollToTop('/asco-study-center/studycenter')} style={{ textDecoration: 'none' }} className='footer-text'>Study Center</Link>
      <br></br>
      <Link to="/asco-study-center/quizcenterone" onClick={() => scrollToTop('/asco-study-center/quizcenterone')} style={{ textDecoration: 'none' }} className='footer-text'>Quiz 1
      </Link><span>{' - '}</span>
      <Link to="/asco-study-center/quizcentertwo" onClick={() => scrollToTop('/asco-study-center/quizcentertwo')} style={{ textDecoration: 'none' }} className='footer-text'>Quiz 2
      </Link><span>{' - '}</span>
      <Link to="/asco-study-center/quizcenterthree" onClick={() => scrollToTop('/asco-study-center/quizcenterthree')} style={{ textDecoration: 'none' }} className='footer-text'>Quiz 3
      </Link>
      <br></br>
      <br></br>
      <Link to="/asco-study-center" onClick={() => scrollToTop('/asco-study-center')} style={{ textDecoration: 'none' }} className='footer-text'>©2023, ASCO Power Technologies
      </Link>

    </footer>
  );
};

export default Footer;