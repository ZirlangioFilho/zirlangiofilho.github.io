import styled, { keyframes } from "styled-components";
import { theme } from "../../styles/theme";
import { devices } from "../../styles/responsive";

const AnimationLoading = keyframes`
    0% {
        transform: translateY(0);
    }
    25% {
        transform: translateY(-10px);
    }
    50% {
        transform: translateY(0);
    }
    75% {
        transform: translateY(10px);
    }
`

export const Container = styled.section`
    width: 100%;
    margin: 0 auto;
    /* padding: 0 2rem;
    padding-top: 4rem; */

    /* @media ${devices.medium}{
        padding: 0 1.5rem;
        padding-top: 4rem;
    }
    @media ${devices.mobile}{
        padding: 0 1rem;
        padding-top: 4rem;
    } */
`

export const Content = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    padding: 4rem 0;
    gap: 4rem;

    @media ${devices.medium}{
        gap: 2rem;
    }

    @media ${devices.medium}{
        grid-template-columns: 1fr;
        gap: 3rem;
    }

    @media ${devices.mobile}{
        padding: 1.5rem 0;
        gap: 2rem;
    }
`

export const AreaText = styled.div`
    max-width: 500px;
    width: 100%;

    @media ${devices.medium}{
        max-width: 100%;
    }
`

export const AboutText = styled.p`
    color: ${theme.colors.white};
    font-size: 1rem;
    line-height: 1.6;
    text-align: justify;

    @media ${devices.medium}{
        text-align: justify;
        font-size: 14px;
        padding: 0 1rem;
    }
`

export const AreaImg = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 500px;
    margin: 0 auto;
    position: relative;
    transition: .4s;

    @media ${devices.medium}{
        max-width: 400px;
    }

    @media ${devices.mobile}{
        max-width: 300px;
    }

    &::before,
    &::after {
        content: '';
        position: absolute;
        width: 10px;
        height: 10px;
        background: ${theme.colors.white};
        border-radius: 50%;
        animation: ${AnimationLoading} 1s infinite;
    }

    &::before {
        left: -20px;
        animation-delay: 0s;
    }

    &::after {
        right: -20px;
        animation-delay: 0.5s;
    }
`

export const Img = styled.img`
    width: 100%;
    height: auto;
    object-fit: contain;
`