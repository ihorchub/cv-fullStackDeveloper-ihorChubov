import { langArr } from './js/lang';

const select = document.querySelector('select');
const allLang = ['en', 'uk'];

location.href = `${location.pathname}#en`;

select.addEventListener('change', changeURLLanguage);

function changeURLLanguage() {
  const lang = select.value;
  location.href = `${location.pathname}#${lang}`;
  changeLanguage();
}

function changeLanguage() {
  let hash = window.location.hash.slice(1);
  // if (!allLang.includes(hash)) {
  //   location.href = `${location.pathname}#en`;
  // }
  select.value = hash;
  // document.querySelector('title').innerHTML = langArr['unit'][hash];
  // document.querySelector('.lng-chip').innerHTML = langArr['chip'][hash];
  for (let key in langArr) {
    let elem = document.querySelector(`.lng-${key}`);
    if (elem) {
      elem.innerHTML = langArr[key][hash];
    }
  }
}
