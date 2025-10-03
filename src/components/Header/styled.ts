import styled from "styled-components";
import { theme } from "../../styles/theme";
import { devices } from "../../styles/responsive";

export const Container = styled.div ` 
    padding: 2rem 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 14px;
    position: relative;
    z-index:999;

    @media ${devices.mobile}{
        padding: 1rem 0;
    }
    
`
export const Link = styled.a`
    color: white;
    font-size: 18px;
    text-decoration: none;
    transition: .4s;
    cursor: pointer;

    &&:hover{
        text-shadow: 10px 1px 8px ${theme.colors.white};
    }

    @media ${devices.mobile}{
       font-size: 22px;
    }
`    
export const AreaLink = styled.div`
    display: flex;
    gap: 16px;
    justify-self: center;
    align-self: center;

    @media ${devices.mobile} {
        display: none;
    }
`

export const ResponsiveMenu = styled.nav<{isOpen: boolean}>`
  position: fixed;
  top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
  left: 0;
  width: 100%;
  height: 50%;
  background-color: ${theme.colors.black};
  border-radius: 0px 0px 20px 20px;
  display: flex;
  flex-direction: column;
  transition: top 0.4s ease-in-out;
  z-index: 1000;

`

export const AreaX = styled.div`
    display: flex;
    width: 100%;
    justify-content: flex-end;
    padding: 24px;
`

export const AreaResponsiveLink = styled.div`
    display: flex;
    flex-direction: column;
    gap: 18px;
    align-items: center;
`


export const AreaImg = styled.div`
  display: flex;
`

export const IconLogo = styled.img`
    color: ${theme.colors.white};
    width: 60px;
    height: 60px;
`

export const Button = styled.button`
    cursor: pointer;
    background-color: transparent;
    border: none;
    display: none;

    @media ${devices.mobile}{
        display: flex;
    }
`
export const ButtonX = styled.button`
    cursor: pointer;
    background-color: transparent;
    border: none;
    scale: 0.5;
`
export const Icon = styled.img`
    width: 50px;
    height: 50px;
`
export const Img = styled.img`
    width: 50px;
`

