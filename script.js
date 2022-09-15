const $ = document;
const query = queryItem => $.querySelector (queryItem);
const queryAll = queryAllItem => $.querySelectorAll (queryAllItem);

// ------------------ data
const pricingTable = query ('.pricing-table');
const cards = queryAll ('.price-card');
const previousCard = query ('.previous-card');
const nextCard = query ('.next-card');

let numberCard = 1;

// ------------------ functions
const showCard = number => {
    cards.forEach(card => {
        if (card.className.includes ('show')) {
            card.classList.remove ('show');
        };
        cards[number].classList.add ('show');
    })
}

const prevCard = () => {
    numberCard--;
    (numberCard === -1) && (numberCard = 2);

    showCard (numberCard);
}

const nextCardShow = () => {
    numberCard++;
    (numberCard === 3) && (numberCard = 0);

    showCard (numberCard);
}

// --------------- event's
previousCard.addEventListener('click', prevCard);
nextCard.addEventListener('click', nextCardShow);