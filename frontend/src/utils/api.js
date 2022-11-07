class Api {
    constructor({baseUrl}) {
        this._baseUrl = baseUrl;
    }

    _getJsonOrError(res) {
        if (res.ok){
            return res.json();
        }
            return Promise.reject(`Ошибка: ${res.status}`);
    }

    getCards(token){
        return fetch(`${this._baseUrl}/cards`,{
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${token}`,
            },
        })
            .then(this._getJsonOrError);
    }

    postCard(data, token){
        return fetch(`${this._baseUrl}/cards`,{
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify(data),
            credentials: 'include',
        })
            .then(this._getJsonOrError);
    }

    getUserInfo(token){
        return fetch(`${this._baseUrl}/users/me`,{
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${token}`,
            },
        })
            .then(this._getJsonOrError);
    }

    changeUserInfo(data, token){
        return fetch(`${this._baseUrl}/users/me`,{
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify(data),
        })
            .then(this._getJsonOrError);
    }

    changeUserAvatar(data, token){
        return fetch(`${this._baseUrl}/users/me/avatar`,{
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify(data),
        })
            .then(this._getJsonOrError);
    }

    deleteCard(id, token){
        return fetch(`${this._baseUrl}/cards/${id}`,{
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${token}`,
            },
        })
            .then(this._getJsonOrError);
    }

    likeCard(id, token){
        return fetch(`${this._baseUrl}/cards/${id}/likes`,{
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${token}`,
            },
        })
            .then(this._getJsonOrError);
    }

    dislikeCard(id, token){
        return fetch(`${this._baseUrl}/cards/${id}/likes`,{
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${token}`,
            },
        })
            .then(this._getJsonOrError);
    }

    changeLikeCardStatus(id, isLiked, token) {
        return isLiked ? this.dislikeCard(id, token) : this.likeCard(id, token);
    }
}

export const api = new Api({
    baseUrl: 'https://api.mesto-siroja.nomoredomains.icu',
})
