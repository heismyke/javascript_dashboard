import { cancelBtn } from "./cancel.js";
const addUserForm = document.getElementById('addUserForm');
addUserForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const nameInput = event.target.querySelector("#name");
    const emailInput = event.target.querySelector("#email");
    const addressInput = event.target.querySelector("#address");
    const phoneInput = event.target.querySelector("#number");
    let errorDiv = document.querySelector('.errorDiv');
   


    const name = nameInput.value;
    const email = emailInput.value;
    const address = addressInput.value;
    const phone = phoneInput.value;

    if (!name && !errorDiv) {
        const nameInputDiv = document.getElementById('nameInputDiv');
        const errorDiv = document.createElement('div');
        errorDiv.textContent = "Name is required!";
        errorDiv.classList.add('errorDiv')
       
        nameInputDiv.appendChild(errorDiv);
        nameInput.addEventListener("keydown", function() {
            errorDiv.remove();
        });
       cancelBtn.forEach((buttons) => {
        buttons.addEventListener("click", function() {
            errorDiv.remove();
        });
       })
    }
    if(!email && !errorDiv || isEmailValid(email)) {
        const emailInputDiv = document.getElementById('emailInputDiv');
        const errorDiv = document.createElement('div');
        errorDiv.textContent = "Email is required!";
        errorDiv.classList.add('errorDiv')
      
        emailInputDiv.appendChild(errorDiv);
        emailInput.addEventListener("keydown", function() {
            errorDiv.remove();
        });
        cancelBtn.forEach((buttons) => {
            buttons.addEventListener("click", function() {
                errorDiv.remove();
            });
        })
    } 
    if(!address && !errorDiv){
        const addressInputDiv = document.getElementById('addressInputDiv');
        const errorDiv = document.createElement('div');
        errorDiv.textContent = "Address is required!";
        errorDiv.classList.add('errorDiv')
       
        addressInputDiv.appendChild(errorDiv);
        addressInput.addEventListener("keydown", function() {
            errorDiv.remove();
        });
        cancelBtn.forEach((buttons) => {
            buttons.addEventListener("click", function() {
                errorDiv.remove();
            });
        })
    }
   
    if(phoneInput.value.length < 11 && !errorDiv){
        const phoneInputDiv = document.getElementById('phoneInputDiv');
        const errorDiv = document.createElement('div');
        errorDiv.textContent = "phone number must be 11 digits ";
        errorDiv.classList.add('errorDiv')
        phoneInputDiv.appendChild(errorDiv);
        phoneInput.addEventListener("keydown", function() {
            errorDiv.remove();
        });
        cancelBtn.forEach((buttons) => {
            buttons.addEventListener("click", function() {
                errorDiv.remove();
            });
        })
    }else if(phoneInput.value.length > 11 && !errorDiv){
        const phoneInputDiv = document.getElementById('phoneInputDiv');
        const errorDiv = document.createElement('div');
        errorDiv.textContent = "phone number must be 11 digits ";
        errorDiv.classList.add('errorDiv')
        phoneInputDiv.appendChild(errorDiv);
        phoneInput.addEventListener("keydown", function() {
            errorDiv.remove();
        });
        cancelBtn.forEach((buttons) => {
            buttons.addEventListener("click", function() {
                errorDiv.remove();
            });
        })
    }else{
        null;
    }
});

function isEmailValid(email) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    emailPattern.test(email)

    
}

