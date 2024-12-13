const navLink = document.querySelectorAll('nav .links a')
const mobileMenu = document.querySelector('nav .mobile-menu')
const nav = document.querySelector('nav')
const main = document.querySelector('main')

navLink.forEach((link)=>{
    link.addEventListener('click', (e)=>{
        for (let i = 0; i < navLink.length; i++) {
            navLink[i].classList.remove('active')
        }
        
        e.target.classList.add('active')
        console.log('active');
        
    })
})

mobileMenu.addEventListener('click', ()=>{
    nav.classList.toggle('mobileMenuActive')
})

setTimeout(() => {
    main.classList.remove('beforeAnimate')
}, 1000);