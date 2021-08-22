const formButton = document.querySelector('#formButton');
const emailInput = document.querySelector('#email');
const errorMessage = document.querySelector('span.error');

formButton.addEventListener('click', (evt) => {
    evt.preventDefault;
    if (!validateEmail() && emailInput.classList.value === '') {
        toggleClass();
    } else if (validateEmail() && emailInput.classList.value === 'change') {
        toggleClass();
    }
})

function validateEmail() {
    const isValid = (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailInput.value)) ? true : false;
    return isValid;
}

function toggleClass() {
    emailInput.classList.toggle('change');
    errorMessage.classList.toggle('change');
}