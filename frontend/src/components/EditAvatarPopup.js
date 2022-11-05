import PopupWithForm from "./PopupWithForm";
import {useRef} from "react";

function EditAvatarPopup({isOpen, isClose, onUpdateAvatar}){
    const avatarRef = useRef()

    const handleSubmit = (e) => {
        e.preventDefault();

        onUpdateAvatar({
            avatar: avatarRef.current.value,
        });
    }

    return (
        <PopupWithForm
            name='avatar'
            ariaLabel='редактированием аватара'
            title='Обновить аватар'
            button='Сохранить'
            isOpen={isOpen}
            isClose={isClose}
            onSubmit={handleSubmit}>
            <label className="popup__label">
                <input id="form-avatar-link" type="url" name="avatar" className="popup__input popup__input_type_job"
                       ref={avatarRef} placeholder="Ссылка на изображение" required/>
                <span className="popup__input-error form-avatar-link-error"/>
            </label>
        </PopupWithForm>)
}

export default EditAvatarPopup