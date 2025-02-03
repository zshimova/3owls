// Запрос data.json
async function loadData() {
    try {
        const response = await fetch('data.json');
        const data = await response.json();
        cardsRendering(data);
    } catch (error) {
        console.error('Ошибка загрузки данных:', error);
    }
}

loadData();


// рендеринг карточки
function cardsRendering(cardsArr) {
    const container = document.querySelector('.main__cards');
    container.innerHTML = ``;

    cardsArr.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');

        cardElement.innerHTML = `<div class="card__first-block">
                                    <img class="card__first-block_img" src="${card.img}" alt="${card.name}">
                                    <span class="card__first-block_discount">${card.amount}</span>
                                    <button class="favorite-icon"></button>
                                </div>
                                <div class="card__second-block-wrapper">
                                    <div class="card__second-block">
                                        <h3 class="card__second-block_h3">${card.name}</h3>
                                        <div class="card__second-block-price">
                                            <span id="past-price"><s>${card.past_price}</s></span>
                                            <span id="current-price">${card.discount}</span>
                                        </div>
                                    </div>
                                    <div class="card__second-block-hidden">
                                        <div class="card__sizes-block">
                                            <span class="card__sizes-block_available">Размеры в наличии:</span>
                                            <div class="card__sizes-block_size">
                                                <span>S</span>
                                                <span>M</span>
                                                <span>L</span>
                                                <span>XL</span>
                                                <span>XXL</span>
                                            </div>
                                        </div>
                                        <button id="buy-btn">Купить</button>
                                    </div>
                                </div>`;

        container.appendChild(cardElement);
    });

    addFavorite();
}

function addFavorite() {
    const favoriteButtons = document.querySelectorAll('.favorite-icon');
    favoriteButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            event.currentTarget.classList.toggle('active');
        });
    });
}