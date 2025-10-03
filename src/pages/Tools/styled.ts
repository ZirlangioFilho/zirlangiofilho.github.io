import styled, { keyframes } from "styled-components";
import { devices } from "../../styles/responsive";

const Animation = keyframes`
    0%{
        transform: translateY(0);
    }
    25%{
        transform: translateY(1rem);
        box-shadow: 0px -10px 10px #27F7B2;
    }
    75%{
        transform: translateY(0);
    }
`
const AnimationMobile = keyframes`
    0%{
        box-shadow: none;
    }
    25%{
        box-shadow: 0px 0px 20px #27F7B2;
    }
    75%{
        box-shadow: none;
    }
`

export const Container = styled.section`
    padding: 0;

    @media ${devices.medium} {
        flex-wrap: wrap;
        display: flex;
        flex-direction: column;
        word-wrap: wrap;
    }
`

export const AreaBlock = styled.div`
    display: flex;
    justify-content: center;
    gap: 2rem;
    padding: 4rem 0;

    & > * {
        animation: ${Animation} 2s infinite;


        @media ${devices.mobile}{
        animation: ${AnimationMobile} 2s infinite;
   
    }

    }

    & > *:nth-child(even) {
        animation-delay: 1s;
    }

    @media ${devices.mobile}{
        padding: 2rem 0;
        gap:1rem;
        flex-wrap: wrap;
    }
 
`