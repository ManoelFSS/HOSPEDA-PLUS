import React, { useState } from "react";
import FormWrapper from "../formWrapper/FormWrapper"
import CampoInput from "../../inputComponent/CampoInput";
import Btn from "../../btn/Btn";
import {cadastroSchema} from "../../../schemas/cadastroSchema";
import Modal from "../../modal/Modal";
import { useAuth } from "../../../contexts/AuthContext";
import Loader from "../../load/Load";
//icones
import { FaEyeSlash, FaEye } from "react-icons/fa";
//imeges
import ImgAprov from "../../../assets/images/tudocerto.png";

const FormCadastro = ({toogleForm, setToogleForm}) => {

    const { loginUser } = useAuth();// provedor de contexto

    const [name, setName] = useState('');
    const [celular, setCelular] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const [loading, setLoading] = useState(false); // Adicione esta linha
    const [error, setError] = useState(''); // Para gerenciar mensagens de erro
    const [cadSucess, setCadSucess] = useState(true); //abrir card de cadastro bem sucedido
    const [visbilePassword, setVisbilePassword] = useState(false);
    const [modal, setModal] = useState(false);
    const [btns, setBtns] = useState(false);

    const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault(); // Corrigido o evento para 'e.preventDefault()'

        const trimmedData = {
            name: name.trim(),
            phone: celular.trim(),
            email: email.trim().toLowerCase(),
            password: password.trim(),
        };

        setName(trimmedData.name);
        setEmail(trimmedData.email);
        setPassword(trimmedData.password);

        // Validação
        const result = cadastroSchema.safeParse(trimmedData);
        if (!result.success) {
            console.log(result.error.errors); // Exibe os erros de validação
            setError(result.error.errors[0].message);

            setTimeout(() => {
                setModal(true);
                setLoading(false);
            },1000)

            return;
        }

        try {

            setLoading(true); // Iniciar o carregamento
            // Enviar a requisição para a API
            const response = await fetch('https://hospeda-back-end-production.up.railway.app/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(trimmedData), // Corrigido para usar trimmedData
            });

            // Verificar se a resposta foi bem-sucedida
            if (!response.ok) {
                setBtns(true);
                const errorData = await response.json();
                setError('Ops!, Usuário ja registrado no Hospeda Plus, acesse sua conta, ou recupere sua senha' || errorData.message );
                setModal(true);
                setLoading(false);
                console.log(errorData);
                return;
            }
            // Sucesso no registro
            console.log("Registro realizado com sucesso!");
            setCadSucess(false);
            setLoading(false);
            setError(''); // Limpa qualquer mensagem de erro anterior

        } catch (err) {
            console.log("Erro ao realizar o registro:", err);
            setError(err.message || 'Erro inesperado');
            setModal(true);
        }
    };

    const handleCelularChange = (e) => {
        let celularValue = e.target.value.replace(/\D/g, ""); // Remove tudo que não for número
        // Limita a quantidade de números a 11 (padrão do celular no Brasil)
        if (celularValue.length > 11) {
            celularValue = celularValue.slice(0, 11);
        }
        // Adiciona a formatação (XX)XXXXX-XXXX sem o espaço após o DDD
        if (celularValue.length > 6) {
            celularValue = celularValue.replace(/^(\d{2})(\d{5})(\d{4})$/, "($1)$2-$3"); // Formato completo (XX)XXXXX-XXXX
        } else if (celularValue.length > 2) {
            celularValue = celularValue.replace(/^(\d{2})(\d{0,5})$/, "($1)$2"); // Adiciona DDD e primeiros números, sem espaço
        } else if (celularValue.length > 0) {
            celularValue = celularValue.replace(/^(\d{0,2})$/, "($1"); // Apenas o DDD, sem adicionar espaço
        }
        setCelular(celularValue);
    };
    

    const handleLogin = async () => {
        setLoading(true);
        const success = await loginUser(email, password);  // Aqui, 'success' é um booleano
        console.log(success);  // 'success' está retornando true ou false
    
        if (success) {  // Verifique diretamente se 'success' é verdadeiro
            console.log("Login bem-sucedido");
            setLoading(false);
        } else {
            console.log("Email ou senha não correspondem");
            setToogleForm(!toogleForm);
        }
    };


    return (
        <>
            { cadSucess ?
                <FormWrapper direction="true">
                    <form onSubmit={handleSubmit}>
                        <h2>Crie sua conta</h2>

                        <div className="input-field">
                            <div>
                                <label htmlFor="fullname">Nome Completo</label>
                                <CampoInput 
                                    type="text" 
                                    id="fullname" 
                                    placeholder="Nome Completo"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                    $bg_color_input="var(--color-input-bg)"
                                    $bg_hover_input="var(--color-input-bg-hover)"
                                />
                            </div>
                        </div>

                        <div className="input-field">
                            <div>
                                <label htmlFor="phone">Celular</label>
                                <CampoInput 
                                    type="text" 
                                    id="phone" 
                                    placeholder="Ex: (99) 99999-9999"
                                    autocomplete="tel"
                                    value={celular}
                                    onChange={handleCelularChange}
                                    required
                                    $bg_color_input="var(--color-input-bg)"
                                    $bg_hover_input="var(--color-input-bg-hover)"
                                    maxlength="14"
                                    minlength="14"
                                />
                            </div>
                        </div>

                        <div className="input-field">
                            <div>
                                <label htmlFor="email">E-mail</label>
                                <CampoInput 
                                    type="email" 
                                    id="email" 
                                    placeholder="digite seu e-mail"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)} 
                                    required
                                    autoComplete="email"
                                    $bg_color_input="var(--color-input-bg)"
                                    $bg_hover_input="var(--color-input-bg-hover)"
                                />
                            </div>
                        </div>

                        <div className="input-field">
                            <div>
                                <label htmlFor="password">Senha</label>
                                <CampoInput 
                                    type={visbilePassword ? "text" : "password"} 
                                    id="password" 
                                    placeholder="Digite sua senha"
                                    value={password}
                                    autoComplete="current-password" 
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    $bg_color_input="var(--color-input-bg)"
                                    $bg_hover_input="var(--color-input-bg-hover)"
                                />
                                {visbilePassword ? (
                                    <FaEye className="eye" onClick={() => setVisbilePassword(!visbilePassword)} />
                                ) : (
                                    <FaEyeSlash className="eye" onClick={() => setVisbilePassword(!visbilePassword)} />
                                )}
                            </div>
                        </div>
                        
                        <Btn 
                            type="submit" 
                            value="Cadastrar" 
                            $width="100%" 
                            $bg_color="var(--color-primary-btn-bg)"
                            $bg_hover="var(--color-primary-btn-bg-hover)"
                        />
                        
                    </form>
                    <Btn 
                        type="button"
                        value="Ja tenho conta" 
                        $width="100%"
                        $bg_color="var(--color-secondary-btn-bg)"
                        $bg_hover="var(--color-secondary-btn-bg-hover)"
                        onClick={() => setToogleForm(!toogleForm)}
                    />
                    {loading && <Loader/>}
                </FormWrapper> :
                <FormWrapper directionText="true" >
                    <img src={ImgAprov} alt="visto de tudo certo!" />
                    <h2>Tudo certo!</h2>
                    <p>{name.split(" ")[0]} Seu cadastro foi realizado com sucesso!</p>
                    <p>Você agora tem acesso ao sistema de gerenciamento do <span>Hospeda Plus.</span></p>
                    <Btn
                        type="button"
                        value="Acessar o Painel" 
                        $width="100%"
                        $bg_color="var(--color-primary-btn-bg)"
                        $bg_hover="var(--color-primary-btn-bg-hover)"
                        onClick={() => handleLogin()}
                    />
                    {loading && <Loader/>}
                </FormWrapper>
            }
            <Modal 
                setModal={setModal}
                modal={modal}
                text={error}
                setToogleForm={setToogleForm}
                toogleForm={toogleForm}
                btns={btns}
            />
        </>
    )
}

export default FormCadastro;