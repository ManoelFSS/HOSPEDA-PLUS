import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.3);
    box-shadow: 5px 8px 20px 0 rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(2px);
    border-radius: 6px;
    padding: 10px 30px 40px;
    position: relative;
    max-width: 700px;
    z-index: 10;

    form {
        width: 100%;
    }
    
    .check {
        font-size:4rem;
        color:green; 
        padding:5px;
    }

    span {
        font-size: 1.2rem;
        font-weight: 800;
        color:#000;
        padding: 0px 5px;
    }

    h2 {
        width: 100%;
        font-size: 1.5rem;
        font-weight: bolder;
        color: #000;
        text-align: center;
        border-bottom: solid 3px var(--color-primary-text);
        padding-bottom: 8px;
        margin-bottom: 15px;
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
            font-size: 1.2rem;
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
        font-weight: 600;
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