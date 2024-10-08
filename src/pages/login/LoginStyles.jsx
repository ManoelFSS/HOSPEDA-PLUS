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
        align-items: center;
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
        font-size: 1.2rem;
        font-weight: 400;
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
        font-size: 0.8rem;
        color: #fff;
        font-weight: 100;
        z-index: 2;
        background-color: rgba(0, 0, 0, 0.8);
        padding: 0.5rem;
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
        padding: 1rem;
        overflow: hidden;
        background: url(${image_hotelmob01}) no-repeat right center / cover;
        animation: slideMobile 30s infinite ease-in-out;

        @media (min-width: 501px) and (max-width: 760px) {
        background: url(${image_hotelmob02}) no-repeat right center / cover;
        animation: slideMedium 30s infinite ease-in-out;
        }

        @media (min-width: 761px) and (max-width: 1000px) {
        background: url(${image_quarto02}) no-repeat right center / cover;
        animation: slideLarge 30s infinite ease-in-out;
        }

        @media (min-width: 1001px) {
        background: url(${image_quarto03}) no-repeat right center / cover;
        animation: slideExtraLarge 30s infinite ease-in-out;
        }

        @keyframes slideMobile {
        0% {
            background: url(${image_hotelmob01}) no-repeat right center / cover;
        }
        20% {
            background: url(${image_praia01}) no-repeat right center / cover;
        }
        40% {
            background: url(${image_city01}) no-repeat right center / cover;
        }
        60% {
            background: url(${image_picina01}) no-repeat right center / cover;
        }
        80% {
            background: url(${image_quarto01}) no-repeat right center / cover;
        }
        100% {
            background: url(${image_hotelmob01}) no-repeat right center / cover;
        }
        }

        @keyframes slideMedium {
        0% {
            background: url(${image_hotelmob02}) no-repeat right center / cover;
        }
        20% {
            background: url(${image_praia02}) no-repeat right center / cover;
        }
        40% {
            background: url(${image_city02}) no-repeat right center / cover;
        }
        60% {
            background: url(${image_picina02}) no-repeat right center / cover;
        }
        80% {
            background: url(${image_quarto02}) no-repeat right center / cover;
        }
        100% {
            background: url(${image_hotelmob02}) no-repeat right center / cover;
        }
        }

        @keyframes slideLarge {
        0% {
            background: url(${image_quarto02}) no-repeat right center / cover;
        }
        20% {
            background: url(${image_praia02}) no-repeat right center / cover;
        }
        40% {
            background: url(${image_city02}) no-repeat right center / cover;
        }
        60% {
            background: url(${image_picina02}) no-repeat right center / cover;
        }
        80% {
            background: url(${image_quarto02}) no-repeat right center / cover;
        }
        100% {
            background: url(${image_quarto02}) no-repeat right center / cover;
        }
        }

        @keyframes slideExtraLarge {
        0% {
            background: url(${image_quarto03}) no-repeat right center / cover;
        }
        20% {
            background: url(${image_praia02}) no-repeat right center / cover;
        }
        40% {
            background: url(${image_city02}) no-repeat right center / cover;
        }
        60% {
            background: url(${image_picina02}) no-repeat right center / cover;
        }
        80% {
            background: url(${image_quarto03}) no-repeat right center / cover;
        }
        100% {
            background: url(${image_quarto03}) no-repeat right center / cover;
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
