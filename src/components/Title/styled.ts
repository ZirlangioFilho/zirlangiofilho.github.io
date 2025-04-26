import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const Title = styled.h2`
    font-size: 32px;
    color: #fff;
    font-family: lato;

    &::before{
        content: '';
        display: block;
        width: 80px;
        height: 5px;
        border-radius: 0px 0px 10px 0px;
        background: #fff;
    }
    &::after{
        content: '';
        display: block;
        width: 150px;
        height: 5px;
        border-radius: 0px 10px 0px 0px;
        background: #fff;
    }
`
export const Img = styled.img`

`