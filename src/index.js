import { langArr } from './js/lang';

const select = document.querySelector('select');

location.href = `${location.pathname}#en`;

select.addEventListener('change', changeURLLanguage);

function changeURLLanguage() {
  const lang = select.value;
  location.href = `${location.pathname}#${lang}`;
  changeLanguage();
}

function changeLanguage() {
  const hash = window.location.hash.slice(1);

  select.value = hash;

  for (let key in langArr) {
    let elem = document.querySelector(`.lng-${key}`);
    if (elem) {
      elem.innerHTML = langArr[key][hash];
    }
  }
}
