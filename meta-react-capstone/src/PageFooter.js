import React from 'react';
import './PageFooter.css';
import logo from '../src/assets/Logo .svg';

const PageFooter = () => {
  return (
    <footer>
      <section>
        <div className='company-info'>
          <img src={logo} alt=''/>
          <p>If you are satified we have our reward</p>
        </div>
        <div>
          <h3> links</h3>
          <ul>
            <li><a href='/'>Home</a></li>
            <li><a href='/'>About</a></li>
            <li><a href='/'>Menu</a></li>
            <li><a href='/'>Order Online</a></li>
            <li><a href='/'>Login</a></li>
          </ul>
        </div>
        <div>
          <h3>Contact</h3>
          <ul>
            <li>Address: <br/> 999 city United States</li>
            <li>Phone: <br/> ++995 403 234</li>
            <li>Email: <br/> LittleLemon.com</li>
          </ul>
        </div>
        <div>
          <h3>Connect with us</h3>
          <ul>
            <li><a href='/'>Facebook</a></li>
            <li><a href='/'>Instagram</a></li>
            <li><a href='/'>Twitter</a></li>
          </ul>
        </div>
      </section>
    </footer>
  );
}

export default PageFooter;