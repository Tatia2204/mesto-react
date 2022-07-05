import React from "react";
import api from "../utils/api.js"
import Card from "./Card.js"


function Main (props) {
    const [userName, setUserName] = React.useState('');
    const [userDescription, setUserDescription] = React.useState('');
    const [userAvatar, setUserAvatar] = React.useState('');
    const [cardList, setCardList] = React.useState([]);

    React.useEffect(() => {
        api.getProfileInfo()
            .then((data) => {
                setUserName(data.name);
                setUserDescription(data.about);
                setUserAvatar(data.avatar);
            })
            .catch((err) => {
                console.log(`Ошибка: ${err}`);
            });
        api.getInitialCards()
            .then((data) => {
                setCardList(data);
            })
            .catch((err) => {
                console.log(`Ошибка: ${err}`);
            });
    }, [])

    return (
        <main className="content">
            <section className="profile">
                <div className="profile__container">
                    <button aria-label="Поменять аватар" className="profile__avatar-button"
                            onClick={props.onEditAvatar}>
                    </button>
                    <img src={userAvatar} alt="фото" className="profile__avatar"/>
                </div>
                <div className="profile__info">
                    <h1 className="profile__name">{userName}</h1>
                    <button aria-label="Перейти к изменению профеля" className="link profile__info-edit" type="button"
                            onClick={props.onEditProfile}>
                    </button>
                    <p className="profile__profession">{userDescription}</p>
                </div>
                <button aria-label="Перейти к добавлению информации" className="link profile__info-add"
                        type="button" onClick={props.onAddPlace}>
                </button>
            </section>

            <section className="elements">
                {cardList.map((card) => (
                    <Card key={card._id} card={card} onCardClick={props.onCardClick} />
                ))}
            </section>
        </main>
    );
}

export default Main;