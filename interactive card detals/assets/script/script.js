let cardFrontNum = document.querySelector('.card__front .card__front__num')
let cardFrontName = document.querySelector('.card__front .card__front__name')
let cardFrontMonth = document.querySelector('.card__front .card__front__my .card_month')
let cardFrontYear = document.querySelector('.card__front .card__front__my .card_year')
let cardBack = document.querySelector('.card__back .card__back__cvc')
let completeBlock = document.querySelector('.complete')
let infoInput = document.querySelector('.info__input')

let cardholder = document.querySelector('.info__input #cardholder')
let cardNumber = document.querySelector('.info__input #card__number')
let expdatemonth = document.querySelector('.info__input #expdatemonth')
let expdateyear = document.querySelector('.info__input #expdateyear')
let cvc = document.querySelector('.info__input #cvc')
let confBtn = document.querySelector('.info__input #confirmBtn')
let continueBtn = document.querySelector('.complete .continue')

let reg = /[A-Za-zA-Яа-яЁё]/g
let textOnly = /[1-9]/g

cardholder.oninput = () =>{
    cardFrontName.innerText = cardholder.value;
    cardholder.value = cardholder.value.replace(textOnly, '')
}

cardNumber.oninput = () =>{
    cardFrontNum.innerText = cardNumber.value
}


expdateyear.oninput = () =>{
    cardFrontYear.innerText = expdateyear.value
    if(expdateyear.value > 2){
        return
    }
}
expdatemonth.oninput = () =>{
    cardFrontMonth.innerText = expdatemonth.value
}

cvc.oninput = () =>{
    cardBack.innerText = cvc.value;
    cvc.value = cvc.value.replace(reg, '')
}

confBtn.addEventListener('click', ()=>{
    infoInput.classList.add('hidden')
    completeBlock.classList.remove('hidden')
    completeBlock.classList.add('open')
})

continueBtn.addEventListener('click', ()=>{
    infoInput.classList.remove('hidden')
    completeBlock.classList.remove('open')
    completeBlock.classList.add('hidden')
})
