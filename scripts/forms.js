const eyes = document.querySelectorAll('.password-container img');
const passwords = document.querySelectorAll('.password-container input')

eyes.forEach((el, index)=> {
    el.addEventListener('click', function() {
        if(passwords[index].type == 'password') {
            passwords[index].type = 'text';
            el.src = './assets/icons/eye.svg';
        } else {
            passwords[index].type = 'password';
            el.src = './assets/icons/invisible 1.svg';
        }
    })
})