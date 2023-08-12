import React, {  useState } from 'react';
import HeaderStyled from './styled';
import { Link } from 'react-router-dom';

//Para consumir o state
import { useSelector } from 'react-redux';

import { FaHome, FaSignInAlt, FaUserAlt } from 'react-icons/fa';

const Header = () => {

  const botaoClicado = useSelector(state => state.botaoClicado);

  return (
      <HeaderStyled>
        <Link to='/'><FaHome size={24}/></Link>
        <Link to='/'><FaUserAlt size={24}/></Link>
        <Link to='/login'><FaSignInAlt size={24}/></Link>
        {botaoClicado ? 'Clicado!' : 'Não Clicado!'}
      </HeaderStyled>
  );
};

export default Header;