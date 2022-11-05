import React from 'react';
import {useContext} from "react";
import CurrentUserContext from "../contexts/CurrentUserContext";

function Card({card, onCardClick, onCardLike, onCardDelete}){
    const currentUser = useContext(CurrentUserContext)

    const isOwn = card.owner._id === currentUser._id;

    const cardDeleteButton = (
        `snapshots__delete ${!isOwn && 'snapshots__delete_hidden'}`
    );

    const isLiked = card.likes.some(i => i._id === currentUser._id);

    const cardLikeButtonClassName = (
        `snapshots__like ${isLiked && 'snapshots__like_active'}`
    );

    return (
        <li className="snapshots__element">
            <button type="button" className={cardDeleteButton} aria-label="Удалить карточку" onClick={function handleClick() {
                onCardDelete(card);
            }}></button>
            <img src={card.link} alt={card.name}
                 className="snapshots__photo" onClick={function handleClick() {
                onCardClick(card);
            }}/>
            <div className="snapshots__info">
                <h2 className="snapshots__title">{card.name}</h2>
                <div className="like-container">
                    <button type="button" className={cardLikeButtonClassName} onClick={() => {
                        onCardLike(card);
                    }}/>
                    <h3 className="snapshots__num-like">{card.likes.length}</h3>
                </div>
            </div>
        </li>
    )
}

export default Card