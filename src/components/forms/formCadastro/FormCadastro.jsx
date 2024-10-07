import React, { useState } from "react";
import FormWrapper from "../formWrapper/FormWrapper"
import CampoInput from "../../inputComponent/CampoInput";
import Btn from "../../btn/Btn";
import {cadastroSchema} from "../../../schemas/cadastroSchema";


const FormCadastro = ({toogleForm, setToogleForm}) => {

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
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

    const handleSubmit = async (e) => {
        e.preventDefault(); // Corrigido o evento para 'e.preventDefault()'
       
        const trimmedData = {
            name: name.trim(),
            phone: phone.trim(),
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
                    setError(errorData.message || 'Erro no registro');
                    return;
                }

                // Sucesso no registro
                console.log("Registro realizado com sucesso!");
                setSuccessMessage('Registro realizado com sucesso!');
                setError(''); // Limpa qualquer mensagem de erro anterior
            }else{
                setError('Email ou senha não correspondem');
                console.log("Email ou senha não correspondem");
                return
            }

        } catch (err) {
            console.log("Erro ao realizar o registro:", err);
            setError(err.message || 'Erro inesperado');
        } finally {
            setLoading(false); // Finalizar o carregamento
            // console.log(localStorage.getItem('token'));
        }
    };

    
    // const [modal, setModal] = useState(false);
    // const [textError, setTextError] = useState("");
    // const [loading, setLoading] = useState(false);
    // const [showPassword, setShowPassword] = useState(false);


    return (
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
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            required
                            $bg_color_input="var(--color-input-bg)"
                            $bg_hover_input="var(--color-input-bg-hover)"
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
                            placeholder="Digite seu RG"
                            value={rg}
                            onChange={(e) => setRg(e.target.value)}
                            required
                            $bg_color_input="var(--color-input-bg)"
                            $bg_hover_input="var(--color-input-bg-hover)"/>
                    </div>
                    <div >
                        <label htmlFor="cpf">CPF</label>
                        <CampoInput 
                            type="text" 
                            id="cpf" 
                            placeholder="Digite seu CPF"
                            value={cpf}
                            onChange={(e) => setCpf(e.target.value)}
                            required
                            $bg_color_input="var(--color-input-bg)"
                            $bg_hover_input="var(--color-input-bg-hover)"
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
                            type="password" 
                            id="password" 
                            placeholder="Digite sua senha"
                            value={password}
                            autoComplete="current-password" 
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            $bg_color_input="var(--color-input-bg)"
                            $bg_hover_input="var(--color-input-bg-hover)"
                        />
                    </div>
                    <div>
                        <label htmlFor="password2">Confirmar Senha</label>
                        <CampoInput 
                            type="password" 
                            id="password2" 
                            placeholder="Confirme sua senha"
                            value={password2}
                            autoComplete="current-password" 
                            onChange={(e) => setPassword2(e.target.value)}
                            required
                            $bg_color_input="var(--color-input-bg)"
                            $bg_hover_input="var(--color-input-bg-hover)"
                        />
                    </div>
                </div>

                <div className="input-field">
                    <div>
                        <label htmlFor="empresaname">Nome da Empresa</label>
                        <CampoInput 
                            type="text" 
                            id="empresaname" 
                            placeholder="Digite o nome da sua empresa"
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
                            placeholder="Digite seu CNPJ"
                            value={cnpj}
                            onChange={(e) => setCnpj(e.target.value)}
                            $bg_color_input="var(--color-input-bg)"
                            $bg_hover_input="var(--color-input-bg-hover)"
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
    )
}

export default FormCadastro;