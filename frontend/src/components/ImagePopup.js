import React from 'react';

function ImagePopup({card, isOpen, onClose}){
    return (
        <div id="popup-img" className={`popup popup_img ${isOpen && 'popup_open'}`}>
            <div className="popup__figure">
                <button id="close-img" type="button" className="popup__close" aria-label="Закрыть карточку" onClick={onClose}></button>
                <img src={card.link} alt={card.name}
                     className="popup__image"/>
                <p className="popup__caption">{card.name}</p>
            </div>
        </div>
    )
}

export default ImagePopup