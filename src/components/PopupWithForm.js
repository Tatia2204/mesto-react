import React from "react";
import Main from "./Main";

function PopupWithForm(props) {

    const popupIsOpen = props.isOpen ? 'popup_opened' : '';
    return (
        <div className={`popup popup_${props.popup} ${popupIsOpen}`}>
            <div className="popup__form">
                <button aria-label="Закрыть окно" className="link popup__close" type="button"
                        onClick={props.onClose}>
                </button>
                <form name={`${props.name}`} noValidate className="popup__content">
                    <h3 className="popup__title">{props.title}</h3>
                        {props.children}
                    <button className="popup__save" type="submit">{props.text}</button>
                </form>
            </div>
        </div>
    )
}

export default PopupWithForm;