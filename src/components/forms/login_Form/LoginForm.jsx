import React, { useState } from "react";
import { Container_formLogin } from "./LoginFormStyles";
import Btn from "../../btn/Btn";
// icons
import { FaEyeSlash, FaEye } from "react-icons/fa";

const LoginForm = () => {

    const [showPassword, setShowPassword] = useState(true);
    const [typeInput, setTypeInput] = useState("password");

    return (
        <Container_formLogin>
            <form action="#">
                <div className="input-field">
                    <label htmlFor="email">E-mail</label>
                    <input type="email" id="email" placeholder="Digite seu e-mail" />
                </div>
                <div className="input-field">
                    <label htmlFor="password">Senha</label>
                    <input type={typeInput} id="password" placeholder="Digite sua senha" />
                    { showPassword ?
                        <FaEyeSlash className="eye" 
                            onClick={() => { setShowPassword(!showPassword); setTypeInput("text")}} 
                        /> : 
                        <FaEye className="eye" 
                            onClick={() =>{ setShowPassword(!showPassword); setTypeInput("password")}} 
                        />
                    }
                </div>
                <p>Esqueceu sua senha ?</p>
                <Btn text="Entrar" />
            </form>
            <h3>Cadastre-se</h3>
        </Container_formLogin>
    )
}

export default LoginForm;