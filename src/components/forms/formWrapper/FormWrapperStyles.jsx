import styled from "styled-components";

export const Container = styled.div`

    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 6px;
    padding: 20px 30px 40px;
    position: relative;
    max-width: 600px;
    z-index: 10;

    h2 {
        font-size: 1.5rem;
        font-weight: bolder;
        color: #000;
        text-align: center;
    }

    .input-field {
        display: flex;
        flex-direction: ${({ $direction }) => $direction === "true" ? "Row" : "Column"};
        position: relative;
        width: 100%;
        gap: 20px;

        .eye {
            position: absolute;
            bottom:7px;
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
            font-size: 1.1rem;
            font-weight: bolder;
            padding:  5px 0px;
            color: #000;
        }

        div {
            display: flex;
            width: 100%;
            flex-direction: ${({ $direction }) => $direction === "true" ? "column " : "row"};
            // margin: 0px 15px 0px 15px;
        }

        @media (max-width: 535px) {
            flex-direction: column;
            width: 100%;
            margin: 0;
        }

    }

    p {
        font-size: 1rem;
        font-weight: bolder;
        cursor: pointer;
        trasition: all 0.3s;
        text-align: right;
        color: #000;
        padding: 8px 0 0;
        trasition: all 0.3s;

        &:hover {
            text-decoration: underline;
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