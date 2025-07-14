let menuIcon = document.querySelector('.menu-icon');
let ul = document.querySelector('.ul');

menuIcon.addEventListener('click',()=>{
    if(ul.classList.contains('ativo')){
           ul.classList.remove('ativo')
            document.querySelector('.menu-icon').src = '';
    }else{
        ul.classList.add('ativo')
        document.querySelector('.menu-icon').src = '';

    }
    
})