import React from 'react';

function PopupWithForm({name, ariaLabel, title, button, isOpen, isClose, children, onSubmit}){
    return (
        <div id={`popup-${name}`} className={`popup ${isOpen && 'popup_open'}`}>
            <div className="popup__content">
                <button id={`close-${name}`} type="button" className="popup__close"
                        aria-label={`Закрыть форму с ${ariaLabel}`} onClick={isClose}></button>
                <h3 className="popup__title">{title}</h3>
                <form id={`form-${name}`} name={`form-${name}`} className={`popup__form popup__form_${name}`} onSubmit={onSubmit} noValidate>
                    {children}
                    <button type="submit" className={`popup__submit popup__submit_${name}`}>{button}</button>
                </form>
            </div>
        </div>
    )
}

export default PopupWithForm