import {beers} from './data.js';

const header = (logo, cardComp) => {
    return `
    <div class="header">
        <h1>${logo}</h1>
        <span class="material-symbols-outlined">menu</span>
    </div>
    <div class="card-container">
        ${cardComp}
    </div>
`
};

const cardComp = (index, title, sub, text) => {
    return `
    <div class="card card${index} secondary-color">
        <div class="number primary-color"><span>${index}</span></div>
        <div class="cardText">
            <h2>${title}</h2>
            <hr>
            <div class="parCont">
                <p>${sub}</p>
                <p>${text}</p>
            </div>
        </div>
        <div class="btnCont">
            <button class="primary-color"><span>details</span><span class="material-symbols-outlined">arrow_forward</span></button>
        </div>
    </div>
    `
};

window.addEventListener('load', () => {
    const root = document.getElementById("root");
    let content = ""
    const beerDetails = beers.cards.map((card, index) => {
        content += cardComp(index+1, card.title, card.sub, card.text)
    })

    console.log(beerDetails)

    root.insertAdjacentHTML('beforeend', header(beers.logo, content));

});

