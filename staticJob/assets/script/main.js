const boxes = document.querySelectorAll('.box')
const cards = document.querySelectorAll('.card')
const currentTags = document.querySelector('.current_tags')

// boxes.forEach( (box) => {
//     box.addEventListener('click', (e)=>{
//         // console.log(e.target)

//         const filtered = e.target.dataset['f']
//         console.log(filtered)
//         if(!e.target.classList.contains(filtered)){
//             console.log(e.target.parentNode.parentNode)
//             cards.forEach(element => {
//                 element.classList.add('hidden')
//             });
//         }
//     })
// })

document.querySelectorAll('.tags').forEach((tag)=>{
    tag.addEventListener('click', (e)=>{
        e.preventDefault()
        if(e.target.tagName !== 'P') return false
    
        const filtered = e.target.dataset['f']
        console.log(filtered)

        switch(filtered){
            case `Senior`:
                boxes.forEach(box=>{
                    
                })
            break;
        }
        
    })
})
