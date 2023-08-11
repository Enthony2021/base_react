import React from 'react';
import HeaderStyled from './styled';
import { Link } from 'react-router-dom';

import { FaHome, FaSignInAlt, FaUserAlt } from 'react-icons/fa';

const Header = () => {

  return (
      <HeaderStyled>
        <Link to='/'><FaHome size={24}/></Link>
        <Link to='/'><FaUserAlt size={24}/></Link>
        <Link to='/login'><FaSignInAlt size={24}/></Link>
      </HeaderStyled>
  );
};

export default Header;