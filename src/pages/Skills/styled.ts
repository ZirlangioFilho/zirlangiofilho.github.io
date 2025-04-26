import styled from "styled-components";
import { devices } from "../../styles/responsive";

export const Container = styled.section`
 padding: 64px 68px;
 margin-top: 32px;

 @media ${devices.mobile}{
    padding: 32px 24px;
 }
`

export const AreaBlock = styled.div`
    display: flex;
    gap: 32px;
    padding: 64px 0;
    flex-wrap: wrap;
    justify-content: center;

    @media ${devices.medium}{
    padding: 32px 0;
 }
`
export const AreaTechBottom= styled.div`

`
export const TechBottom = styled.img``