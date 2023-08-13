var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();
today = dd + '/' + mm + '/' + yyyy;
console.log(today);


let enteredDay = document.querySelector('#day')
let enteredMonth = document.querySelector('#month')
let enteredYear = document.querySelector('#year')

let endDay = document.querySelector('#days_val')
let endMonth = document.querySelector('#months_val')
let endYear = document.querySelector('#years_val')



let btn = document.querySelector('#btn')


btn.addEventListener('click', function(){
    
    let dayCounter = dd - enteredDay.value
    let monthCounter = mm - enteredMonth.value
    let yearCounter = yyyy - enteredYear.value

    endDay.innerHTML = dayCounter
    endMonth.innerHTML = monthCounter
    endYear.innerHTML = yearCounter

    function setToZero(){
        endDay.innerHTML = `--`
        endMonth.innerHTML = `--`
        endYear.innerHTML = `--`
    }

    if(enteredDay.value > 31){
        alert(`days cant be more than 31`)
        setToZero()
    }else if(enteredMonth.value > 12){
        alert(`months cant be more than 12`)
        setToZero()
    }else if(enteredYear.value > 2023){
        alert(`how are you not even born?`)
        setToZero()
    }

    // if(enteredMonth.value > 12){
    //     alert(`months cant be more than 12`)
    //     endMonth.innerHTML = `--`
    // }

    // if(enteredYear.value > 2023){
    //     alert(`how are you not even born?`)
    //     endYear.innerHTML = `--`
    // }

})