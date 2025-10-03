import styled, {keyframes} from "styled-components";
import { theme } from "../../styles/theme";
import { devices } from "../../styles/responsive";

const AnimationBlock = keyframes`
   0%{
       filter: drop-shadow( 0 0 10px ${theme.colors.black});
   }
   25%{
      filter: drop-shadow( 0 0 10px ${theme.colors.white});
   }
   75%{
      filter: drop-shadow( 0 0 10px ${theme.colors.black});
   }
   
`

export const Container = styled.div<{ delay: number}>`
    padding: .5rem 1rem;
    background: ${theme.colors.green};
    display: flex;
    flex-direction: column;
    gap: 8px;
    border-radius: 8px;
    align-items: flex-start;
    width: 400px;

    animation: ${AnimationBlock} 1s;
   animation-delay: ${({ delay }) => delay}s;

    @media ${devices.medium}{
        gap: 6px;
        width: 40%;
        padding: 1rem;
    }
    @media ${devices.mobile}{
        gap: 6px;
        width: 45%;
        padding: 12px;
    }
`
export const SubTitle = styled.p`
    font-size: 26px;
    color: ${theme.colors.black};
    font-weight: bold;

    @media ${devices.medium} {
        font-size: 18px;
    }
`


export const Description = styled.p`
     font-size: 16px;
     color: ${theme.colors.black};
     font-weight: 500;
     @media ${devices.medium} {
        font-size: 14px;
    }
`
export const Icon = styled.img`
    width: 45px;

    @media ${devices.medium} {
        width: 40px;
    }
`