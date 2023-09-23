import React from 'react';

import './Chef.css';
import images from '../../constants/images';
import { SubHeading } from '../../components';
const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.utsav} alt="chef" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Chef's Word"/>
      <h1 className='headtext__cormorant'>What we believe in</h1>
      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote}alt='quote'/>
          <p className='p__opensans'>True hospitality consists of giving the best of yourself to your guests</p>
        </div>
        <p className='p__opensans'>Hospitality is present when something happens for you. It is absent when something happens to you. Those two simple prepositions – for and to – express it all</p>
      </div>
      <div className="app__chef-sign">
        <p>Utsav Gurmachan Magar</p>
        <p className='p__opensans'>Chef & Founder</p>
        <img src={images.signature} alt='sign'/>
      </div>
    </div>
  </div>
);

export default Chef;
