import styled from "styled-components";
import { theme } from "../../styles/theme";
import { devices } from "../../styles/responsive";

export const Container = styled.div ` 
    padding: 2rem 4rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 14px;
    position: relative;
    z-index:999;

    @media ${devices.medium}{
        padding: 2rem 12px;
        justify-content: space-between;
    }
    
`
export const Link = styled.a`
    color: white;
    font-size: 18px;
    text-decoration: none;
    transition: .4s;

    &&:hover{
        text-shadow: 10px 1px 10px #fff;
    }

    @media ${devices.medium}{
       font-size: 22px;
    }
`    
export const AreaLink = styled.div`
    display: flex;
    gap: 16px;
    justify-self: center;
    align-self: center;

    @media ${devices.medium} {
        display: none;
    }
`

export const ResponsiveMenu = styled.nav<{isOpen: boolean}>`
  position: fixed;
  top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
  left: 0;
  width: 100%;
  height: 45%;
  background-color: ${theme.colors.dark};
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
    
`

export const Button = styled.button`
    cursor: pointer;
    background-color: transparent;
    border: none;
    display: none;

    @media ${devices.medium}{
        display: flex;
    }
`
export const ButtonX = styled.button`
    cursor: pointer;
    background-color: transparent;
    border: none;
    scale: 0.8;
`
export const Icon = styled.img`
    width: 50px;
    height: 50px;
`
export const Img = styled.img`
    width: 50px;
`
export const Message = styled.p`
    font-size: 18px;
    color: cyan;
    text-shadow: 2px 1px 1px gray;
    letter-spacing: 3px;
    white-space: nowrap;
    min-width: 150px;
    overflow: hidden;

    @media ${devices.medium} {
        font-size: 16px;
    }
`

