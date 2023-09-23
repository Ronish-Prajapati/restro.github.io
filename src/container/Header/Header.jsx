import React from 'react';
import images from '../../constants/images';
import './Header.css';
import { SubHeading } from '../../components';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    <div className="app__wrapper_info">
      <SubHeading title="Chase the new flavour"/>
      <h1 className='app__header-h1'>Garden of Heavens</h1>
      <p className='p__opensans' style={{margin:'2rem 0rem'}}>Located at one of the busy streets of Lazimpat, Trisara, meaning the ‘garden of heaven’, gives respite to the people from busy world by providing a peaceful place to enjoy their meal. Be it quick snacks or long course meal, the place offers both with expertise and unique flavor.</p>
      <button type='button' className='custom__button'>Explore Menu</button>
    </div>
    <div className="app__wrapper_img">
  <img src={images.welcome} alt='welcome'/>
    </div>
  </div>
);

export default Header;
