export const addUserButton = document.getElementById('addBtn');
 const addUI = document.getElementById('addUI');
const addUserUi = document.getElementById('addUserUi');
var isAddUserButtonClicked = false;

export const add = () => {
    isAddUserButtonClicked = true;
    addUI.style.display = 'flex';
    addUI.classList.add('addUI');
}

addUI.addEventListener('click', function (e) {
    console.log(e.target)
   
})