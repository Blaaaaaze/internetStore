const productlist = [
    {
        name: "Рыжуля",
        price: 2000,
        description: "рыжий милашик",
        img: {
            pic: 'img/orangeCat.jpg',
            alt: 'Рыжий котик'
        }
    },
    {
        name: "Беляш",
        price: 5000,
        description: "беленький как снег, мягкий как облачко",
        img: {
            pic:'img/whiteCat.jpg',
            alt: 'Белый котик'
        }
    }, 
    {
        name: "Черныш",
        price: 2500,
        description: "Сама темнота, кошачья ночная фурия",
        img: {
            pic:'img/blackCat.jpg',
            alt: 'Черный котик'
        }
    }
];

function createCard(product) {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
        <img src="${product.img.pic}" alt="${product.img.alt}" class="card-img">
        <h2 class="card-title">${product.name}</h2>
        <p class="card-description">${product.description}</p>
        <p class="card-price">Цена: ${product.price} руб.</p>
        <button class="buy-button">Купить</button>
    `;
    return card;
}

productlist.forEach(product => {
    const catalogList = document.getElementById('catalog-list');
    const card = createCard(product);
    catalogList.appendChild(card);
});