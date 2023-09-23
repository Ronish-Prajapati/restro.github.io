import React from 'react';
import images from '../../constants/images';
import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id='about'>
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt='g'/>
    </div>
    <div className="app__aboutus-content flex_center">
      <div className='app__aboutus-content flex__center'>
      <div className='app__aboutus-content_about'>
        <h1 className='headtext__cormorant'>About Us</h1>
        <img src={images.spoon} alt='spoon' className='spoon__img'/>
        <p className='p__opensans'>Trisara not only serves variety of cuisines to its customers but also organizes various events such as musical programs and fashion show which has also increased the number of people coming to the restaurant. </p>
        <button type='button' className='custom__button'>Know More</button>
      </div>

      <div className='app__aboutus-content_knife flex__center'>
      <img src={images.knife} alt='knife'/>
      </div>
      <div className='app__aboutus-content_history'>
        <h1 className='headtext__cormorant'>Our History</h1>
        <img src={images.spoon} alt='spoon' className='spoon__img'/>
        <p className='p__opensans'>Trisara not only serves variety of cuisines to its customers but also organizes various events such as musical programs and fashion show which has also increased the number of people coming to the restaurant. </p>
        <button type='button' className='custom__button'>Know More</button>
      </div>
      </div>
    </div>

  </div>
);

export default AboutUs;
