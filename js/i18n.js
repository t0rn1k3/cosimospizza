(function () {
  const LANG_KEY = 'cosimo-lang';
  const DEFAULT_LANG = 'ge';

  function getNested(obj, path) {
    return path.split('.').reduce(function (current, key) {
      return current && current[key] !== undefined ? current[key] : undefined;
    }, obj);
  }

  function getLang() {
    return document.documentElement.dataset.lang || DEFAULT_LANG;
  }

  function bindValidation(el, lang) {
    var key = el.getAttribute('data-i18n-invalid');
    if (!key) {
      return;
    }

    var message = getNested(translations[lang], key);
    if (message === undefined) {
      return;
    }

    el.oninvalid = function () {
      this.setCustomValidity(message);
    };
    el.onchange = function () {
      try {
        this.setCustomValidity('');
      } catch (e) {}
    };
  }

  function setLanguage(lang) {
    if (!translations[lang]) {
      lang = DEFAULT_LANG;
    }

    document.documentElement.lang = lang === 'ge' ? 'ka' : 'en';
    document.documentElement.dataset.lang = lang;

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var text = getNested(translations[lang], el.getAttribute('data-i18n'));
      if (text !== undefined) {
        el.textContent = text;
      }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      var text = getNested(translations[lang], el.getAttribute('data-i18n-placeholder'));
      if (text !== undefined) {
        el.placeholder = text;
      }
    });

    document.querySelectorAll('[data-i18n-value]').forEach(function (el) {
      var text = getNested(translations[lang], el.getAttribute('data-i18n-value'));
      if (text !== undefined) {
        el.value = text;
      }
    });

    document.querySelectorAll('[data-i18n-invalid]').forEach(function (el) {
      bindValidation(el, lang);
    });

    document.querySelectorAll('.language-links').forEach(function (link) {
      var linkLang = link.getAttribute('data-lang');
      link.classList.toggle('actv', linkLang === lang);
    });

    try {
      localStorage.setItem(LANG_KEY, lang);
    } catch (e) {}
  }

  function initI18n() {
    var savedLang = DEFAULT_LANG;

    try {
      savedLang = localStorage.getItem(LANG_KEY) || DEFAULT_LANG;
    } catch (e) {}

    setLanguage(savedLang);

    document.querySelectorAll('.language-links').forEach(function (link) {
      link.addEventListener('click', function (event) {
        event.preventDefault();
        setLanguage(link.getAttribute('data-lang'));
      });
    });
  }

  window.setLanguage = setLanguage;
  window.getLang = getLang;

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initI18n);
  } else {
    initI18n();
  }
})();
