import { cancelBtn } from "./cancel.js";
const addUserForm = document.getElementById('addUserForm');
addUserForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const nameInput = event.target.querySelector("#name");
    const emailInput = event.target.querySelector("#email");
    const addressesInput = event.target.querySelector("#address");
    const phoneInput = event.target.querySelector("#number");

    const name = nameInput.value;
    const email = emailInput.value;
    const addresses = addressesInput.value;
    const phone = phoneInput.value;

    if (!name) {
        const nameInputDiv = document.getElementById('nameInputDiv');
        const errorDiv = document.createElement('div');
        errorDiv.textContent = "Name is required!";
        errorDiv.classList.add('errorDiv')
        setTimeout(() => {
            errorDiv.remove();
        }, 2000)
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
    if(!email || isEmailValid(email)) {
        const emailInputDiv = document.getElementById('emailInputDiv');
        const errorDiv = document.createElement('div');
        errorDiv.textContent = "Email is required!";
        errorDiv.classList.add('errorDiv')
        setTimeout(() => {
            errorDiv.remove();
        }, 2000)
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
    
    

});

function isEmailValid(email) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    if (emailPattern.test(email)) {
        
        return true;
    } else {
       
        alert("Please enter a valid email");
        return false;
    }

    
}

