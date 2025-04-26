import styled from "styled-components";
import { theme } from "../../styles/theme";
import { devices } from "../../styles/responsive";

export const Container = styled.section`
    padding: 0rem 6rem;
    width: 100%;

    h1, span {
        font-weight: 400;
    }

    @media ${devices.mobile}{
        padding: 0rem 2rem;
    }
`

export const Content = styled.div`
   padding: 0;
   display: grid;
   grid-template-columns: 1.5fr 2fr;
   align-items: center;
   gap: 4rem;

   @media ${devices.medium}{
    display: flex;
    gap: 1rem;
   }
   @media ${devices.mobile}{
    flex-direction: column;
    gap: 1rem;
   }
   
`

export const ResponsiveArea = styled.div`
    display: flex;
    gap: 4rem;
    height: 100%;

    @media ${devices.medium}{
        flex-direction: column-reverse;
        gap: 2rem;
    }
`

export const DivIcon = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    justify-content: end;

    @media ${devices.medium}{
        flex-direction: row;
        justify-content: flex-start; 
        gap: 32px;       
    }

    @media ${devices.mobile}{
        justify-content: space-around;
        scale: 1;
        
    }
    
`
export const Link = styled.a`
    cursor: pointer;
`
export const Icon = styled.img`
    width: 40px;
    height: 40px;
`
export const AreaTitle = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`

export const AreaText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    gap: 2rem;

    @media ${devices.medium}{
        text-align: center;
        gap: 1rem;
    }
    @media ${devices.mobile}{
        text-align: center;
        gap: 1rem;
    }
`

export const Span = styled.span`
    color: ${theme.colors.white};
    font-size: 20px;
    font-weight: 400;

    @media ${devices.medium}{
        font-size: 16px;
        text-align: start;
    }
    
    @media ${devices.mobile}{
        text-align: center;
        font-size: 14px;
    }
    
`
export const Name = styled.h1`
    font-size: 64px;
    color: ${theme.colors.white};
    white-space: nowrap;

    @media ${devices.medium}{
        text-align: start;
    }
    @media ${devices.mobile}{
        text-align: center;
        font-size: 32px;
    }
    `

export const AreaImg = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
export const Img = styled.img`
    max-width: 100%;

    @media ${devices.mobile}{
        /* scale: 0.8; */
    }
`


export const Button = styled.a`
    background: ${theme.colors.white};
    margin-top: 2rem;
    width: max-content;
    padding: .6rem 2rem;
    border-radius: 12px;
    cursor: pointer;
    justify-self: flex-end;

    @media ${devices.medium}{
        display: none;
    }
    
    @media ${devices.mobile}{
        display: none;
    }
`

export const ButtonText = styled.p`
    color: ${theme.colors.black};
    font-weight: bold;
    
`

export const DivImgResponsive = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ButtonResponsive = styled.button`
     background: ${theme.colors.white};
    margin-top: 2rem;
    width: max-content;
    padding: .6rem 2rem;
    border-radius: 12px;
    cursor: pointer;
    justify-self: flex-end;
    display: none;

    @media ${devices.medium}{
        display: block;
        white-space: nowrap;
    }
    @media ${devices.mobile}{
        padding: .6rem 3rem;
    }
`

export const ButtonTextResponsive = styled.p`
    color: ${theme.colors.black};
    font-weight: bold;
    font-size: 16px;
`