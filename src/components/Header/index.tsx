import React, { useState, useEffect } from "react";
import * as S from './styled';
import Clock from "../Clock";
import Menu from '../../assets/menu.svg'
import MenuX from '../../assets/xmark.svg'
import Img from '../../assets/react.svg';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [time, setTime] = useState('');
  const [dayPeriod, setDayPeriod] = useState(''); // Estado para o período do dia

  const toggleMenu = () => setIsOpen(!isOpen)
  // Função para lidar com a hora recebida e determinar o período do dia
  const handleTimeUpdate = (newTime: string) => {
    setTime(newTime);
    const hour = parseInt(newTime.split(':')[0], 10); // Extrai a hora da string "hh:mm"

    // Verificando o período do dia
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
      // Inicializa o efeito de digitação assim que o Typewriter estiver carregado
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

      {/* Passando a função handleTimeUpdate para o Clock */}
      <Clock onTimeUpdate={handleTimeUpdate} />
    </S.Container>
  );
}
