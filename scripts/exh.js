const transactionInfo = {
    name: '',
    card:'',
    cryptoCard:'',
    fiat:'',
    crypto:'',
    cryptoShort:'',
    fiatOrder:'',
    cryptoOrder:'',
    sale: '',
    bank: '',
    bankImg: '',
    min: '10',
    max: '1000',
    cryptoImg:'',
    cryptoCurs:'',
}

document.addEventListener('click', function(event) {

    if(event.target == document.querySelectorAll('.next-button')[1]) {
        toThirStade();
    }
});

function toFirStade() {
    cont.classList.remove('sec');
    cont.classList.add('fir');
}
function toSecStade() {

}

function toThirStade() {
    const email = document.getElementById('email').value;
    const card = document.getElementById('card').value;
    const cryptoCard = document.getElementById('cryptoCard').value
    const name = document.getElementById('name').value;
    const sumSec = document.getElementById('sumSec').value;

    if(validateEmail(email) && 
        validateNumber(card, 16, 18, 'ошибка в банковской карточке') && 
        validateNumber(cryptoCard, 28, 100,'ошибка в номере кошелька') && 
        validateThreeWords(name, 'ошибка в имени') &&
        validateSum(sumSec, 'Введите сумму') &&
        politicChecked()) {
            transactionInfo.cryptoCard = cryptoCard;
            transactionInfo.card = card;
            transactionInfo.fiatOrder = sumSec;

            const cont = document.querySelector('.exchanger');
            cont.classList.remove('sec');
            cont.classList.add('thir');
            fillThir();
    }
}
function politicChecked () {
    const test = document.querySelector('.rel-radio').checked;
    const error = document.querySelector('.error-sec');
    if (!test) {
        error.innerHTML = `Подтвердите правила обмена и политику AML`;
        return false;
    }
    return test;
}
function validateSum(input, msg) {
    const test = Boolean(input);
    const error = document.querySelector('.error-sec');
    if (!test) {
        error.innerHTML = `${msg}`;
        return false;
    }
    return test;
}

function validateThreeWords(input, msg) {
    const test = /^\b\w+\b(\s+\b\w+\b){2}$/.test(input.trim());
    const error = document.querySelector('.error-sec');
    if (!test) {
        error.innerHTML = `${msg}`;
        return false;
    }
    transactionInfo.name = input;
    return test;
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const error = document.querySelector('.error-sec');
    if(!re.test(email)) {
        
        error.innerHTML = 'ошибка в email';
        return false;
    }
    transactionInfo.email = email;
    error.innerHTML = ' ';
    return re.test(email);
}

function validateNumber(input, min, max, msg) {
    const regex = new RegExp(`^\\d{${min},${max}}$`);
    const test = regex.test(input);
    const error = document.querySelector('.error-sec');
    if (!test) {
        error.innerHTML = `${msg}`;
        return false;
    }
    return test;
}

function fillThir () {
    document.getElementById('sumThir').innerHTML = transactionInfo.fiatOrder;
    document.getElementById('fiatThir').innerHTML = transactionInfo.fiat;
    document.getElementById('bankThir').innerHTML = `<img src="${transactionInfo.bankImg}"> <span>${transactionInfo.bank}</span>`;
    document.getElementById('nameThir').innerHTML = transactionInfo.name;
    document.getElementById('cardThir').innerHTML = transactionInfo.card;
    document.getElementById('cryptoThir').innerHTML = transactionInfo.fiatOrder / transactionInfo.cryptoCurs;
    document.getElementById('cryptoShort').innerHTML = transactionInfo.cryptoShort;
    document.getElementById('cryptoName').innerHTML = `<img src="${transactionInfo.cryptoImg}"> <span>${transactionInfo.crypto}</span>`
}

document.addEventListener('DOMContentLoaded', function() {
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(dropdown => {
        const dropdownBtn = dropdown.querySelector('.dropdown-btn');
        const dropdownContent = dropdown.querySelector('.dropdown-content');
        const dropdownSearch = dropdown.querySelector('.dropdown-search');
        const dropdownFilters = dropdown.querySelector('.dropdown-filters');
        const dropdownList = dropdown.querySelector('.dropdown-list');
        const listItems = dropdownList.querySelectorAll('li');

        dropdownBtn.addEventListener('click', function() {
            dropdownContent.classList.toggle('show');
            dropdownSearch.focus();
        });

        dropdownList.addEventListener('click', function(event) {
            if (event.target.tagName === 'LI') {
                dropdownBtn.innerHTML = `<span>${event.target.innerHTML}</span>`;
                dropdownContent.classList.remove('show');
            }
        });

        document.addEventListener('click', function(event) {
            if (!event.target.closest('.dropdown')) {
                dropdownContent.classList.remove('show');
            }
        });

        dropdownSearch.addEventListener('input', function() {
            const filter = dropdownSearch.value.toLowerCase();
            listItems.forEach(item => {
                const text = item.textContent.toLowerCase();
                if (text.includes(filter)) {
                    item.style.display = '';
                } else {
                    item.style.display = 'none';
                }
            });
        });

        if (dropdownFilters) {
            dropdownFilters.addEventListener('click', function(event) {
                if (event.target.tagName === 'BUTTON') {
                    const filter = event.target.getAttribute('data-filter').toLowerCase();
                    dropdownSearch.value = '';
                    listItems.forEach(item => {
                        const text = item.textContent.toLowerCase();
                        if (filter === 'all' || text.includes(filter)) {
                            item.style.display = '';
                        } else {
                            item.style.display = 'none';
                        }
                    });
                }
            });
        }

        // Additional logic for currency selection
        const currencyButtons = dropdownFilters ? dropdownFilters.querySelectorAll('button[data-currency]') : [];
        currencyButtons.forEach(button => {
            button.addEventListener('click', function() {
                const currency = button.getAttribute('data-currency');
                // Handle currency selection logic here
                dropdownBtn.innerHTML = `<span>${currency}</span>`;
                dropdownContent.classList.remove('show');
            });
        });
    });
});
