import { useState, useEffect } from "react";
import * as S from './styled';
import Clock from "../Clock";
import Menu from '../../assets/menu.svg'
import MenuX from '../../assets/xmark.svg'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [dayPeriod, setDayPeriod] = useState(''); 

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleTimeUpdate = (newTime: string) => {
    const hour = parseInt(newTime.split(':')[0], 10); 

    if (hour >= 6 && hour < 12) {
      setDayPeriod('manhã');
    } else if (hour >= 12 && hour < 18) {
      setDayPeriod('tarde');
    } else {
      setDayPeriod('noite');
    }
  };

  useEffect(() => {
    if (window.Typewriter) {
      const typewriter = new window.Typewriter('.typewriter', {
        loop: true,
        delay: 75,
      });

      typewriter
        .typeString(`Boa ${dayPeriod}!`)
        .pauseFor(5000)
        .deleteAll()
        .pauseFor(1000)
        .start();
    }
  }, [dayPeriod]);

  return (
    <S.Container>
      <S.AreaImg>
        <S.Message className="typewriter"></S.Message>
      </S.AreaImg>
      <S.AreaLink>
        <S.Link href="#">Sobre</S.Link>
        <S.Link href="#Habilidades">Habilidades</S.Link>
        <S.Link href="#">Projetos</S.Link>
        <S.Link href="#Contato">Contatos</S.Link>
      </S.AreaLink>

      <S.Button onClick={toggleMenu}><S.Icon src={Menu} /></S.Button>

      <S.ResponsiveMenu isOpen={isOpen}>
        <S.AreaX>
          <S.ButtonX onClick={toggleMenu}><S.Icon src={MenuX} /></S.ButtonX>
        </S.AreaX>

        <S.AreaResponsiveLink>
          <S.Link href="#">Sobre</S.Link>
          <S.Link href="#">Habilidades</S.Link>
          <S.Link href="#">Projetos</S.Link>
          <S.Link href="#">Contatos</S.Link>
        </S.AreaResponsiveLink>
      </S.ResponsiveMenu>

   
      <Clock onTimeUpdate={handleTimeUpdate} />
    </S.Container>
  );
}
