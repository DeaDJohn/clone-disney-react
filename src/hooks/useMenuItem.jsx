import React from 'react';
import { Link } from 'react-router-dom';

function useMenuItem(to, logo, text) {
  return (
    <Link className='px-5 py-4 flex' to={to}>
      <span>
        <img src={logo} alt="logo" />
      </span>
      <p className='pl-1'>{text}</p>
    </Link>
  );
}

export default useMenuItem;