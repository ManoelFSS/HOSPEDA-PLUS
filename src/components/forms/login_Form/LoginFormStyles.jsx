import styled from "styled-components";

export const Container_formLogin = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 300px;
    min-width: 280px;
    max-height: 400px;
    min-height: 320px;
    background-color: rgba(0, 0, 0, 0.7);
    border-radius: 10px;

    @media (min-width: 380px) {
        min-width: 380px;
    }


    .input-field {
        display: flex;
        flex-direction: column;
        width: 235px;
        position: relative;

        @media (min-width: 380px) {
            min-width: 330px;
        }


        .eye {
            position: absolute;
            bottom:10px;
            right: 12px;
            font-size: 1.2rem;
            cursor: pointer;
            color: #ddd;
            transition: all 0.3s;

            &:hover {
                color: #fff;
            }
        }

        label {
            font-size: 1.2rem;
            padding: 4px ;
            color: #fff;
        }

        input {
            width: 100%;
            height: 40px;
            border-radius: 5px;
            border: none;
            outline: none;
            padding: 0 10px;
            background-color: transparent;
            box-shadow: inset 0 0 100px rgba(0, 0, 0, 0.5);
            color: #fff;
            font-size: 0.9rem;
        }

        input::placeholder {
            color: #bbb;
        }

        input:active,
        input:focus,
        input:valid:not(:placeholder-shown) {
            background-color: rgba(0, 0, 0, 1);
        }

        input:-webkit-autofill {
            -webkit-box-shadow: 0 0 0px 1000px rgba(0, 0, 0, 1) inset;
            -webkit-text-fill-color: #fff;
            background-color: rgba(0, 0, 0, 1) !important; 
        }
    }

    p {
        font-size: 1rem;
        cursor: pointer;
        trasition: all 0.3s;
        text-align: right;
        color: #ddd;
        padding: 8px 0;

        &:hover {
            color: #fff;
        }
    }

    h3 {
        color: #ddd;
        text-align: center;
        font-size: 1rem;
        font-weight: bolder;
        margin-top: 10px;
        cursor: pointer;
        trasition: all 0.3s;
        border:solid 1px #ddd;
        padding: 10px 20px;

        &:hover {
            color: #fff;
            border:solid 1px #fff;
        }
    }


`