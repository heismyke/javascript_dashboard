const menuContainer = document.getElementById('menuContainer');
let isMenuOpen = false;




document.addEventListener('click', function(event) {
   console.log('Click event detected');
   if (isMenuOpen && !menuContainer.contains(event.target)) {
      // Hide the menu
       console.log('Hide event detected');
       
  }
});
