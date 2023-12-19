
let tabNav = document.querySelectorAll('.sidebar_inner nav ol li a')
let tabContent = document.querySelectorAll('.tab')
const planBlock = document.querySelector('.plan_block')
const infoBlock = document.querySelector('.info_block')
const addonsBlock = document.querySelector('.addons')

tabNav.forEach(item=>{
    item.addEventListener('click', (e)=>{
        e.preventDefault()

        document.querySelector('.is-active')?.classList.remove('is-active')
        item.classList.add('is-active')

        console.log(e.target.getAttribute('data-tab-name'))
        switch (e.target.getAttribute('data-tab-name')){
            case `tab-1`:
                tabContent.forEach(tab=>{
                    tab.classList.remove('is-active')
                    tab.classList.add('hidden')
                })
                infoBlock.classList.add('is-active')
            break;

            case `tab-2`:
                tabContent.forEach(tab=>{
                    tab.classList.remove('is-active')
                    tab.classList.add('hidden')
                })
                planBlock.classList.add('is-active')
            break;

            case `tab-3`:
                tabContent.forEach(tab=>{
                    tab.classList.remove('is-active')
                    tab.classList.add('hidden')
                })
                addonsBlock.classList.add('is-active')
        }

    })
})


// let tabName

//     tabNav.forEach(tab =>{
//         tab.addEventListener('click', (e)=>{
//             e.preventDefault()
    
//             document.querySelector('.is-active')?.classList.remove('is-active')
//             tab.classList.add('is-active')

//             // console.log(e.target)
            
//             console.log(tabContent)

    
            
            


//             // tabContent.forEach(tabCon =>{
//             //     tabCon.addEventListener('click', (e)=>{
//             //         console.log(e.target)
//             //     })
//             // })
//         })
//     })    







// tabContent.forEach(tabCon =>{
//     tabCon.addEventListener('click', ()=>{
//         document.querySelector('.is-active')?.classList.remove('is-active')
//         tabCon.classList.add('hidden')
//         selectTabNav()
//     })
// })





// let tab = function () {
//     let tabNav = document.querySelectorAll('.sidebar_inner nav ol li a'),
//         tabContent = document.querySelectorAll('.tab'),
//         tabName;    

        
//     tabNav.forEach(item => {
//         item.addEventListener('click', selectTabNav)
        
//     });

//     function selectTabContent(tabName) {
//         tabContent.forEach(item => {
//             item.classList.contains(tabName) ? item.classList.add('is-active') : item.classList.remove('is-active');
//         })
//     }

//     function selectTabNav(event) {

//         event.preventDefault()

//         tabNav.forEach(item => {
//             item.classList.remove('is-active');
//         });
//         this.classList.add('is-active');
//         tabName = this.getAttribute('data-tab-name');
//         selectTabContent(tabName);
//         console.log(tabName)
//         // console.log(tabContent)
//     }
//     // console.log(tabName) 
    
// };


// tab();