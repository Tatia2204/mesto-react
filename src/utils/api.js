import Main from "../components/Main";

class Api {
    constructor(options) {
        this._url = options.baseUrl;
        this._headers = options. headers;
    }

    //загрузка карточек
    getInitialCards() {
        return fetch(`${this._url}/cards`, {
            method: 'GET',
            headers: this._headers
        })
            .then(this._checkRequest);
    }

    //добавление новой карточки
    addNewCard(data) {
        return fetch(`${this._url}/cards`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({
                name: data.name,
                link: data.link
            })
        })
            .then(this._checkRequest);
    }

    //проверка ответа
    _checkRequest(res) {
        {
            if (res.ok) {
                return res.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`);
        }
    }

    //запрос инфы о профеле
    getProfileInfo() {
        return fetch(`${this._url}/users/me`, {
            method: 'GET',
            headers: this._headers
        })
            .then(this._checkRequest);
    }

    //изменение инфы профеля
    changeProfileInfo(data) {
        return fetch(`${this._url}/users/me`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                name: data.profileName,
                about: data.profileProfession
            })
        })
            .then(this._checkRequest);
    }

    //изменение аватара профеля
    changeProfileAvatar(data) {
        return fetch(`${this._url}/users/me/avatar`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                avatar: data.link
            })
        })
            .then(this._checkRequest);
    }

    //добавить лайк
    addLike(_id) {
        return fetch(`${this._url}/cards/${_id}/likes`, {
            method: 'PUT',
            headers: this._headers
        })
            .then(this._checkRequest);
    }

    //удалить лайк
    deleteLike(_id) {
        return fetch(`${this._url}/cards/${_id}/likes`, {
            method: 'DELETE',
            headers: this._headers
        })
            .then(this._checkRequest);
    }

    //удалить карточки
    deleteCard(_id) {
        return fetch(`${this._url}/cards/${_id}`, {
            method: 'DELETE',
            headers: this._headers
        })
            .then(this._checkRequest);
    }
    }

const api = new Api({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-43',
    headers: {
        authorization: 'ffa77eee-e2e0-4984-80c5-a3aae1c9cc92',
        'Content-Type': 'application/json'
    }
});

export default api;