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
    gap: 2rem;

    @media ${devices.medium}{
        /* flex-direction: column-reverse; */
        
    }

`
export const DivForm = styled.div`

`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;

  input, textarea {
    padding: 16px;
    width: 400px;
    border: 1px solid #ccc;
    border-radius: 8px;
    font-size: 1rem;
    resize: none;
  }

  button {
    padding: 8px;
    background-color: ${theme.colors.white};
    color: ${theme.colors.black};
    border: none;
    font-size: 20px;
    border-radius: 8px;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      background-color: ${theme.colors.black};
      color: ${theme.colors.white}
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
    width: 350px;

    @media ${devices.medium} {
        width: 90%;
    }
`

export const Text = styled.p`
    font-size: 22px;
    color: ${theme.colors.white};

    @media ${devices.medium}{
        font-size: 20px;
    }
`
