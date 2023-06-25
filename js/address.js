const cardsContainer = document.querySelector('.address__list');
const cards = document.querySelectorAll('.address__item');

let isMobile = window.matchMedia('(max-width: 480px)').matches;
let cardWidth = isMobile ? cards[0].offsetWidth + 10 : cards[0].offsetWidth + 20;

cardsContainer.scrollLeft = (cardsContainer.scrollWidth - cardsContainer.offsetWidth) / 2;

cardsContainer.addEventListener('scroll', () => {
  let scrollLeft = cardsContainer.scrollLeft;
  let centerCardIndex = Math.round(scrollLeft / cardWidth);

  if (isMobile) {
    centerCardIndex += 1;
  }

  let centerCard = cards[centerCardIndex];

  if (centerCard) {
    let centerCardPosition = centerCard.offsetLeft + centerCard.offsetWidth / 2;
    let containerCenter = cardsContainer.offsetWidth / 2;

    cardsContainer.scrollLeft += centerCardPosition - containerCenter;
  }
});
