import React from 'react';

import { useLocation } from 'react-router-dom';

import { Container, Nav, CustomLink } from './styles';

import Logo from '../../assets/logo.svg';

interface HeaderProps {
  size?: 'small' | 'large';
}

const Header: React.FC<HeaderProps> = ({ size = 'large' }: HeaderProps) => {
  const location = useLocation();

  return (
    <Container size={size}>
      <header>
        <img src={Logo} alt="GoFinances" />
        <Nav pathname={location.pathname}>
          <CustomLink data-hasunderline={location.pathname === '/'} to="/">
            Listagem
          </CustomLink>
          <CustomLink
            data-hasunderline={location.pathname === '/import'}
            to="/import"
          >
            Importar
          </CustomLink>
        </Nav>
      </header>
    </Container>
  );
};

export default Header;
