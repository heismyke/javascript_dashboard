// import { add } from "./add";

export const cancelBtn = document.querySelectorAll('.cancelIcon');
import { addUI } from "./add.js";
import { delUI } from "./del.js";
const addDialog = document.getElementById('addDialog');
    cancelBtn.forEach((button) => {
        button.addEventListener('click', function() {
            cancel()
        });
    })






export function cancel(){
    addUI.style.display = 'none';
    delUI.style.display = 'none';
}


//animate__fadeOutUp