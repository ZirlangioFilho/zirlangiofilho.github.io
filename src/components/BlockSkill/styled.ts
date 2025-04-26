import styled from "styled-components";
import { theme } from "../../styles/theme";
import { devices } from "../../styles/responsive";

export const Container = styled.div`
    padding: 22px 16px;
    background: ${theme.colors.white};
    display: flex;
    flex-direction: column;
    gap: 8px;
    border-radius: 8px;
    align-items: flex-start;
    width: 400px;

    @media ${devices.medium}{
        width: 250px;
        padding: .875rem;
        width: 191px;
    }
`
export const SubTitle = styled.p`
    font-size: 26px;
    color: ${theme.colors.black};
    font-weight: bold;
`


export const Description = styled.p`
     font-size: 16px;
     color: ${theme.colors.black};
     font-weight: 500;
`
export const Icon = styled.img`
    width: 50px;
    height: 50px;
`