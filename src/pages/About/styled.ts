import styled from "styled-components";
import { theme } from "../../styles/theme";
import { devices } from "../../styles/responsive";

export const Container = styled.section`
    width: 100%;
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 2rem;
    padding-top: 4rem;

    @media ${devices.medium}{
        padding: 0 1.5rem;
        padding-top: 4rem;
    }
    @media ${devices.mobile}{
        padding: 0 1rem;
        padding-top: 4rem;
    }
`

export const Content = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    padding: 2rem 0;
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
        text-align: center;
    }
`

export const AreaImg = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 500px;
    margin: 0 auto;

    @media ${devices.medium}{
        max-width: 400px;
    }

    @media ${devices.mobile}{
        max-width: 300px;
    }
`

export const Img = styled.img`
    width: 100%;
    height: auto;
    object-fit: contain;
`