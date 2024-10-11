import React, { useState } from "react"
import  FormWrapper from "../formWrapper/FormWrapper"
import CampoInput from "../../inputComponent/CampoInput"
import Btn from "../../btn/Btn"
import Loader from "../../load/Load"
// icons
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { set } from "mongoose"


const FormReset = () => {

    const [labelEmail, setLabelEmail] = useState("E-mail")
    const [labelCode, setLabelCode] = useState("Código")

    const [placeholderEmail, setPlaceholderEmail] = useState("Digite seu e-mail")
    const [placeholderCode, setPlaceholderCode] = useState("Digite o Código")

    const [email, setEmail] = useState("")
    const [code, setCode] = useState("")
    const [codigoVerificador, setCodigoVerificador] = useState("")

    const [typeInputEmail, setTypeInputEmail] = useState("email")
    const [typeInputCode, setTypeInputCode] = useState("number")

    const [valueBtnEmail, setValueBtnEmail] = useState("Enviar Código")
    const [valueBtnCode, setValueBtnCode] = useState("Verificar Código")

    const [visibilySectionCode, setVisibilySectionCode] = useState(false)
    const [visibilyBtnEmail, setVisibilyBtnEmail] = useState(true)

    const [loading, setLoading] = useState(false)
    const [showPassword, setShowPassword] = useState(false);

    // Simula a chamada da API
    const resultApi = new Promise((resolve) => {
        setTimeout(() => {
            resolve(true);
        }, 3000);
    });

    const handleSubmit = async () => {
        setLoading(true);
        event.preventDefault();

        const codigoGerado = Math.floor(100000 + Math.random() * 900000);
        setCodigoVerificador(codigoGerado);
        console.log(codigoGerado);

        if (email !== "") {
            const res = await resultApi; // Aqui não precisa de ()

            if (res) {
                setValueBtnEmail("Reenviar Código");
                setVisibilySectionCode(true);
                setCode(codigoGerado);
            }

            setLoading(false);
        }

    };

    const hendleCodeVerify = () => {
        setLoading(true)
        event.preventDefault()
        
        setTimeout(() => {

            if(codigoVerificador === code) {

                setLabelEmail("Nova Senha")
                setLabelCode("Confirme a Senha")

                setTypeInputEmail("password")
                setTypeInputCode("password")

                setPlaceholderEmail("Digite a Nova Senha")
                setPlaceholderCode("Confirme a Senha")

                setVisibilyBtnEmail(false)

                setValueBtnCode("Alterar Senha")

                setEmail("")
                setCode("")

            }else{
                console.log("Código incorreto, tente novamente")
            }

            setLoading(false)
            
        },3000)
    }

    const hendlePasswordUpdate = () =>{
        setLoading(true)
        event.preventDefault()

        setTimeout(() => {
            if(email !== "" && code !== ""){
                if(email === code){
                    alert("Senha alterada com sucesso")
                }else {
                    alert("Ops!, as senhas digitadas devem ser iguais.")
                    return
                }
            }else{
                alert("Todos os campos devem ser preenchidos")
            }

            setLoading(false)
        },3000)
    }


    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
        setTypeInputEmail(typeInputEmail === "password" ? "text" : "password");
        setTypeInputCode(typeInputCode === "password" ? "text" : "password");
    };


    return (
        <FormWrapper maxWidth="400px">
            <form>
                <h2>Redefinir Senha</h2>
                <div className="input-field">
                    <label htmlFor="email">{labelEmail}</label>
                    <CampoInput
                        type={typeInputEmail}
                        name="email"
                        id="email"
                        placeholder={placeholderEmail}
                        autoComplete="email"
                        value={email}
                        onChange={(e) => setEmail( e.target.value )}
                        required
                        $bg_color_input="var(--color-input-bg)"
                        $bg_hover_input="var(--color-input-bg-hover)"
                    />
                    {(typeInputEmail === "password" || typeInputEmail === "text" )&& (
                        showPassword ? (
                            <FaEye className="eye" onClick={togglePasswordVisibility} />
                        ) : (
                            <FaEyeSlash className="eye" onClick={togglePasswordVisibility}  />
                        )
                    )}

                </div>
                {visibilyBtnEmail && 
                    <Btn 
                        type="submit" 
                        value={valueBtnEmail} 
                        $bg_color="var(--color-primary-btn-bg)"
                        $bg_hover="var(--color-primary-btn-bg-hover)"
                        onClick={() => handleSubmit()}
                    />
                }
                { visibilySectionCode &&
                    <section>
                        {visibilyBtnEmail &&
                            <div className="text-reset">
                                <p>Enviamos um Email com um codigo para redefinir sua senha</p>
                            </div>
                        }
                        <div className="input-field" >
                            <label htmlFor="code">{labelCode}</label>
                            <CampoInput
                                type={typeInputCode}
                                name="code"
                                id="code"
                                placeholder={placeholderCode}
                                autoComplete="code"
                                value={code}
                                onChange={(e) => setCode(e.target.value)}
                                required
                                $bg_color_input="var(--color-input-bg)"
                                $bg_hover_input="var(--color-input-bg-hover)"
                            />
                            {(typeInputEmail === "password" || typeInputEmail === "text") && (
                                showPassword ? (
                                    <FaEye className="eye" onClick={togglePasswordVisibility}  />
                                ) : (
                                    <FaEyeSlash className="eye"  onClick={togglePasswordVisibility}  />
                                )
                            )}
                        </div>
                        {!visibilyBtnEmail ?<Btn 
                            type="submit" 
                            value={valueBtnCode}
                            $bg_color="var(--color-primary-btn-bg)"
                            $bg_hover="var(--color-primary-btn-bg-hover)"
                            onClick={() => hendlePasswordUpdate()}
                            />  
                        :
                            <Btn 
                                type="submit" 
                                value={valueBtnCode}
                                $bg_color="var(--color-primary-btn-bg)"
                                $bg_hover="var(--color-primary-btn-bg-hover)"
                                onClick={() => hendleCodeVerify()}
                            />
                        }
                    </section>
                }
            </form>
            {loading &&
                <Loader/>
            }
        </FormWrapper>
    )
}

export default FormReset;