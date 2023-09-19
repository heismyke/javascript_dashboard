export const addUserButton = document.getElementById('addBtn');
 export const addUI = document.getElementById('addUI');
const isHidden = addUI.classList.contains('hidden');



export const add = () => {  

    if (isHidden){
        addUI.style.display = 'flex';
        addUI.classList.add('addUI');
    }else{
        isHidden
    }
  
}





