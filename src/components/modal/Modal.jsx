import {Modal_container} from "./ModalStyles";
//icons
import { BiSolidError } from "react-icons/bi";
import { FaWindowClose } from "react-icons/fa";

const Modal = ({text, setModal, modal}) => {
    return (
        
        <Modal_container style={{display: modal ? "flex" : "none"}}>
            <div className="container">
                <div className="icon-container">
                    <BiSolidError className="icon-error" />
                    <FaWindowClose  className="icon-close" onClick={() => setModal(!modal)} />
                </div>
                <p>
                    {text.split('\n').map((line, index) => (
                        <span key={index}>
                            {line}
                            <br />
                            <br />
                        </span>
                    ))}
                </p>
            </div>
        </Modal_container>
        
    )
}

export default Modal;