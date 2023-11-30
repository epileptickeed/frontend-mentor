let open = document.querySelector('.header_inner #navOpen')
let close = document.querySelector('.header_inner #navClose')
let navigation = document.querySelectorAll('.header_navbar a')
let navbar = document.querySelector('.header_navbar')



open.addEventListener('click', ()=>{
    navigation.forEach(nav=>{
        nav.style.visibility = 'visible'
    })
    open.style.display = 'none'
    close.style.display = 'block'

})

close.addEventListener('click', ()=>{
    navigation.forEach(nav=>{
        nav.style.visibility = ''
    })
    open.style.display = 'block'
    close.style.display = 'none';
})
