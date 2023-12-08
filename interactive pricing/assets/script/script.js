let priceRange = document.querySelector('#trigger')
let priceMY = document.querySelector('.card .priceMY')
let MonthPricing = document.querySelector('.card .monthPricing')
let price = document.querySelector('.card #price')

priceRange.value = 0
discount = 0.25

priceRange.addEventListener('click', (e)=>{

    if(priceRange.value == 1){
        priceRange.style.backgroundColor = 'hsl(174, 86%, 45%)';
        priceMY.innerHTML = `${((parseFloat(priceMY.innerHTML) * 12)) - (parseFloat(priceMY.innerHTML) * 12 * 0.25)}`
        MonthPricing.innerHTML = `/ year`
        // priceRange.style.pointerEvents = 'none'
    }else{
        priceRange.style.backgroundColor = '#cacaca';
        priceMY.innerHTML = `${(parseFloat(priceMY.innerHTML) / 12 * discount) + (parseFloat(priceMY.innerHTML) / 12)}`
        
        MonthPricing.innerHTML = `/ month`
        // priceRange.style.pointerEvents = 'none'
    }

    console.log(priceRange.value)
})

price.addEventListener('input', ()=>{
    priceMY.innerHTML = price.value
})