// import { add } from "./add";

export const cancelBtn = document.getElementById('cancelIcon');
const xmark = cancelBtn.classList.contains('fa-xmark')
const addDialog = document.getElementById('addDialog');

import { addUI } from "./add.js";


export function cancel(){
    if(xmark){
        
        addUI.style.display = 'none';
    }

}


//animate__fadeOutUp