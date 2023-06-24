const buttons = document.querySelectorAll('.rates__category-item');
const tabsItems = document.querySelectorAll('.rates__item');

const addressBtn = document.querySelectorAll('.address__item');
const tabsAddress = document.querySelectorAll('.stops');

addressBtn.forEach((button) => {
  button.addEventListener('click', () => {
    console.log('fyfjsjhf');
    let currentAddressBtn = button;
    let tabId = currentAddressBtn.getAttribute('data-tab');
    let currentTab = document.querySelector(tabId);

    addressBtn.forEach(function (button) {
      button.classList.remove('active');
      button.classList.remove('address__item--active');
    });

    tabsAddress.forEach(function (button) {
      button.classList.remove('stops--active');
    });

    currentAddressBtn.classList.add('active');
    currentAddressBtn.classList.add('address__item--active');

    currentTab.classList.add('stops--active');
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

document.querySelector('.rates__category-item').click();
