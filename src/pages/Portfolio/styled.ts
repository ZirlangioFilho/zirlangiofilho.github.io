import styled from 'styled-components'
import { theme } from '../../styles/theme'

export const Container = styled.section`
  width: 100%;
  max-width: 100vw;
  box-sizing: border-box;
  padding: 0;
  overflow: hidden;

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
  }
`
