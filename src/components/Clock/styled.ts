import styled from "styled-components";
import { devices } from "../../styles/responsive";

export const Container = styled.div`
    justify-self: flex-end;
     @media ${devices.medium}{
        display: none;
    }
`
export const Number = styled.p`
    font-size: 22px;
    color: #fff;
`
export const Hours = styled.p`
`
export const Minutes = styled.p`
`
export const Seconds = styled.p`
`