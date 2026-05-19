(function () {
  var ROUTES = ['home', 'menu', 'contact'];
  var PATTERN_IMAGES = {
    home: 'images/pattern-recangle.png',
    menu: 'images/pattern-circle.png',
    contact: 'images/pattern-circle.png'
  };

  var currentRoute = 'home';
  var inited = { home: false, menu: false, contact: false };
  var swiperInstance = null;

  function parseRoute() {
    var hash = location.hash.replace(/^#/, '');
    return ROUTES.indexOf(hash) !== -1 ? hash : 'home';
  }

  function routeHash(route) {
    return route === 'home' ? '' : '#' + route;
  }

  function updateNavActive(route) {
    document.querySelectorAll('.main-ul li').forEach(function (li) {
      var link = li.querySelector('[data-route]');
      li.classList.toggle('active', link && link.getAttribute('data-route') === route);
    });

    document.querySelectorAll('.main-ul-mobile li').forEach(function (li) {
      var link = li.querySelector('[data-route]');
      li.classList.toggle('mobile-active', link && link.getAttribute('data-route') === route);
    });
  }

  function updateDecoration(route) {
    document.body.setAttribute('data-route', route);

    var patternImg = document.querySelector('.pattern-decor img');
    if (patternImg && PATTERN_IMAGES[route]) {
      patternImg.src = PATTERN_IMAGES[route];
    }
  }

  function closeMobileNav() {
    if (typeof window.closeMobileNav === 'function') {
      window.closeMobileNav();
    }
  }

  function closeFullMenu() {
    var menuPopUp = document.getElementById('full-menu-container');
    if (menuPopUp) {
      menuPopUp.style.display = 'none';
    }
  }

  function initHomeView() {
    if (inited.home || typeof Swiper === 'undefined') {
      return;
    }

    var swiperEl = document.querySelector('#view-home .mySwiper');
    if (!swiperEl) {
      return;
    }

    swiperInstance = new Swiper(swiperEl, {
      loop: true,
      pagination: {
        el: swiperEl.querySelector('.swiper-pagination'),
        clickable: true
      }
    });

    inited.home = true;
  }

  function initMenuView() {
    if (inited.menu) {
      return;
    }

    if (typeof window.initMenuPage === 'function') {
      window.initMenuPage();
    }

    inited.menu = true;
  }

  function initContactView() {
    if (inited.contact) {
      return;
    }

    var iframe = document.querySelector('#view-contact #gmap_canvas');
    if (iframe && iframe.dataset.src && !iframe.src) {
      iframe.src = iframe.dataset.src;
    }

    inited.contact = true;
  }

  function runViewInit(route) {
    if (route === 'home') {
      initHomeView();
    } else if (route === 'menu') {
      initMenuView();
    } else if (route === 'contact') {
      initContactView();
    }
  }

  function showView(route, options) {
    options = options || {};

    if (ROUTES.indexOf(route) === -1) {
      route = 'home';
    }

    currentRoute = route;

    document.querySelectorAll('.page-view').forEach(function (view) {
      view.classList.toggle('is-active', view.id === 'view-' + route);
    });

    updateNavActive(route);
    updateDecoration(route);
    closeMobileNav();
    closeFullMenu();
    runViewInit(route);

    if (window.setLanguage && window.getLang) {
      window.setLanguage(window.getLang());
    }

    if (!options.skipScroll) {
      window.scrollTo(0, 0);
    }
  }

  function navigate(route, options) {
    options = options || {};
    var hash = routeHash(route);

    if (options.replace) {
      history.replaceState({ route: route }, '', location.pathname + location.search + hash);
    } else {
      history.pushState({ route: route }, '', location.pathname + location.search + hash);
    }

    showView(route, options);
  }

  function onLinkClick(event) {
    var link = event.target.closest('[data-route]');
    if (!link) {
      return;
    }

    var route = link.getAttribute('data-route');
    if (ROUTES.indexOf(route) === -1) {
      return;
    }

    event.preventDefault();

    if (route === currentRoute) {
      closeMobileNav();
      return;
    }

    navigate(route);
  }

  function onPopState() {
    showView(parseRoute(), { skipScroll: false });
  }

  function initRouter() {
    document.addEventListener('click', onLinkClick);
    window.addEventListener('popstate', onPopState);
    window.addEventListener('hashchange', onPopState);

    var initialRoute = parseRoute();
    navigate(initialRoute, { replace: true, skipScroll: true });
  }

  window.navigate = navigate;
  window.getCurrentRoute = function () {
    return currentRoute;
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initRouter);
  } else {
    initRouter();
  }
})();
