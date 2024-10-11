import {Modal_container} from "./ModalStyles";
//icons
import { BiSolidError } from "react-icons/bi";
import { FaWindowClose } from "react-icons/fa";
import Btn from "../btn/Btn";

const Modal = ({text, setModal, modal,  setToogleForm, toogleForm, btns, setResetForm, resetForm}) => {
    return (
        
        <Modal_container style={{display: modal ? "flex" : "none"}}>
            <div className="container">
                <div className="icon-container">
                    <BiSolidError className="icon-error" />
                    <FaWindowClose  className="icon-close" onClick={() => setModal(!modal)} />
                </div>
                <p>
                    {text}
                </p>
                { btns &&
                    <div className="btn-container">
                        <Btn 
                            type="button" 
                            value="Login" 
                            onClick={() => setToogleForm(!toogleForm)}
                            $bg_color="var(--color-primary-btn-bg)"
                            $bg_hover="var(--color-primary-btn-bg-hover)"
                        />
                        <Btn 
                            style={{paddign: "10px"}}
                            type="button" 
                            value="Redefinir Senha"
                            onClick={() => setResetForm(!resetForm)}
                            $bg_color="var(--color-primary-btn-bg)"
                            $bg_hover="var(--color-primary-btn-bg-hover)"
                            
                        />
                    </div>
                }
            </div>
        </Modal_container>
        
    )
}

export default Modal;