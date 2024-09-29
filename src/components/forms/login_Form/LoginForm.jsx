import React, { useState } from "react";
import validator from 'validator';
import { validateLoginSchema } from "../../../schemas/loginSchema.js";
// components
import { Container_formLogin } from "./LoginFormStyles";
import Modal from "../../modal/Modal";
import { useAuth } from "../../../contexts/AuthContext";
import Loader from "../../load/Load.jsx";
// icons
import { FaEyeSlash, FaEye } from "react-icons/fa";


const LoginForm = () => {

    const { loginUser, loading,  setLoading} = useAuth();

    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [modal, setModal] = useState(false);
    const [textError, setTextError] = useState("");

    const validateEmail = (email) => {

        const allowedDomains = ['gmail.com', 'hotmail.com', 'outlook.com', 'yahoo.com'];

        if (!validator.isEmail(email)) {
            return 'E-mail inválido!';
        }

        const domain = email.split('@')[1];
        if (!allowedDomains.includes(domain)) {
            return 'Domínio não permitido! Verifique seu e-mail e tente novamente. Dominios Permitidos\n ' + allowedDomains.join('' + '\n');
        }

        verifyTypes();
    };

    const verifyTypes = async () => {
        try {
            setLoading(true);
            const res =  validateLoginSchema( email, password ); // validação do schema zod
            const success = await loginUser(res.email, res.password);

            if(success){
                setLoading(false);
                setModal(true);
                setTextError('Login efetuado com sucesso!');
            }else{
                setModal(true);
                setTextError('Erro  de autenticação. Verifique seu e-mail e senha e tente novamente');
                return
            }

        } catch (error) {
            const errorMessage = error.errors[0]?.message || 'Erro de validaçao dos campos do email e senha de autenticação';
            setTextError(errorMessage);
            setTimeout(() => {
                setLoading(false);
                setModal(true);
            },2000)
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault(); 
        if(email !== "" && password !== ""){
            const validationResult = validateEmail(email);
            if ( typeof validationResult === "string") {
                setTextError(validationResult);
                setModal(true);
            }
        }     
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <>
            <Container_formLogin>
                <form onSubmit={handleSubmit}>
                    <div className="input-field">
                        <label htmlFor="email">E-mail</label>
                        <input 
                            type="email" 
                            id="email"  
                            value={email}
                            placeholder="Digite seu e-mail" 
                            onChange={(e) => setEmail(e.target.value.trim().toLowerCase())} 
                            required
                            autoComplete="email"
                        />
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Senha</label>
                        <input 
                            type={showPassword ? "password" : "text"} 
                            id="password" 
                            placeholder="Digite sua senha"
                            value={password}
                            autoComplete="current-password" 
                            onChange={(e) => setPassword(e.target.value.trim())}
                            required
                        />
                        {showPassword ? (
                            <FaEyeSlash className="eye" onClick={togglePasswordVisibility} />
                        ) : (
                            <FaEye className="eye" onClick={togglePasswordVisibility} />
                        )}
                    </div>
                    <p>Esqueceu sua senha?</p>
                    <input 
                        className="btn" 
                        type="submit"
                        value="Entrar"
                    />
                </form>
                <h3>Cadastre-se</h3>
                { loading && <Loader />}
            </Container_formLogin>
            
            <Modal 
                setModal={setModal}
                modal={modal}
                text={textError} 
            />
        </>
    );
};

export default LoginForm;
