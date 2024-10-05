import styled from "styled-components";

export const Button = styled.input`
    width: ${({ $width }) => $width || "auto"};
    text-align: center;
    height: 40px;
    padding: 0 20px;
    border-radius: 5px;
    border: none;
    outline: none;
    background-color: ${({ $bg_color }) => $bg_color };
    color: #000;
    font-size: 1.1rem;
    font-weight: bolder;
    cursor: pointer;
    transition: all 0.3s;
    margin-top: 15px;

    &:hover {
        background-color: ${({ $bg_hover }) => $bg_hover };
    }
`;
