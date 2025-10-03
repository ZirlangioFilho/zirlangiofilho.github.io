import styled from "styled-components";
import { theme } from "../../styles/theme";
import { devices } from "../../styles/responsive";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    gap: 1rem;
    background-color: ${theme.colors.green};
    border-radius: 12px;
    width: 168px;

    @media ${devices.medium}{
        width: 25%;
    }
    @media ${devices.mobile}{
        width: 40%;
    }
`

export const Icon = styled.img``

export const Name = styled.p`
    color: ${theme.colors.black};
    font-size: 20px;
    font-weight: bold;
    text-align: center;
`