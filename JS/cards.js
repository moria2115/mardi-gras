let sponsers = [
    {
        title: 'Ace Hotel',
        image: './images/sponsers/aceHotel.png',
        link: "https://acehotel.com/new-orleans/",
    },
    {
        title: 'Haunted Museum',
        image: './images/sponsers/hauntedMuseum.jpg',
        link: "https://thehauntedmuseum.com/",
    },
    {
        title: "Louisiana Children Museum",
        image: './images/sponsers/louisianaChildrenMuseum.png',
        link: "https://lcm.org/",
    },
    {
        title: 'Museum of Death',
        image: './images/sponsers/museumOfDeath.png',
        link: "http://www.museumofdeath.net/",
    },
    {
        title: "Premium Parking",
        image: './images/sponsers/premiumParking.png',
        link: "https://www.premiumparking.com/",
    },
    {
        title: 'Sheraton',
        image: './images/sponsers/sheraton.png',
        link: "https://www.marriott.com/en-us/hotels/msyis-sheraton-new-orleans-hotel/overview/",
    },
    {
        title: 'The Ritz-Carlton',
        image: './images/sponsers/theRitzCarlton.png',
        link: "https://www.ritzcarlton.com/en/hotels/new-orleans",
    },
    {
        title: "Walk On's",
        image: './images/sponsers/walkOns.png',
        link: "https://walk-ons.com/",
    },
]

function buildSponsersCard(title, img, link) {

    return `<div class="col-lg-6 col-xl-3 co-xs-6">
                <div class="card mx-auto mt-2" >
                    <img src="${img}" class="card-img-top" alt="${title}">
                    <div class="card-body">
                        <h5 class="card-title">${title}</h5>
                        <a href="${link}" class="btn btn-primary w-100">To site</a>
                    </div>
                </div>
            </div>`
}

function getSponsersCard() {

    for (let card of sponsers) {
        document.querySelector('.coverdata').innerHTML += buildSponsersCard(card.title, card.image, card.link);
    }

    // const cards = sponsers.map(function (card) {
    //     return buildSponsersCard(card.title, card.img, card.link)
    // })

    // sponsers.map(card => buildSponsersCard(card.title, card.img, card.link));
    // console.log(cards);
}


window.onload = getSponsersCard();
