let containers = document.getElementsByClassName('custom-lang-select');
let optionsBlock = document.getElementsByClassName('lang-options');
let selectors = document.getElementsByClassName('lang-select');
let timeout

function handleChangeOprionsVisible(id) {
  if (Array.from(optionsBlock[id].classList).includes('hide')) optionsBlock[id].classList.remove('hide');
  else {
    optionsBlock[id].classList.add('hide');
    selectors[id].blur();
    clearTimeout(timeout);
    console.log('here');
  }
}

function setLang(id, lang) {
  selectors[id].textContent = lang;
  selectors[id].blur();
}

for (let i = 0; i < 2; i++) {
  console.log(optionsBlock);
  containers[i].addEventListener('click', () => handleChangeOprionsVisible(i));
  selectors[i].addEventListener('blur', () => {
    if (timeout) clearTimeout(timeout); 
    timeout = setTimeout(() => handleChangeOprionsVisible(i), 500);
  })

  Array.from(optionsBlock[i].childNodes).slice(1).forEach(button => {
    button.addEventListener('click', () => setLang(i, button.dataset.value));
  })
}
