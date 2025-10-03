import styled from "styled-components";
import { devices } from "../../styles/responsive";
// import { theme } from "../../styles/theme";


export const Container = styled.section`
 /* padding: 0 2rem;
 margin-top: 32px;
 margin-bottom: 32px; */
 display: flex;
 flex-direction: column;
 gap: 1rem;

 /* @media ${devices.mobile}{
   padding: 0 1rem;
 } */
`

export const AreaBlock = styled.div`
    display: flex;
    gap: 32px;
    padding: 64px 0;
    flex-wrap: wrap;
    justify-content: center;
   
    @media ${devices.medium}{
    padding: 32px 0;
    gap: 1rem;

  
 }
`
export const AreaTechBottom= styled.div`

`
export const TechBottom = styled.img`
  width: 200px;
   @media ${devices.medium}{
      width: 120px;
   }
`