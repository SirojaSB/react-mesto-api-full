import PopupWithForm from "./PopupWithForm";
import {useState} from "react";


function AddPlacePopup({isOpen, isClose, onAddPlace}) {
    const [formValues, setFormValues] = useState({ name: "", link: "" });

    const handleChange = (evt) => {
        const {name, value} = evt.target;
        setFormValues(old => ({ ...old, [name]: value }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const {name, link} = formValues;
        onAddPlace({
            name,
            link,
        });
    }

    return (
        <PopupWithForm
            name='add'
            ariaLabel='добавлением'
            title='Новое место'
            button='Создать'
            isOpen={isOpen}
            isClose={isClose}
            onSubmit={handleSubmit}>
            <label className="popup__label">
                <input id="form-img-name" type="text" name="name" className="popup__input popup__input_type_name"
                       value={formValues.name || ''} onChange={handleChange} placeholder="Название" required minLength="2" maxLength="30"/>
                <span className="popup__input-error form-img-name-error"/>
            </label>
            <label className="popup__label">
                <input id="form-img-link" type="url" name="link" className="popup__input popup__input_type_job"
                       value={formValues.link || ''} onChange={handleChange} placeholder="Ссылка на изображение" required/>
                <span className="popup__input-error form-img-link-error"/>
            </label>
        </PopupWithForm>
    )
}

export default AddPlacePopup