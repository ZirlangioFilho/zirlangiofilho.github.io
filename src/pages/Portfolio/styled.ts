import styled from 'styled-components'
import { theme } from '../../styles/theme'

export const Container = styled.section`
  width: 100%;
  max-width: 100vw;
  box-sizing: border-box;
  padding: 0;
  overflow: hidden;
  position: relative;

  .swiper {
    width: 100%;
    height: auto;
    padding: 0 0 50px 0;
    padding-left: 10px;
    padding-right: 10px;
    position: relative; /* garante que pag e nav fiquem relativos ao swiper */
  }

  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    max-width: 100%;
    margin-top: 2rem;
    box-sizing: border-box;
  }

  /* Pagination */
  .swiper-pagination {
    position: absolute;
    bottom: 10px;
    left: 0;
    width: 100%;
    text-align: center;
    z-index: 10;
  }

  .swiper-pagination-bullet {
    background-color: ${theme.colors.green};
    opacity: 0.6;
  }

  .swiper-pagination-bullet-active {
    opacity: 1;
  }

  /* Navigation buttons */
  .swiper-button-prev,
  .swiper-button-next {
    color: ${theme.colors.green};  /* cor das setas */
    z-index: 20;
    margin: 0 12px;
  }
`

export const BigCircle = styled.img`
    position: absolute;
    top: 50%;
    right: -10%;
    transform: translateY(-50%);
    width: 557px;
    height: 428px;
    z-index: -1;
    pointer-events: none;
    opacity: 0.6;

  @media (max-width: 768px) {
    width: 300px;
        height: 300px;
        right: -15%;
        top: 56%;
  }
`

export const SmallCircle = styled.img`
  position: absolute;
  top: 30%;
  left: -5%;
  opacity: 0.6;
  width: 150px;
  height: 150px;
  z-index: 1;
  pointer-events: none;

  @media (max-width: 768px) {
    width: 100px;
    height: 100px;
    left: -10%;
    top: 50%;
  }
`