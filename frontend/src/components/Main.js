import {useContext, useEffect, useState} from 'react';
import {api} from "../utils/api.js";
import Card from "./Card.js";
import CurrentUserContext from "../contexts/CurrentUserContext";



function Main({onAddPlace, onEditProfile, onEditAvatar, onCardClick, cards, handleCardLike, handleCardDelete}){

    const currentUser = useContext(CurrentUserContext)

    return (
        <main className="content">
            <section className="profile">
                <div className="profile__content">
                    <div className="profile__avatar-container">
                        <img src={currentUser.avatar} alt="Фотография исследователя" className="profile__avatar" onClick={onEditAvatar}/>
                    </div>
                    <div className="profile__info">
                        <h1 className="profile__name">{currentUser.name}</h1>
                        <button type="button" className="profile__edit-button" aria-label="Редактировать" onClick={onEditProfile}></button>
                        <p className="profile__job">{currentUser.about}</p>
                    </div>
                </div>
                <button type="button" className="profile__add-button" aria-label="Добавить фотографию" onClick={onAddPlace}></button>
            </section>
            <section className="snapshots">
                <ul className="snapshots__elements">
                    {cards.map((card)=>(
                        <Card
                            card={card}
                            key={card._id}
                            onCardClick={onCardClick}
                            onCardLike={handleCardLike}
                            onCardDelete={handleCardDelete}/>
                    ))}
                </ul>
            </section>
        </main>
    )
}

export default Main