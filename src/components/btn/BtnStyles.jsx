import styled from "styled-components";

export const Button = styled.button`
    width: 100%;
    height: 40px;
    border-radius: 5px;
    border: none;
    outline: none;
    background-color: rgba(0, 0, 0, 0.5);
    color: #fff;
    font-size: 1.1rem;
    font-weight: bolder;
    cursor: pointer;
    trasition: all 0.3s;

    &:hover {
        background-color: #000;
        color: #fff;
    }
`