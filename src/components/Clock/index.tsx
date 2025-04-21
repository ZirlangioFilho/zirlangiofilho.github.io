import { useEffect, useState } from "react";
import * as S from './styled';

type ClockProp = {
   onTimeUpdate: (time: string) => void; // Agora onTimeUpdate espera uma string
 };
 
 export default function Clock({ onTimeUpdate }: ClockProp) {
   const [time, setTime] = useState("");
 
   useEffect(() => {
     const updateTime = () => {
       const currentTime = new Date();
       const hours = currentTime.getHours();
       const minutes = currentTime.getMinutes();
 
       const timeString = `${hours}:${minutes < 10 ? '0' + minutes : minutes}`;
       setTime(timeString);
       onTimeUpdate(timeString); // Envia a hora para o componente pai
     };
 
     updateTime();
 
     const interval = setInterval(updateTime, 1000);
 
     return () => clearInterval(interval);
   }, [onTimeUpdate]);
 
   return (
     <S.Container>
       <S.Number>{time}</S.Number>
     </S.Container>
   );
 }
 