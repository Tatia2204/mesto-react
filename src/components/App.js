import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from "./Footer.js";
import PopupWithForm from "./PopupWithForm.js";
import ImagePopup from "./ImagePopup.js";

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});

  function handleEditAvatarHandler() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileHandler() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceHandler() {
    setIsAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard({});
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  return (
    <div>

      <div className="page">
        <Header />
        <Main
            onEditAvatar={handleEditAvatarHandler}
            onEditProfile={handleEditProfileHandler}
            onAddPlace={handleAddPlaceHandler}
            onCardClick={handleCardClick}
        />
        <Footer />
        <ImagePopup
            card={selectedCard}
            onClose={closeAllPopups}
        />

        <PopupWithForm
            popup="profile"
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
            name="formProfile"
            title="Редактировать профиль"
            text="Сохранить"
        >
          <lebel className="popup__indent">
            <input type="text"
               id="profileName-input"
               required
               minLength="2"
               maxLength="40"
               placeholder="Имя"
               name="profileName"
               className="popup__element popup__element_profile popup__element_add_name"/>
            <span className="popup__error" id="profileName-input-error"></span>
          </lebel>
          <lebel className="popup__indent">
            <input type="text"
                 id="profileProfession-input"
                 required
                 minLength="2"
                 maxLength="200"
                 placeholder="Профессия"
                 name="profileProfession"
                 className="popup__element popup__element_profile popup__element_add_profession"/>
            <span className="popup__error" id="profileProfession-input-error"></span>
          </lebel>
        </PopupWithForm>

        <PopupWithForm
            popup="location"
            isOpen={isAddPlacePopupOpen}
            onClose={closeAllPopups}
            name="formLocation"
            title="Новое место"
            text="Создать"
        >
          <lebel className="popup__indent">
            <input type="text"
                 id="name-input"
                 required
                 minLength="2"
                 maxLength="30"
                 placeholder="Название"
                 name="name"
                 className="popup__element popup__element_location popup__element_add_heading"/>
            <span className="popup__error" id="name-input-error"></span>
          </lebel>
          <lebel className="popup__indent">
            <input type="url"
                   id="link-input"
                   required
                   placeholder="Ссылка на картинку"
                   name="link"
                   className="popup__element popup__element_location popup__element_add_link"/>
              <span className="popup__error" id="link-input-error"></span>
          </lebel>
          </PopupWithForm>

        <PopupWithForm
            popup="avatar"
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopups}
            name="formAvatar"
            title="Обновить аватар"
            text="Сохранить"
        >
          <lebel className="popup__indent">
            <input type="url"
                   id="link-avatar"
                   required
                   placeholder="Ссылка на картинку"
                   name="link"
                   className="popup__element popup__element_avatar popup__element_add_link"/>
              <span className="popup__error" id="link-avatar-error"></span>
          </lebel>
        </PopupWithForm>

        <PopupWithForm
            popup="delete"
            onClose={closeAllPopups}
            name="formDelete"
            title="Вы уверены?"
            text="Да"
        >
        </PopupWithForm>

      </div>

    </div>
  );
}

export default App;


