import styled from "styled-components";

export const Container = styled.div`

    background-color: rgba(255, 255, 255, 0.7);
    border-radius: 6px;
    padding: 10px 30px 30px;
    position: relative;
    max-width: 700px;
    z-index: 10;
    text-align: ${({ $directionText }) => $directionText === "true" ? "center" : "left"};
    
    img {
        width: 100px;
    }

    span {
        font-size: 1.2rem;
        font-weight: bolder;
        color: var( --color-primary-text) ;
        padding: 0px 5px;
    }

    h2 {
        font-size: 1.3rem;
        font-weight: bolder;
        color: #000;
        text-align: center;
    }

    .input-field {
        display: flex;
        flex-direction: ${({ $direction }) => $direction === "true" ? "Row" : "Column"};
        position: relative;
        min-width: 300px;
        gap:${({ $direction }) => $direction === "true" ? "10px" : "0px"};

        .eye {
            position: absolute;
            bottom:10px;
            right: 10px;
            font-size: 1.1rem;
            cursor: pointer;
            color: #000;
            transition: all 0.3s;

            &:hover {
                color: #F3AF00;
            }
        }

        label {
            font-size: 1rem;
            font-weight: bolder;
            padding:  5px 0px;
            color: #000;
        }

        div {
            display: flex;
            width: 100%;
            flex-direction: ${({ $direction }) => $direction === "true" ? "column " : "row"};
            position: relative;
        }

        @media (max-width: 535px) {
            flex-direction: column;
            min-width: 100%;
            margin: 0;
        }

    }

    p {
        font-size: 1rem;
        font-weight: bolder;
        cursor: ${({ $directionText }) => $directionText === "true" ? "none" : "pointer"};
        trasition: all 0.3s;
        text-align: right;
        color: #000;
        padding: 8px 0 0;
        trasition: all 0.3s;
        text-align: ${({ $directionText }) => $directionText === "true" ? "center" : "left"};

        &:hover {
            text-decoration: ${({ $directionText }) => $directionText === "true" ? "none" : "underline"};

        }
    }

    h3 {
        color: #000;
        text-align: center;
        font-size: 1.2rem;
        font-weight: bolder;
        margin-top: 10px;
        margin-bottom: 15px;
        cursor: pointer;
        trasition: all 0.3s;
        padding: 10px 20px;
        background-color: rgba(255, 255, 255, 0.7);
        border-radius: 5px;

        &:hover {
            background-color: rgba(255, 255, 255, 1);
        }
    }

    @media (max-width: 535px) {
        width: 100%;
    }

`