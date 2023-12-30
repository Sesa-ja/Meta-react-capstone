import React from 'react';
import bannerImg from "../src/assets/restauranfood.jpg";
import './PageHeader.css';

const PageHeader = () => {
  return (
    <header className='header'>
      <section>
        <div className='banner'>
          <h2>Little Lemon</h2>
          <h3>Chicago</h3>
          <p>Little Lemon Restaurant is a culinary gem that<br></br> delights the senses with its vibrant flavors and inviting ambiance.</p>
          <a href="/booking"><button aria-label='onClick'>Reserve Table</button></a>
        </div>
        <div className='banner-img'>
          <img src={bannerImg} alt=''/>
        </div>
      </section>
    </header>
  );
}

export default PageHeader;