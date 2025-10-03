import styled from "styled-components";
import { devices } from "../../styles/responsive";
import { theme } from "../../styles/theme";

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
`

export const Title = styled.h2`
    font-size: 32px;
    color: #fff;
    font-family: lato;

    &::before{
        content: '';
        display: block;
        width: 80px;
        height: 5px;
        border-radius: 0px 0px 10px 0px;
        background: ${theme.colors.green};
    }
    &::after{
        content: '';
        display: block;
        width: 150px;
        height: 5px;
        border-radius: 0px 10px 0px 0px;
        background: ${theme.colors.green};
    }

    @media ${devices.mobile}{
        font-size: 28px;
    }
`
export const Img = styled.img`
    max-width: 120px;
`