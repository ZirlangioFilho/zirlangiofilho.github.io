import { useState } from "react";
import * as S from './styled';
import Menu from '../../assets/menu.svg'
import MenuX from '../../assets/xmark.svg'

import Icon from '../../assets/logo-zeta.svg'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);


  return (
    <S.Container>
      <S.AreaImg>
          <S.IconLogo src={Icon}/>
      </S.AreaImg>
      <S.AreaLink>
          <S.Link href="#">Sobre</S.Link>
          <S.Link href="#">Habilidades</S.Link>
          <S.Link href="#">Ferramentas</S.Link>
          <S.Link href="#">Portfólio</S.Link>
          <S.Link href="#">Contatos</S.Link>
      </S.AreaLink>

      <S.Button onClick={toggleMenu}><S.Icon src={Menu} /></S.Button>

      <S.ResponsiveMenu isOpen={isOpen}>
        <S.AreaX>
          <S.ButtonX onClick={toggleMenu}><S.Icon src={MenuX} /></S.ButtonX>
        </S.AreaX>

        <S.AreaResponsiveLink>
          <S.Link href="#">Sobre</S.Link>
          <S.Link href="#">Habilidades</S.Link>
          <S.Link href="#">Ferramentas</S.Link>
          <S.Link href="#">Portfólio</S.Link>
          <S.Link href="#">Contatos</S.Link>
        </S.AreaResponsiveLink>
      </S.ResponsiveMenu>

   
    </S.Container>
  );
}
