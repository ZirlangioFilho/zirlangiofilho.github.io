import styled from "styled-components";
import { devices } from "./styles/responsive";

export const Container = styled.section`
  width: 100%;
  min-height: 100vh;
  padding: 2rem 4rem;
  display: flex;
  justify-content: center;

  @media ${devices.mobile}{
    padding: 1rem 1.5rem;
  }
`
export const Content = styled.section`
  max-width: 1280px;
  display: flex;
  flex-direction: column;
  gap: 4rem;
`