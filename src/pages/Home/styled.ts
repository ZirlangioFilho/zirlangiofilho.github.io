import styled, {keyframes} from "styled-components";
import { theme } from "../../styles/theme";
import Background from '../../assets/Group 28.jpg'
import { devices } from "../../styles/responsive";


const animationButton = keyframes`
    0% {
        border-image-source: linear-gradient(0deg, cyan, white);
    }
    25%{
        border-image-source: linear-gradient(90deg, cyan, white);
    }
    50%{
        border-image-source: linear-gradient(180deg, cyan, white);
    }
    75%{
        border-image-source: linear-gradient(-90deg, cyan, white);
    }
    100%{
        border-image-source: linear-gradient(0deg, cyan, white);
    }
`


export const Container = styled.section`
    height:95vh;
    /* background-image: url(${Background});
    background-size: cover; */
    background-image: linear-gradient(${theme.colors.dark}, ${theme.colors.black});
    width: 90%;
    border-radius: 0 0 60px 60px;
    justify-self: center;

    @media ${devices.medium}{
        background-size: cover;
        background-position: -550px;
        height: 90vh;
    }
    `
export const AreaIntro = styled.div`
    padding: 5rem 4rem; 
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
    
    @media ${devices.medium}{
        flex-direction: column;
        padding: 0rem 4rem;
        gap: 1rem;
    }
    `
export const AreaText = styled.div`
    padding-bottom: 2rem;
 
  
    @media ${devices.medium}{
    display: flex;
    flex-direction: column;
    align-items: center;
    }
    
`
export const AreaSpan = styled.div`
    width: 450px;
    @media ${devices.medium}{
        width: 300px;
    }
`

export const Presentation = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;

    @media ${devices.medium}{
        text-align: center;
        align-items: center;
    }

`

export const Title = styled.h1`
    font-size: 64px;
    padding: 16px 0;
    line-height: 58px;
    text-shadow: 5px 1px 1px gray;
    font-weight: 400;
    text-transform: uppercase;
    font-family: jomolhari;
    color: cyan;
    @media ${devices.medium} {
        font-size: 32px;
        padding: 8px;
        line-height: 30px;
        text-shadow: 3px 1px 1px gray;
    }
`
export const SubTitle = styled.p`
    font-size: 20px;
    color: #fff;
    @media ${devices.medium}{
        font-size: 14px;
    }
`

export const Span = styled.span`
    font-size: 16px;
    width: 80px;
    color: #fff;
    
    @media ${devices.medium} {
        font-size: 14px;
    }
    
`

export const AreaImg = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;


`

const ShadowAnimate = keyframes`
    0%{
        filter: grayscale(100%) drop-shadow( 8px 0px #3D737F)  drop-shadow(-8px -10px 0px gray);
    }
    50%{
        filter: grayscale(100%) drop-shadow( 8px 0px gray) drop-shadow(-8px -10px 0px #3D737F);
    }
    100%{
        filter: grayscale(100%) drop-shadow( 8px 0px #3D737F) drop-shadow(-8px -10px 0px gray);
    }


`


export const Img = styled.img`
  height: 350px;
  border-radius: 12px;
  animation: ${ShadowAnimate} 10s infinite;
  scale: 1.8;
  display: block;

  clip-path: polygon(0 0, 100% 0, 100% 90%, 0% 100%);


    @media ${devices.medium} {
        scale: 1.0;
        /* display: none; */
        
    }
    @media ${devices.minMobile} {
        display: none;
    }

`

export const AreaButton = styled.div`
    width: 300px;
`
export const Button = styled.a`
    text-decoration: none;
    font-weight: bold;
    font-size: 18px;
    padding: .5rem;
    background: none;
    color: #fff;
    border: 2px solid;
    border-image-slice:1;
    animation: ${animationButton} .8s infinite;

    @media ${devices.medium}{
        font-size: 16px;
    }
    
`
