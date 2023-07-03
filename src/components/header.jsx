import React from 'react'

//import logo
import logo from '../assets/images/logo.png';



const Header = () => {

  return (
    <header>
      <div className='container mx-auto'>
        <img src={logo} alt='' />

        <div>
        <a href='#'>Log in</a>
        <a href='#'>Sign up</a>
          </div>
          
          </div>
        </header>
  );
};

export default Header;
