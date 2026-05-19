(function () {
  function renderPizzaCard(card) {
    return (
      '<div class="box">' +
        '<div class="image">' +
          '<img src="' + card.image + '" alt="pizza">' +
          '<div class="hover">' +
            '<span class="recipe" data-i18n="pizza.' + card.id + '.recipe"></span>' +
          '</div>' +
        '</div>' +
        '<span class="pizza_name" data-i18n="pizza.' + card.id + '.name"></span>' +
        '<span class="price" data-i18n="pizza.' + card.id + '.price"></span>' +
      '</div>'
    );
  }

  function renderMenuListItem(item) {
    return (
      '<li>' +
        '<span class="names">' +
          '<span>' + item.ge + '</span>' +
          '<span>' + item.en + '</span>' +
        '</span>' +
        '<span class="prices">' + item.price + '</span>' +
      '</li>'
    );
  }

  function renderMenuListItems(items) {
    return items.map(renderMenuListItem).join('');
  }

  function renderMenu() {
    var cardsContainer = document.querySelector('.pizza_containers');
    if (cardsContainer && typeof pizzaCards !== 'undefined') {
      cardsContainer.innerHTML = pizzaCards.map(renderPizzaCard).join('');
    }

    if (typeof menuList === 'undefined') {
      return;
    }

    var beveragesList = document.querySelector('.drinks ul');
    if (beveragesList) {
      beveragesList.innerHTML = renderMenuListItems(menuList.beverages);
    }

    var dessertsList = document.querySelector('.dessert ul');
    if (dessertsList) {
      dessertsList.innerHTML = renderMenuListItems(menuList.desserts);
    }

    var mainDishesList = document.querySelector('.main-dish ul');
    if (mainDishesList) {
      mainDishesList.innerHTML = renderMenuListItems(menuList.mainDishes);
    }
  }

  function initMenuPage() {
    renderMenu();

    if (window.setLanguage && window.getLang) {
      window.setLanguage(window.getLang());
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMenuPage);
  } else {
    initMenuPage();
  }
})();
