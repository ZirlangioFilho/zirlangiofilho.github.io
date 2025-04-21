import styled from "styled-components";
import { theme } from "../../styles/theme";
import { devices } from "../../styles/responsive";

export const Container = styled.section`
  padding: 64px 68px;
  padding-top: 0;
  width: 100%;
  @media ${devices.mobile}{
    padding: 32px 24px;
    padding-top: 0;
 }
`

export const AreaContact = styled.div`
    margin-top: 64px;
    display: flex;
    justify-content: space-around;
    align-items: center;

    @media ${devices.medium}{
        flex-direction: column-reverse;
        justify-content: center;
    }

`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;

  input, textarea {
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 8px;
    font-family: jomolhari;
    font-size: 1rem;
    resize: none;
  }

  button {
    padding: 4px;
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
    font-family: jomolhari;
    border: none;
    font-size: 20px;
    border-radius: 8px;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      background-color: ${theme.colors.black};
    }
  }
`;

export const AreaIcon = styled.div`
    width: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Icon = styled.img`
    @media ${devices.medium}{
        scale: 0.5;
    }
`
export const AreaText = styled.div`
    width: 300px;

    @media ${devices.medium} {
        width: 90%;
    }
`

export const Text = styled.p`
    font-size: 32px;
    font-family: jomolhari;
    color: #679093;
    @media ${devices.medium}{
        font-size: 20px;
    }
`
