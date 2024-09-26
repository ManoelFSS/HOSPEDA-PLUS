import styled from "styled-components";

export const Button = styled.input`
    width: 100%;
    height: 40px;
    border-radius: 5px;
    border: none;
    outline: none;
    background-color: rgba(0, 0, 0, 0.4);
    color: #bbb;
    font-size: 1.1rem;
    font-weight: bolder;
    cursor: pointer;
    trasition: all 0.3s;

    &:hover {
        background-color: #000;
        color: #fff;
    }
`