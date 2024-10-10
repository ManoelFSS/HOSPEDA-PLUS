import styled from "styled-components";

export const Modal_container = styled.div`
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--color-trasparent-Black-bg);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;

    .container {
        background-color: var(--color-modal-error-bg);
        width: 290px;
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        padding: 10px 0px 10px;

        .icon-container {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;
            padding:0px 10px 5px;

            .icon-error {
                color: #F3AF00;
                font-size: 2rem;
                top: 10px;
                left: 10px;
            }

            .icon-close {
                font-size: 1.6rem;
                cursor: pointer;
                transition: all 0.3s;
                color: #F3AF00;

                &:hover {
                    color: red;
                }
            }
        }

        p {
            font-size: 0.9rem;
            font-weight: 500;
            background-color: var(--color-modal-error-message);
            padding: 15px 10px;
            color: #fff;
            text-align: center;
            width: 100%;

            span {
                font-weight: bolder;
            }
        }

        .btn-container {
            width: 100%;
            flex-direction: row;
            justify-content: space-around;
            padding: 0px 10px 5px;
        } 
    }

`