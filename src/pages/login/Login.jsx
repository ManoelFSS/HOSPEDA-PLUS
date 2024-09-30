import { Container_login } from "./LoginStyles";
//imges
import image from "../../assets/images/icone.png";
//components
import Logo from "../../components/logo/Logo";
import LoginForm from "../../components/forms/login_Form/LoginForm";
// icons
import { FaWhatsapp, FaFacebook, FaInstagram  } from "react-icons/fa";


const Login = () => {
    return (
        <Container_login>
            <section className="box-left">
                <Logo image={image} />
                <h1>HOSPEDA PLUS</h1>
                <p>Mais do que um Sistema</p>
                <div className="icons">
                    <FaWhatsapp className="whatsapp" onClick={() => window.open('https://wa.me/5574935050160', '_blank')} />
                    <FaFacebook className="facebook" onClick={() => window.open('https://www.facebook.com/manoel.fernando.50', '_blank')} />
                    <FaInstagram className="instagram" onClick={() => window.open('https://www.instagram.com/manoelfernandoplk/', '_blank')} />
                </div>
            </section>
            <section className="box-right">
                <LoginForm />
            </section>
        </Container_login>
    )
}

export default Login;