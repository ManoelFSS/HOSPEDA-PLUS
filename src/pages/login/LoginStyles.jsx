import styled from "styled-components"; 
//images
import image_hotel from "../../assets/images/hotel.png";
import image_hotel01 from "../../assets/images/hotel01.jpg";
import image_hotel02 from "../../assets/images/hotel02.jpg";
import image_hotel03 from "../../assets/images/hotel03.webp";
import image_hotel04 from "../../assets/images/hotel04.jpg";
import image_hotel05 from "../../assets/images/hotel05.jpg";

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
        position: relative;

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
        justify-content: center;
        position: relative;  
        padding: 2rem 1rem 3rem;   
        background: url(${image_hotel}) no-repeat right center / 100% 100% ; 
        animation: fadeIn 30s ease infinite;

        @keyframes fadeIn {
            0%{
                background: url(${image_hotel}) no-repeat right center / 100% 100% ; 
            }
            40% {
                background: url(${image_hotel01}) no-repeat right center /100% 100% ; 
            }
            60% {
                background: url(${image_hotel02}) no-repeat right center / 100% 100% ; 
            }
            80% {
                background: url(${image_hotel03}) no-repeat right center / 100% 100% ; 
            }
            90% {
                background: url(${image_hotel04}) no-repeat right center / 100% 100% ;
            }
            100% {
                background: url(${image_hotel05}) no-repeat right center / 100% 100% ;
            }
        }

        .espelhor {
            position: absolute;
            top:0;
            left:0;
            width:100%;
            height: 100%;
            z-index: 1;
            background-color: rgba(0,0,0,0.6);
        }

        .copyright {
            position: absolute;
            bottom: 0;
            left:0;
            font-size: 0.8rem;
            color: #fff;
            font-weight: 100;
            z-index: 2;
            background-color: rgba(0,0,0,0.8);
            padding: 0.5rem;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }

    @media (max-width: 730px) {
        flex-direction: column;

        .box-left {
            min-width: 100%;
            padding-top: 1rem;
        }
    }

`