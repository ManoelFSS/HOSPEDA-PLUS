import React, { useState } from "react";
import FormWrapper from "../formWrapper/FormWrapper"
import CampoInput from "../../inputComponent/CampoInput";
import Btn from "../../btn/Btn";


const FormCadastro = ({toogleForm, setToogleForm}) => {

    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const [email, setEmail] = useState("");
    const [email2, setEmail2] = useState("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [empresa, setEmpresa] = useState("");
    const [cpf, setCpf] = useState("");
    const [rg, setRg] = useState("");
    const [cnpj, setCnpj] = useState("");
    const [dataNasc, setDataNasc] = useState("");

    // const [modal, setModal] = useState(false);
    // const [textError, setTextError] = useState("");
    // const [loading, setLoading] = useState(false);
    // const [showPassword, setShowPassword] = useState(false);


    return (
        <FormWrapper direction="true">
            <form action="">
                <h2>Crie sua conta</h2>

                <div className="input-field">
                    <div>
                        <label htmlFor="fullname">Nome Completo</label>
                        <CampoInput 
                            type="text" 
                            id="fullname" 
                            placeholder="Nome Completo"
                            value={name}
                            onChange={(e) => setName(e.target.value.trim())}
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
                            onChange={(e) => setPhone(e.target.value.trim())}
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
                            placeholder="Data de Nascimento"
                            value={dataNasc}
                            onChange={(e) => setDataNasc(e.target.value.trim())}
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
                            onChange={(e) => setRg(e.target.value.trim())}
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
                            onChange={(e) => setCpf(e.target.value.trim())}
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
                            onChange={(e) => setEmail(e.target.value.trim().toLowerCase())} 
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
                            onChange={(e) => setEmail2(e.target.value.trim().toLowerCase())} 
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
                            onChange={(e) => setPassword(e.target.value.trim())}
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
                            onChange={(e) => setPassword2(e.target.value.trim())}
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
                            onChange={(e) => setEmpresa(e.target.value.trim())}
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
                            onChange={(e) => setCnpj(e.target.value.trim())}
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