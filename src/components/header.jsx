import React from 'react'

//import logo
import logo from '../assets/images/logo.png';



const Header = () => {

  return (
    <header className='flex flex-col'>
      <div className='container mx-auto'>
        <img src={logo} alt='' />

        <div className='m-2 px-2 py-2 justify-space-between'>
        <a href='#'>Log in</a>
        <a href='#'>Sign up</a>
          </div>
          
          </div>
        </header>
  );
};

export default Header;
