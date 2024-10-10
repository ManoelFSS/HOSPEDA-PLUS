import styled from "styled-components";
// images
import image_hotel from "../../assets/images/hotel.png";
import image_quarto01 from "../../assets/images/quarto01.jpg";
import image_quarto02 from "../../assets/images/quarto02.jpg";
import image_quarto03 from "../../assets/images/quarto03.jpg";
import image_hotelmob01 from "../../assets/images/hotelmobile01.jpg";
import image_hotelmob02 from "../../assets/images/hotelmobile02.jpg";
import image_praia01 from "../../assets/images/praia01.jpg";
import image_praia02 from "../../assets/images/praia02.jpg";
import image_city01 from "../../assets/images/cidade01.jpg";
import image_city02 from "../../assets/images/cidade02.jpg";
import image_picina01 from "../../assets/images/piscina01.jpg";
import image_picina02 from "../../assets/images/piscina02.jpg";

export const Container_login = styled.section`
    display: flex;
    min-height: 100svh;
    width: 100%;
    background-color: #fff;
    position: relative;

    .box-left {
        max-width: 300px;
        min-width: 280px;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        position: relative;
        text-align: center;

        div {
            padding-bottom: 2.5rem;
        }

        h1 {
            font-size: 1.4rem;
            font-weight: bolder;
        }

        p {
            font-size: 1.1rem;
        }

        .icons {
            display: flex;
            justify-content: center;
            gap: 2rem;
            font-size: 2.2rem;
            padding: 0.5rem;

            .whatsapp,
            .facebook,
            .instagram {
                cursor: pointer;
                transition: all 0.3s;

                &:hover {
                    transform: scale(1.1);
                }
            }

            .whatsapp {
                color: #25d366;
            }

            .facebook {
                color: #4267b2;
            }

            .instagram {
                color: #e1306c;
            }
        }

        .copyright {
            position: absolute;
            bottom: 0;
            font-size: 1rem;
            font-weight: 400;
            z-index: 2;
            padding: 0.3rem;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }

    .box-right {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 1.2rem;
        overflow: hidden;
        background:  #000 url(${image_city02}) no-repeat right center / cover;
        animation: slide 20s infinite ease-in-out reverse;

        @keyframes slide {
            0% {
                background:  #000 url(${image_hotel}) no-repeat right center / cover;
            }
            16.67% {
                background:  #000 url(${image_hotel}) no-repeat right center / cover;
            }
            33.33% {
                background:  #000 url(${image_quarto03}) no-repeat right center / cover;
            }
            50% {
                background: url(${image_quarto03}) no-repeat right center / cover;
            }
            66.67% {
                background:  #000 url(${image_praia02}) no-repeat right center / cover;
            }
            83.33% {
                background:  #000 url(${image_praia02}) no-repeat right center / cover;
            }
            90% {
                background:  #000 url(${image_city02}) no-repeat right center / cover;
            }
            100% {
                background:  #000 url(${image_city02}) no-repeat right center / cover;
            }
        }

        @media (max-width: 600px) {
            @keyframes slide {

                0% {
                    background:  #000 url(${image_hotel}) no-repeat right center / cover;
                }
                16.67% {
                    background:  #000 url(${image_hotel}) no-repeat right center / cover;
                }
                33.33% {
                    background:  #000 url(${image_quarto01}) no-repeat right center / cover;
                }
                50% {
                    background:  #000 url(${image_quarto01}) no-repeat right center / cover;
                }
                66.67% {
                    background:  #000 url(${image_praia01}) no-repeat right center / cover;
                }
                83.33% {
                    background:  #000 url(${image_praia01}) no-repeat right center / cover;
                }
                90% {
                    background:  #000 url(${image_city01}) no-repeat right center / cover;
                }
                90% {
                    background:  #000  url(${image_city01}) no-repeat right center / cover;
                }
            }
        }
    }

    @media (max-width: 815px) {
        flex-direction: column;

        .box-left {
            min-width: 100%;
            padding-top: 1rem;
        }
    }
`;
