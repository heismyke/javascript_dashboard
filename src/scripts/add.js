export const addUserButton = document.getElementById('addBtn');
        const addUI = document.getElementById('addUI');

var isAddUserButtonClicked = false;

export const add = () => {
    isAddUserButtonClicked = true;
    addUI.style.display = 'flex';
}