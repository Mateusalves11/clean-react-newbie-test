import styled from "styled-components";

export const HeaderBase = styled.header`
    padding: 20px 0;
    display: flex;
    width: 100%;
    justify-content: center;
`
export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 1000px;
    width: 100%;
`

export const Title = styled.h1`
    font-size: 24px;
`

export const Image = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 40px;
`

export const Line = styled.div`
    width: 1px;
    height: 20px;
    background-color: #000000;
    margin: 0 10px;

`

export const BoxLinks = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`

export const Link = styled.p`
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    font-size: ${props => props.fontSize ? props.fontSize : '17px'};
    color: ${props => props.color};
    cursor: pointer;
`