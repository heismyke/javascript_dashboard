const addUserForm = document.getElementById('addUserForm');
addUserForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const nameInput = event.target.querySelector("#name");
    const emailInput = event.target.querySelector("#email");
    const addressesInput = event.target.querySelector("#address");
    const phoneInput = event.target.querySelector("#number");

    const name = nameInput.value;
    if (!name) {
        const nameInputDiv = document.getElementById('nameInputDiv');
        const errorDiv = document.createElement('div');
        errorDiv.textContent = "Name is required!";
        errorDiv.classList.add('errorDiv')
        nameInputDiv.appendChild(errorDiv);
        nameInput.addEventListener("keydown", function() {
            errorDiv.remove();
        });
    }
    

});


