import styled from "styled-components";

export const Modal_container = styled.div`
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;


    .container {
        background-color: #fff;
        width: 290px;
        border-radius: 5px;
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 10px;
        position: relative;
        padding: 10px 0px 35px;

        .icon-container {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;
            padding: 0px 10px;

            .icon-error {
                color: #F3AF00;
                font-size: 2rem;
                top: 10px;
                left: 10px;
            }

            .icon-close {
                font-size: 1.4rem;
                cursor: pointer;
                transition: all 0.3s;
                color: #F3AF00;

                &:hover {
                    color: red ;
                }
            }
        }

        p {
            width: 100%;
            height: auto;
            font-size: 0.9rem;
            background-color: rgba(255, 0, 0, 0.5 );
            padding: 10px;
            color: #fff;
            
        }

    }
`