import React from 'react';
import Navigation from './Navigation';
import Typewriter from 'typewriter-effect';
import './Page1.css'

const Page1 = () => {
  return (
    <div className='page1-body'>
      <Navigation/>
      <h1 className='page1-title'>
        <Typewriter
          options={{
            strings: ['Page1'],
            autoStart: true,
            loop: true,
          }}
        />
      </h1>
    </div>
  
  );
};

export default Page1;
