export const validationEnable = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__submit',
    inactiveButtonClass: 'popup__submit_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__input-error_visible'
};

export const buttonEdit = document.querySelector('.profile__edit-button');
export const buttonAdd = document.querySelector('.profile__add-button');
export const buttonAvatar = document.querySelector('.profile__avatar');
export const formEditEl = document.querySelector('#edit-profile');
export const formAddEl = document.querySelector('#add-snapshot');
export const formEditAvatar = document.querySelector('#edit-avatar');
export const popupName = formEditEl.querySelector('#formname');
export const popupJob = formEditEl.querySelector('#formjob');
export const snapshotContainer = document.querySelector('.snapshots__elements');