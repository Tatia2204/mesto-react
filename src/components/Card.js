function Card({card, onCardClick}) {
    function handleClick () {
        onCardClick(card);
    }

    return (
        <article className="element">
            <button aria-label="Удалить карточку" className="link element__remove" type="button"></button>
            <img src={card.link} alt={card.name} className="element__mask-group" onClick={handleClick}/>
            <div className="element__group">
                <h2 className="element__location">{card.name}</h2>
                <div className="element__like-group">
                    <button aria-label="Отметить фото" className="element__like" type="button"></button>
                    <p className="element__likes">{card.likes.length}</p>
                </div>
            </div>
        </article>
    )
}

export default Card;