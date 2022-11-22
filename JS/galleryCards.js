let galleryImages = [
    "https://images.unsplash.com/photo-1574724713425-fee7e2eacf84?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1726&q=80", "https://images.unsplash.com/photo-1556895837-a37146836292?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80", "https://images.unsplash.com/photo-1592635946063-cfc12136b9fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80", "https://images.unsplash.com/photo-1624789444529-245ac3c7ec9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80", "https://images.unsplash.com/photo-1632405741267-6087737b6913?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80", "https://images.unsplash.com/photo-1624361071015-ef6ce6546542?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80", "https://images.unsplash.com/photo-1547538160-bbd967711070?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1779&q=80", "https://images.unsplash.com/photo-1661183820207-30902075ddf5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80", "https://images.unsplash.com/photo-1647211103456-ccf4d8e3315e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1772&q=80", "https://images.unsplash.com/photo-1659883171513-6306a9323fb5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80", "https://images.unsplash.com/photo-1658674589501-ceb3f98080a0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80", "https://images.unsplash.com/photo-1635700413068-38a65b0491df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2234&q=80"
];

function galleryCardsBuilder(img) {
    `<div class="card bg-dark text-white">
  <img class="card-img" src=${img}alt="Card image">
</div>`
};


function getGalleryCard() {
    for (let card of galleryImages) {
        document.getElementById('gallery').innerHTML += galleryCardsBuilder(card.image)
    }
};

window.onload = getGalleryCard();
