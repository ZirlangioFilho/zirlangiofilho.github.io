import styled from "styled-components";
import { theme } from "../../styles/theme";
import { devices } from "../../styles/responsive";

export const Container = styled.section`
 padding: 64px 68px;
 padding-bottom: 0;
 margin-top: 32px;
`

export const Content = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: flex-start;
    padding: 2rem 0;
    gap: 4rem;

    @media ${devices.medium}{
        grid-template-columns: 1fr;
    }
`

export const AreaText = styled.div`
    
`
export const AboutText = styled.p`
    color: ${theme.colors.white};
    font-size: 16px;
`

export const AreaImg = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`


export const Img = styled.img`
    

    @media ${devices.medium}{
        scale: 0.8;
    }
`