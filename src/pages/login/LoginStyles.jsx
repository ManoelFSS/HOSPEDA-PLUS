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
        justify-content: center;
        background: url("https://primetour.b-cdn.net/wp-content/uploads/2016/05/w_dubai_al_habtoor_city_emirados_arabes_hotel_primetour_viagens_luxo_viagem_01-1200x609.jpg") no-repeat right center / 100% 100% ; 
        position: relative;  
        padding: 1rem;   
    }

    @media (max-width: 730px) {
        flex-direction: column;

        .box-left {
            min-width: 100%;
            padding-top: 1rem;
        }
    }

`