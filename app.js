const name = document.querySelector('input#name'),
dateOfBirth = document.querySelector('input#birthDate'), 
address = document.querySelector('input#address'), 
contactId = document.querySelector('input#telephone'), 
email = document.querySelector('input#email'), 
course = document.querySelector('input#course');


const registerBtn = document.querySelector('register-btn');

registerBtn.addEventListener('click', (e) => {
    e.preventDefault
    inputValidator(input, text)
})

function inputValidator(input, text) {
    if(input = ""){
        input.innerText = text;
        input.classList.add = 'active'
    }
}