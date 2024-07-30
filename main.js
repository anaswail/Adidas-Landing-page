const icon = document.getElementById('icon');

icon.addEventListener("click", ()=>{
    document.body.classList.toggle('light-mood');
    if(document.body.classList == 'light-mood'){
        icon.className = 'fa-solid fa-moon';
    }
    else{
        icon.className = 'fa-solid fa-sun'
    }
})