import styled from "styled-components";
import { theme } from "../../styles/theme";
import { devices } from "../../styles/responsive";

interface ContainterProps {
    image: string,
}

export const Container = styled.div<ContainterProps>`
    width: 100%;             /* ocupa o espaço do slide */
    min-width: 260px;        /* impede de encolher demais */
    height: 300px;

    padding: 2rem;           /* reduzido para não estourar */
    background-image: 
      linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), 
      url(${props => props.image});
    background-size: cover;
    background-position: center;

    display: flex;
    flex-direction: column;
    align-items: center;    
    justify-content: flex-end;
    gap: 1.5rem;
    border-radius: 12px;
`;

export const Description = styled.p`
    font-size: 22px;
    color: ${theme.colors.white};

    @media ${devices.mobile}{
        font-size: 16px;
    }
`


export const Button = styled.button`
    background-color: ${theme.colors.white};
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    box-shadow: 10px 10px 0px ${theme.colors.black};
    border: none;
    padding: 1rem 4rem;
    cursor: pointer;
    color: ${theme.colors.black};
    &:hover{
        background-color: ${theme.colors.green};
        box-shadow: 10px 10px 0px ${theme.colors.white};
        color: ${theme.colors.white};
    }
`

export const TextButton = styled.p`
    font-weight: bold;
    font-size: 16px;
`