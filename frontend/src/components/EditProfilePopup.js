import PopupWithForm from "./PopupWithForm";
import {useState, useContext, useEffect} from "react";
import CurrentUserContext from "../contexts/CurrentUserContext";

function EditProfilePopup({isOpen, isClose, onUpdateUser}) {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')

    const currentUser = useContext(CurrentUserContext)

    const handleChangeName = (e) => {
        setName(e.target.value)
    }

    const handleChangeDescription = (e) => {
        setDescription(e.target.value)
    }

    useEffect(() => {
        setName(currentUser.name);
        setDescription(currentUser.about);
    }, [currentUser, isOpen])

    const handleSubmit = (e) => {
        e.preventDefault();

        onUpdateUser({
            name,
            about: description,
        });
    }

    return (
        <PopupWithForm
            name='edit'
            ariaLabel='редактированием'
            title='Редактировать профиль'
            button='Сохранить'
            isOpen={isOpen}
            isClose={isClose}
            onSubmit={handleSubmit}>
            <label className="popup__label">
                <input id="formname" type="text" name="name" className="popup__input popup__input_type_name"
                        value={name || ''} onChange={handleChangeName} placeholder="ФИО" required minLength="2" maxLength="40"/>
                <span className="popup__input-error formname-error"/>
            </label>
            <label className="popup__label">
                <input id="formjob" type="text" name="about" className="popup__input popup__input_type_job"
                       value={description || ''} onChange={handleChangeDescription} placeholder="Информация о деятельности" required minLength="2" maxLength="200"/>
                <span className="popup__input-error formjob-error"/>
            </label>
        </PopupWithForm>
    )
}

export default EditProfilePopup