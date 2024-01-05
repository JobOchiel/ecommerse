const menuOutlineIcon = document.querySelector('#mobile ion-icon[name="menu-outline"]');
const nav =  document.getElementById('navbar');
const closeOutlineIcon = document.querySelector('#navbar a ion-icon[name="close-outline"]');


if (menuOutlineIcon) {
    menuOutlineIcon.addEventListener('click', () => {
        menuOutlineIcon.style.display = 'none';
        nav.classList.add('active');
    })
}

if (closeOutlineIcon){
    closeOutlineIcon.addEventListener('click', () => {
        menuOutlineIcon.style.display = 'inline-block';
        nav.classList.remove('active');
    })
}