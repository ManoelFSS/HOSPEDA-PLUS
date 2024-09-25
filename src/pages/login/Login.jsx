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
                    <FaWhatsapp className="whatsapp" />
                    <FaFacebook className="facebook" />
                    <FaInstagram className="instagram" />
                </div>
            </section>
            <section className="box-right">
                <LoginForm />
            </section>
        </Container_login>
    )
}

export default Login;