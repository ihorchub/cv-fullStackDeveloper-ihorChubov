const lang = document.querySelectorAll('.language');

const langButton = document.querySelector('.lang-button');

langButton.addEventListener('click', onClick);

function onClick() {
  lang.forEach(elem => {
    elem.classList.toggle('is-hidden');
  });
  if (langButton.textContent === 'Українською') {
    langButton.textContent = 'In English';
  } else {
    langButton.textContent = 'Українською';
  }
}
