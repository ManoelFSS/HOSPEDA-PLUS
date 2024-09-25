import styled from "styled-components"; 
// import image_hotel from "../../assets/images/hotel.png";


export const Container_login = styled.section`
    display: flex;
    height: 100svh;
    background-color: #fff;

    .box-left {
        max-width: 300px;
        min-width: 280px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border: 1px solid black;

        h1 {
            font-size: 1.4rem;
            font-weight: bolder;
        }

        p {
            font-size: 1.2rem;
            font-weight: 400;
        }

        .icons {
            display: flex;
            gap: 2rem;
            font-size: 2.2rem;
            padding: 0.5rem;

            .whatsapp, .facebook, .instagram {
                cursor: pointer;
                transition: all 0.3s;

                &:hover {
                    transform: scale(1.1);
                }
            }

            .whatsapp {
                color: #25D366;
            }

            .facebook {
                color: #4267B2;
            }

            .instagram {
                color: #E1306C;
            }
        }
    }

    .box-right {
        flex:1;
        display: flex;
        align-items: center;
        padding-left: 10%;
        background: url("data:image/jpeg;base64,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") no-repeat right center / cover;
        position: relative;

        @media (max-width: 700px) {
            justify-content: center;
            padding: 10px;
        }       
    }

    @media (max-width: 590px) {
        flex-direction: column;

        .box-left {
            min-width: 100%;
            padding: 10px;
        }
    }

`