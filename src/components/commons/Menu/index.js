import React from 'react';
import { MenuWrapper } from './styles/MenuWrapper';
import { Logo } from '../../../theme/Logo/index';
import { Button } from '../Button/index';
import Text from '../../foundation/Text/index';

export default function Menu() {
  const links = [
    {
      texto: 'Home',
      url: '/',
    },
    {
      texto: 'Perguntas Frequentes',
      url: '/faq',
    },
    {
      texto: 'Sobre',
      url: '/sobre',
    },
  ];

  return (
    <MenuWrapper>
      <MenuWrapper.LeftSide>
        <Logo />
      </MenuWrapper.LeftSide>

      <MenuWrapper.CentralSide>
        {links.map((link) => (
          <li key={link.url}>
            <Text tag="a" variant="smallestException" href={link.url}>{link.texto}</Text>
          </li>
        ))}
      </MenuWrapper.CentralSide>

      <MenuWrapper.RightSide>
        <Button ghost variant="primary.main">
          Entrar
        </Button>
        <Button variant="secondary.main">
          Cadastrar
        </Button>
      </MenuWrapper.RightSide>

    </MenuWrapper>

  );
}
