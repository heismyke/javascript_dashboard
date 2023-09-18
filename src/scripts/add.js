export const addUserButton = document.getElementById('addBtn');
 export const addUI = document.getElementById('addUI');
const addUserUi = document.getElementById('addUserUi');
const isHidden = addUI.classList.contains('hidden');

import { cancel } from "./cancel.js";
import { cancelBtn } from "./cancel.js";

export const add = () => {  

    if (isHidden){
        addUI.style.display = 'flex';
        addUI.classList.add('addUI');
    }else{
        isHidden
    }
  
}

cancelBtn.addEventListener('click' , function() {
    cancel()
})



