import styled from "styled-components";

export const Input = styled.input`

    width: 100%;
    height: 40px;
    border-radius: 5px;
    border: none;
    outline: none;
    padding: 0 10px;
    background-color: ${({ $bg_color_input }) => $bg_color_input };
    box-shadow: inset 0 0 100px rgba(255, 255, 255, 0.8);
    color: #000;
    font-size: 1.1rem;
    cursor: pointer;
    

    &::placeholder {
        color: #000;
        font-size: 1rem;
    }

    &:active,
    &:focus,
    &:valid:not(:placeholder-shown) {
        background-color: rgba(255, 255, 255, 1);
    }

    &:-webkit-autofill {
        -webkit-box-shadow: 0 0 0px 1000px rgba(255, 255, 255, 1) inset;
        -webkit-text-fill-color: #000;
        background-color: rgba(255, 255, 255, 1) !important; 
    }

    &:hover {
        background-color: ${({ $bg_hover_input }) => $bg_hover_input };
    }

`