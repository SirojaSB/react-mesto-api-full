import React from "react";
import yes from "../images/Yes.svg";
import no from "../images/No.svg";

const InfoToolTip = ({onClose, isOpen, isCorrectly}) =>{
    return(
        <div className={`popup ${isOpen && 'popup_open'}`}>
            <div className="popup__content">
                <button type="button" className="popup__close" onClick={onClose}></button>
                {isCorrectly && (
                    <>
                        <img className="popup__icon" src={yes} alt="Вы успешно зарегистрировались"/>
                        <p className="popup__message">Вы успешно зарегистрировались!</p>
                    </>
                )}
                {!isCorrectly && (
                    <>
                        <img className="popup__icon" src={no} alt="Что-то пошло не так"/>
                        <p className="popup__message">Что-то пошло не так! Попробуйте ещё раз.</p>
                    </>
                )}
            </div>
        </div>
    )
}

export default InfoToolTip