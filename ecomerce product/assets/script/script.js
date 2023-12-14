let counter = document.querySelector('.counter p')

document.querySelectorAll('.counter img').forEach(img=>{
    img.addEventListener('click', (e)=>{
        e.preventDefault()
        e.target === document.querySelector('.minus') ? counter.innerHTML = `${+counter.innerHTML - 1}` : counter.innerHTML = `${+counter.innerHTML + 1}`
    })
    
})