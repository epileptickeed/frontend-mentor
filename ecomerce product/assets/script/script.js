let counter = document.querySelector('.counter p')
const cart = document.querySelector('.nav_right .cart')
const cartInner = document.querySelector('.nav_right .cart_inner')
const toCartBtn = document.querySelector('.store_text .addBtn')


document.querySelectorAll('.counter img').forEach(img=>{
    img.addEventListener('click', (e)=>{
        e.preventDefault()
        e.target === document.querySelector('.minus') ? counter.innerHTML = `${+counter.innerHTML - 1}` : counter.innerHTML = `${+counter.innerHTML + 1}`
    })
})

cart.addEventListener('click', (e)=>{
    cartInner.classList.toggle('hidden');
    // if(!cartInner.classList.contains('hidden')){
    //     document.body.addEventListener('click',()=>{
    //        cartInner.classList.add('hidden')
    //     })
    //     console.log('he')
    // }else{
    //     document.body.addEventListener('click',()=>{
    //         cartInner.classList.remove('hidden')
    //      })
    // }
})

toCartBtn.addEventListener('click', (e)=>{
    
    if(+counter.innerHTML === 0 || +counter.innerHTML < 0){
        e.stopPropagation()
        alert(`You must have more than 0`)
    }else{
        //Hide *Cart is empty* text
        document.querySelector('.nav_right .cart_inner span').classList.add('hidden')

        //Div
        let sneaker = document.createElement('div')
        sneaker.className = 'newSneaker'

        //text + price
        let sneakerPrice = document.createElement('span')
        let price = document.querySelector('.store_text .store_text_inner .price')
        sneakerPrice.textContent = `${price.innerHTML}`

        let sneakerP = document.createElement('p')
        sneakerP.textContent = `Fall Limited Edition Sneaker ${sneakerPrice.innerHTML}x${document.querySelector('.counter p').innerHTML} ${parseFloat(sneakerPrice.innerHTML * document.querySelector('.counter p').innerHTML)}`
        
        //Sneaker image
        let sneakerImg = document.createElement('img')
        sneakerImg.className = 'sneakerImg'
        sneakerImg.src = 'assets/images/image-product-1.jpg'
        
        //Delete 
        let deleteBtn = document.createElement('img')
        deleteBtn.className = 'deleteBtn'
        deleteBtn.src = 'assets/images/icon-delete.svg'

        deleteBtn.addEventListener('click', ()=>{
            sneaker.remove()
            document.querySelector('.nav_right .cart_inner span').classList.remove('hidden')
        })
        
        //Append
        sneaker.appendChild(sneakerImg)
        sneaker.appendChild(sneakerP)
        sneaker.appendChild(deleteBtn)
        // sneaker.appendChild(sneakerPrice)
        
        //Sneaker APPEND TO CART
        cartInner.appendChild(sneaker)
    }
    
    // console.log(cartInner.div)
    // if()
    
})

