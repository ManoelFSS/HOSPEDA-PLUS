import styled from "styled-components";

export const Container_formLogin = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding:20px 30px ;
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 10px;
    gap: 5px;
    position: relative;
    z-index: 9;
    
    .input-field {
        display: flex;
        flex-direction: column;
        width: 350px;
        position: relative;

        @media (max-width: 422px) {
            width: 310px;
        }

        @media (max-width: 375px) {
            width: 270px;
        }

        @media (max-width: 340px) {
            width: 230px;
        }

        .eye {
            position: absolute;
            bottom:10px;
            right: 12px;
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
            padding: 10px 4px ;
            color: #000;
        }

        input {
            width: 100%;
            height: 40px;
            border-radius: 5px;
            border: none;
            outline: none;
            padding: 0 10px;
            background-color: transparent;
            box-shadow: inset 0 0 100px rgba(255, 255, 255, 0.8);
            color: #000;
            font-size: 1.1rem;
            cursor: pointer;
        }

        input::placeholder {
            color: #000;
            font-size: 1rem;
        }

        input:active,
        input:focus,
        input:valid:not(:placeholder-shown) {
            background-color: rgba(255, 255, 255, 1);
        }

        input:-webkit-autofill {
            -webkit-box-shadow: 0 0 0px 1000px rgba(255, 255, 255, 1) inset;
            -webkit-text-fill-color: #000;
            background-color: rgba(255, 255, 255, 1) !important; 
        }

        input:hover {
            background-color: rgba(255, 255, 255, 1);
        }

    }

    p {
        font-size: 1.1rem;
        font-weight: bolder;
        cursor: pointer;
        trasition: all 0.3s;
        text-align: right;
        color: #000;
        padding: 8px 0;
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

    .btn {
        width: 100%;
        height: 40px;
        border-radius: 5px;
        border: none;
        outline: none;
        background-color: rgba(243, 174, 0, 0.7);
        color: #000;
        font-size: 1.1rem;
        font-weight: bolder;
        cursor: pointer;
        trasition: all 0.3s;

        &:hover {
            background-color: rgba(243, 174, 0, 1);
        }
    }

`