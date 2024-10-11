import styled from "styled-components";

export const Button = styled.input`
    width: 100%;
    text-align: center;
    height: 35px;
    padding: 0 12px;
    border-radius: 5px;
    border: none;
    outline: none;
    background-color: ${({ $bg_color }) => $bg_color };
    color: #000;
    font-size: 1.1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s;
    margin-top: 15px;
    color: #fff;

    &:hover {
        background-color: ${({ $bg_hover }) => $bg_hover };
    }
`;
