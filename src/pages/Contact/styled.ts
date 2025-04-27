import styled from "styled-components";
import { theme } from "../../styles/theme";
import { devices } from "../../styles/responsive";

export const Container = styled.section`
  /* padding: 64px 68px;
  padding-top: 0; */
  width: 100%;
  
  /* @media ${devices.mobile}{
    padding: 2rem 1rem;
    padding-top: 0;
 } */
`

export const AreaContact = styled.div`
    margin-top: 64px;
  

`

export const DivColumn = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
gap: 2rem;

@media ${devices.mobile}{
    flex-direction: column-reverse;
    
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

    @media ${devices.mobile}{
      width: 300px;
      padding: 14px;
      font-size: 14px;
    }
  }

  button {
    padding: 12px;
    background-color: ${theme.colors.white};
    color: ${theme.colors.black};
    border: none;
    font-size: 20px;
    border-radius: 8px;
    cursor: pointer;
    transition: 0.3s;
    width: 400px;

  
    @media ${devices.mobile}{
      width: 300px;
      font-size: 16px;
    }

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
    @media ${devices.mobile}{
        scale: 0.5;
    }
`
export const AreaText = styled.div`
    width: 350px;

    @media ${devices.mobile} {
        width: 90%;
    }
`

export const Text = styled.p`
    font-size: 22px;
    color: ${theme.colors.white};

    @media ${devices.mobile}{
        font-size: 16px;
        text-align: center;
    }
`
export const Footer = styled.div`
width: 100%;
 text-align: center;
 padding-top: 2rem;
`

export const TextFooter = styled.p`
  color: ${theme.colors.white};
  font-size: 16px;

  @media ${devices.mobile}{
    font-size: 14px;
  }
`
