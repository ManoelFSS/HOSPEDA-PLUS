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


const FormCadastro = ({toogleForm, setToogleForm}) => {

    const [name, setName] = useState('');
    const [celular, setCelular] = useState('');
    const [dataNasc, setDataNasc] = useState('');
    const [rg, setRg] = useState('');
    const [cpf, setCpf] = useState('');
    const [email, setEmail] = useState('');
    const [email2, setEmail2] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const [empresa, setEmpresa] = useState('');
    const [cnpj, setCnpj] = useState('');
    const [loading, setLoading] = useState(false); // Adicione esta linha
    const [error, setError] = useState(''); // Para gerenciar mensagens de erro
    const [successMessage, setSuccessMessage] = useState(''); // Para mensagens de sucesso
    const [visbilePassword, setVisbilePassword] = useState(false);
    const [modal, setModal] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault(); // Corrigido o evento para 'e.preventDefault()'

        const trimmedData = {
            name: name.trim(),
            phone: celular.trim(),
            dataNasc: dataNasc.trim(),
            rg: rg.trim(),
            cpf: cpf.trim(),
            email: email.trim().toLowerCase(),
            email2: email2.trim().toLowerCase(),
            password: password.trim(),
            password2: password2.trim(),
            empresa: empresa.trim(),
            cnpj: cnpj.trim(),
        };

        // Validação
        const result = cadastroSchema.safeParse(trimmedData);
        if (!result.success) {
            console.log(result.error.errors); // Exibe os erros de validação
            setError(result.error.errors[0].message);
            setModal(true);
            return;
        }

        try {
            setLoading(true); // Iniciar o carregamento
            
            if (trimmedData.email === trimmedData.email2 && trimmedData.password === trimmedData.password2) {
                console.log("Email e senha correspondem");
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
                    const errorData = await response.json();
                    setError(errorData.message || 'Usuário ja registrado');
                    setModal(true);
                    console.log(errorData);
                    return;
                }

                // Sucesso no registro
                console.log("Registro realizado com sucesso!");
                setSuccessMessage('Registro realizado com sucesso!');
                setError(''); // Limpa qualquer mensagem de erro anterior
            }else{
                setError('Email ou senha não correspondem');
                setModal(true);
                console.log("Email ou senha não correspondem");
                return
            }

        } catch (err) {
            console.log("Erro ao realizar o registro:", err);
            setError(err.message || 'Erro inesperado');
            setModal(true);
        } finally {
            setLoading(false); // Finalizar o carregamento
            // console.log(localStorage.getItem('token'));
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
    
    
    

    const handleCnpjChange = (e) => {
        const inputValue = e.target.value.replace(/\D/g, ''); // Remove caracteres não numéricos
        const formattedValue = formatCnpj(inputValue);
        setCnpj(formattedValue);
    };

    const formatCnpj = (value) => {
        if (value.length <= 14) {
            return value
                .replace(/^(\d{2})(\d)/, '$1.$2') // Adiciona o primeiro ponto
                .replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3') // Adiciona o segundo ponto
                .replace(/^(\d{2})\.(\d{3})\.(\d{3})(\d)/, '$1.$2.$3/$4') // Adiciona a barra
                .replace(/^(\d{2})\.(\d{3})\.(\d{3})\/(\d{4})(\d)/, '$1.$2.$3/$4-$5') // Adiciona o traço
                .replace(/(\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}).*/, '$1'); // Limita o tamanho
        }
        return value;
    };
    

    return (
        <>
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
                        <div>
                            <label htmlFor="birthday">Data de Nascimento</label>
                            <CampoInput 
                                type="date" 
                                id="birthday" 
                                placeholder="dd/mm/aaaa"
                                value={dataNasc}
                                onChange={(e) => setDataNasc(e.target.value)}
                                required
                                $bg_color_input="var(--color-input-bg)"
                                $bg_hover_input="var(--color-input-bg-hover)"
                            />
                        </div>
                    </div>

                    <div className="input-field"> 
                        <div>
                            <label htmlFor="rg">RG</label>
                            <CampoInput 
                                type="text" 
                                id="rg" 
                                autocomplete="rg"
                                placeholder="Digite seu RG"
                                value={rg}
                                onChange={(e) => setRg(e.target.value)}
                                required
                                $bg_color_input="var(--color-input-bg)"
                                $bg_hover_input="var(--color-input-bg-hover)"
                                maxlength="10"
                                minlength="7"
                            />
                                
                        </div>
                        <div >
                            <label htmlFor="cpf">CPF</label>
                            <CampoInput 
                                type="number" 
                                id="cpf" 
                                placeholder="Digite seu CPF"
                                value={cpf}
                                onChange={(e) => {
                                    // Remover qualquer caractere não numérico
                                    const cpfValue = e.target.value.replace(/\D/g, ""); // Substitui qualquer caractere que não seja número
                                    if (cpfValue.length <= 11) {
                                    setCpf(cpfValue); // Limita a 11 dígitos
                                    }
                                }}
                                required
                                $bg_color_input="var(--color-input-bg)"
                                $bg_hover_input="var(--color-input-bg-hover)"
                                maxlength="11"
                                minlength="11"
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
                        <div>
                            <label htmlFor="email2">Confirmar E-mail </label>
                            <CampoInput 
                                type="email" 
                                id="email2"
                                placeholder="Confirme seu e-mail"
                                value={email2}
                                onChange={(e) => setEmail2(e.target.value)} // Atualizando corretamente
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
                        <div>
                            <label htmlFor="password2">Confirmar Senha</label>
                            <CampoInput 
                                type={visbilePassword ? "text" : "password"} 
                                id="password2" 
                                placeholder="Confirme sua senha"
                                value={password2}
                                autoComplete="current-password" 
                                onChange={(e) => setPassword2(e.target.value)}
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

                    <div className="input-field">
                        <div>
                            <label htmlFor="empresaname">Nome da Empresa</label>
                            <CampoInput 
                                type="text" 
                                id="empresaname" 
                                placeholder="Digite o Nome"
                                value={empresa}
                                onChange={(e) => setEmpresa(e.target.value)}
                                required
                                $bg_color_input="var(--color-input-bg)"
                                $bg_hover_input="var(--color-input-bg-hover)"
                            />
                        </div>
                        <div>
                            <label htmlFor="cnpj">CNPJ</label>
                            <CampoInput 
                                type="text" 
                                id="cnpj" 
                                placeholder="00.000.000/0000-00"
                                value={cnpj}
                                onChange={handleCnpjChange}
                                $bg_color_input="var(--color-input-bg)"
                                $bg_hover_input="var(--color-input-bg-hover)"
                                minlength="18"
                                maxlength="18"
                            />
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
            </FormWrapper>
            <Modal 
                setModal={setModal}
                modal={modal}
                text={error} 
            />
        </>
    )
}

export default FormCadastro;