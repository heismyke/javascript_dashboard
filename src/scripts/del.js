export const deleteButton = document.getElementById('delBtn');
const delUI = document.getElementById('delUI');
var isDeleteButtonClicked = false;

export const del = () => {
    isDeleteButtonClicked = true;
    delUI.style.display = 'flex';
}