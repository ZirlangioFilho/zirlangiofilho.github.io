import { useState } from "react";
import * as S from './styled';
import Menu from '../../assets/menu.svg'
import MenuX from '../../assets/xmark.svg'

import Icon from '../../assets/logo-zeta.svg'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false); // Fecha o menu após clicar em um link
    }
  };

  return (
    <S.Container>
      <S.AreaImg>
          <S.IconLogo src={Icon}/>
      </S.AreaImg>
      <S.AreaLink>
          <S.Link onClick={() => scrollToSection('About')}>Sobre</S.Link>
          <S.Link onClick={() => scrollToSection('Skills')}>Habilidades</S.Link>
          <S.Link onClick={() => scrollToSection('Tools')}>Ferramentas</S.Link>
          <S.Link onClick={() => scrollToSection('Portfolio')}>Portfólio</S.Link>
          <S.Link onClick={() => scrollToSection('Contato')}>Contatos</S.Link>
      </S.AreaLink>

      <S.Button onClick={toggleMenu}><S.Icon src={Menu} /></S.Button>

      <S.ResponsiveMenu isOpen={isOpen}>
        <S.AreaX>
          <S.ButtonX onClick={toggleMenu}><S.Icon src={MenuX} /></S.ButtonX>
        </S.AreaX>

        <S.AreaResponsiveLink>
          <S.Link onClick={() => scrollToSection('About')}>Sobre</S.Link>
          <S.Link onClick={() => scrollToSection('Skills')}>Habilidades</S.Link>
          <S.Link onClick={() => scrollToSection('Tools')}>Ferramentas</S.Link>
          <S.Link onClick={() => scrollToSection('Portfolio')}>Portfólio</S.Link>
          <S.Link onClick={() => scrollToSection('Contato')}>Contatos</S.Link>
        </S.AreaResponsiveLink>
      </S.ResponsiveMenu>

   
    </S.Container>
  );
}
