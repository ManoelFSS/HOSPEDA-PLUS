import React, { useState } from "react";
import axios from 'axios';
import { z } from "zod";
// components
import { Container_formLogin } from "./LoginFormStyles";
import Modal from "../../modal/Modal";
// icons
import { FaEyeSlash, FaEye } from "react-icons/fa";

// Defina seu esquema de validação
const schema = z.object({
    email: z.string()
        .regex(/^[^\s@]+@(gmail\.com|hotmail\.com|yahoo\.com|outlook\.com|live\.com)$/, {
            message: "E-mail inválido por favor tente novamente, => exemplo@gmail.com",
        }),
    password: z.string()
        .min(8, "A senha deve ter pelo menos 8 caracteres")
        .regex(/[A-Z]/, "A senha deve conter pelo menos uma letra maiúscula")
        .regex(/[0-9]/, "A senha deve conter pelo menos um número")
        .regex(/[!@#$%^&*]/, "A senha deve conter pelo menos um caractere especial"),
});



const LoginForm = () => {

    const [showPassword, setShowPassword] = useState(true);
    const [typeInput, setTypeInput] = useState("password");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [modal, setModal] = useState(false);
    const [textError, setTextError] = useState("");

    const verifyEmail = async (email) => {

        if (email !== "") {
            try {
                const res =  schema.parse({ email, password });

                    alert("E-mail Valido"); // aqui posso fazer o envio dos dados para o back-end

                // }

            } catch (error) {
                if (error instanceof z.ZodError) {
                    // Acessa o array de erros e pega a mensagem do erro específico
                    error.errors.forEach(err => {
                        console.log(err.message); // Exibe a mensagem do erro
                        setTextError(err.message);
                        setModal(true);
                    });
                } else {
                    setTextError( error.message);
                    console.log('Erro ao verificar o e-mail:', error);
                }
            }

        }else{
            setTextError( "campo email obrigatório preenchar com o seu e-mail" );
            setModal(true);
        }
        
    };

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevenir o comportamento padrão do formulário
        verifyEmail(email); // Verifica o email no momento do submit
    }

    const hendlerModal = () => {
        setModal(!modal);
        setEmail("");
        setPassword("");
    }

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
                            onChange={(e) => setEmail(e.target.value)} 
                            
                        />
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Senha</label>
                        <input 
                            type={typeInput} 
                            id="password" 
                            placeholder="Digite sua senha"
                            value={password}
                            autoComplete="email" 
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        { showPassword ? 
                            <FaEyeSlash className="eye" 
                                onClick={() => { setShowPassword(!showPassword); setTypeInput("text")}} 
                            /> : 
                            <FaEye className="eye" 
                                onClick={() => { setShowPassword(!showPassword); setTypeInput("password")}} 
                            />
                        }
                    </div>
                    <p>Esqueceu sua senha?</p>
                    <input 
                        className="btn" 
                        type="submit"
                        value={"Entrar"}
                        autoComplete="current-password" 
                        onClick={(event) => handleSubmit(event)}
                    />
                </form>
                <h3>Cadastre-se</h3>
            </Container_formLogin>
            <Modal 
                setModal={setModal}
                modal={modal}
                text={textError} 
            />
        </>
    );
}

export default LoginForm;
