import styled, { keyframes } from "styled-components";
import { theme } from "../../styles/theme";
import { devices } from "../../styles/responsive";

const glitch = keyframes`
    0% {
        text-shadow: 0.05em 0 0 ${theme.colors.black}, -0.03em -0.04em 0 ${theme.colors.white}, -0.025em 0.04em 0 ${theme.colors.black};
    }
    15% {
        text-shadow: 0.05em 0 0 ${theme.colors.black}, -0.03em -0.04em 0 ${theme.colors.white}, -0.025em 0.04em 0 ${theme.colors.black};
    }
    16% {
        text-shadow: -0.05em -0.025em 0 ${theme.colors.black}, 0.025em 0.035em 0 ${theme.colors.white}, -0.05em -0.05em 0 ${theme.colors.black};
    }
    49% {
        text-shadow: -0.05em -0.025em 0 ${theme.colors.black}, 0.025em 0.035em 0 ${theme.colors.white}, -0.05em -0.05em 0 ${theme.colors.black};
    }
    50% {
        text-shadow: 0.05em 0.035em 0 ${theme.colors.black}, 0.03em 0 0 ${theme.colors.white}, 0 -0.04em 0 ${theme.colors.black};
    }
    99% {
        text-shadow: 0.05em 0.035em 0 ${theme.colors.black}, 0.03em 0 0 ${theme.colors.white}, 0 -0.04em 0 ${theme.colors.black};
    }
    100% {
        text-shadow: -0.05em 0 0 ${theme.colors.black}, -0.025em -0.04em 0 ${theme.colors.white}, -0.04em -0.025em 0 ${theme.colors.black};
    }
`;

const noiseAnim = keyframes`
    0% {
        clip-path: inset(100% 0 0 0);
    }
    100% {
        clip-path: inset(0 0 0 0);
    }
`;

const noiseAnim2 = keyframes`
    0% {
        clip-path: inset(0 0 0 0);
    }
    100% {
        clip-path: inset(100% 0 0 0);
    }
`;

const buttonAnimated = keyframes`
    0% {
        transform: rotate(-4deg);
    }
    50% {
        transform: rotate(4deg);}
    100% {
        transform: rotate(-4deg);
    }
`;



export const Container = styled.section`
    width: 100%;

    h1, span {
        font-weight: 400;
    }

    @media ${devices.mobile}{
        padding: 0rem 2rem;
    }
`

export const Content = styled.div`
   padding: 0;
   display: grid;
   grid-template-columns: 1.5fr 2fr;
   align-items: center;
   gap: 4rem;

   @media ${devices.medium}{
    display: flex;
    gap: 1rem;
   }
   @media ${devices.mobile}{
    flex-direction: column;
    gap: 1rem;
   }
   
`

export const ResponsiveArea = styled.div`
    display: flex;
    gap: 4rem;
    height: 100%;

    @media ${devices.medium}{
        flex-direction: column-reverse;
        gap: 2rem;
    }
`

export const DivIcon = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    justify-content: end;

    @media ${devices.medium}{
        flex-direction: row;
        justify-content: flex-start; 
        gap: 32px;       
    }

    @media ${devices.mobile}{
        justify-content: space-around;
        scale: 1;
        
    }
    
`
export const Link = styled.a`
    cursor: pointer;
    transition: .4s;

    &&:hover{
        filter: drop-shadow(10px 1px 10px #fff) ;
    }
`
export const Icon = styled.img`
    width: 40px;
    height: 40px;
`
export const AreaTitle = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`

export const AreaText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    gap: 2rem;

    @media ${devices.medium}{
        text-align: center;
        gap: 1rem;
    }
    @media ${devices.mobile}{
        text-align: center;
        gap: 1rem;
    }
`

export const Span = styled.span`
    color: ${theme.colors.white};
    font-size: 20px;
    font-weight: 400;

    @media ${devices.medium}{
        font-size: 16px;
        text-align: start;
    }
    
    @media ${devices.mobile}{
        text-align: center;
        font-size: 14px;
    }
    
`

export const Name = styled.h1`
    font-size: 64px;
    color: ${theme.colors.white};
    white-space: nowrap;
    animation: ${glitch} 12s infinite;
    position: relative;

    &::before,
    &::after {
        content: attr(data-text);
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

    &::before {
        left: 2px;
        text-shadow: ${theme.colors.white} -1px 0px;
        animation: ${noiseAnim2} 15s linear infinite alternate-reverse;
    }

    &::after {
        left: -2px;
        text-shadow: ${theme.colors.green} 3px 0px;
        animation: ${noiseAnim} 2s linear infinite alternate-reverse;
    }

    @media ${devices.medium}{
        text-align: start;
    }
    @media ${devices.mobile}{
        text-align: center;
        font-size: 32px;
    }
`

export const AreaImg = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
export const Img = styled.img`
    max-width: 100%;

    @media ${devices.mobile}{
        /* scale: 0.8; */
    }
`


export const Button = styled.a`
    background: ${theme.colors.green};
    margin-top: 2rem;
    width: max-content;
    padding: .6rem 2rem;
    border-radius: 12px;
    cursor: pointer;
    justify-self: flex-end;
    animation: ${buttonAnimated} 2s infinite;

    @media ${devices.medium}{
        display: none;
    }
    
    @media ${devices.mobile}{
        display: none;
    }
`

export const ButtonText = styled.p`
    color: ${theme.colors.black};
    font-weight: bold;
    
`

export const DivImgResponsive = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ButtonResponsive = styled.button`
     background: ${theme.colors.green};
    margin-top: 2rem;
    width: max-content;
    padding: .6rem 2rem;
    border-radius: 12px;
    cursor: pointer;
    justify-self: flex-end;
    display: none;
    animation: ${buttonAnimated} 2s infinite;

    @media ${devices.medium}{
        display: block;
        white-space: nowrap;
    }
    @media ${devices.mobile}{
        padding: .6rem 3rem;
    }
`

export const ButtonTextResponsive = styled.p`
    color: ${theme.colors.black};
    font-weight: bold;
    font-size: 16px;
`