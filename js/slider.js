const buttons = document.querySelectorAll('.rates__category-item');
const tabsItems = document.querySelectorAll('.rates__item');

const addressBtn = document.querySelectorAll('.address__item');

addressBtn.forEach((button) => {
  button.addEventListener('click', () => {
    console.log('fyfjsjhf');
    let currentAddressBtn = button;

    addressBtn.forEach(function (button) {
      button.classList.remove('active');
      button.classList.remove('address__item--active');
    });

    currentAddressBtn.classList.add('active');
    currentAddressBtn.classList.add('address__item--active');
  });
});

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    let currentBtn = button;
    let tabId = currentBtn.getAttribute('data-tab');
    let currentTab = document.querySelector(tabId);

    buttons.forEach(function (button) {
      button.classList.remove('active');
    });

    tabsItems.forEach(function (button) {
      button.classList.remove('rates__item--active');
    });

    currentBtn.classList.add('active');
    currentTab.classList.add('rates__item--active');
  });
});

document.querySelector('.rates__category-item:nth-child(2)').click();
