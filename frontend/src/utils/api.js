class Api {
    constructor({baseUrl, headers}) {
        this._baseUrl = baseUrl;
        this._headers = headers;
    }

    _getJsonOrError(res) {
        if (res.ok){
            return res.json();
        }
            return Promise.reject(`Ошибка: ${res.status}`);
    }

    getCards(){
        return fetch(`${this._baseUrl}/cards`,{
            headers: this._headers
        })
            .then(this._getJsonOrError);
    }

    postCard(data){
        return fetch(`${this._baseUrl}/cards`,{
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify(data)
        })
            .then(this._getJsonOrError);
    }

    getUserInfo(){
        return fetch(`${this._baseUrl}/users/me`,{
            headers: this._headers
        })
            .then(this._getJsonOrError);
    }

    changeUserInfo(data){
        return fetch(`${this._baseUrl}/users/me`,{
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify(data)
        })
            .then(this._getJsonOrError);
    }

    changeUserAvatar(data){
        return fetch(`${this._baseUrl}/users/me/avatar`,{
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify(data)
        })
            .then(this._getJsonOrError);
    }

    deleteCard(id){
        return fetch(`${this._baseUrl}/cards/${id}`,{
            method: 'DELETE',
            headers: this._headers,
        })
            .then(this._getJsonOrError);
    }

    likeCard(id){
        return fetch(`${this._baseUrl}/cards/${id}/likes`,{
            method: 'PUT',
            headers: this._headers,
        })
            .then(this._getJsonOrError);
    }

    dislikeCard(id){
        return fetch(`${this._baseUrl}/cards/${id}/likes`,{
            method: 'DELETE',
            headers: this._headers,
        })
            .then(this._getJsonOrError);
    }

    changeLikeCardStatus(id, isLiked) {
        return isLiked ? this.dislikeCard(id) : this.likeCard(id);
    }
}

export const api = new Api({
    baseUrl: 'https://api.mesto-siroja.nomoredomains.icu',
    headers: {
        "Content-Type": "application/json",
    }
})
