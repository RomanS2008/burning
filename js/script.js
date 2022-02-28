let hamburger = document.querySelector('.hamburger'), 
    wrapper = document.querySelector('.header_item_nav');

hamburger.addEventListener('click', ()=>{
    hamburger.classList.toggle('hamburger_active');
    wrapper.classList.toggle('header_item_nav_active')
})

