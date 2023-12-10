let upvote = document.querySelectorAll('.comment_block .votes .upvote')
let voteScore = document.querySelectorAll('.comment_block .votes .vote_score')
let downvote = document.querySelectorAll('.comment_block .votes .downvote')
let reply = document.querySelectorAll('.info_block .info_block_inner .replyBtn')
let comBlock = document.querySelectorAll('.comment_block')
const main = document.querySelector('.main')
let afterBlock = document.querySelector('.main .after_block')
let personName = document.querySelectorAll('.name')




let scoreValue = 0
voteScore.forEach(vote=>{
    vote.innerHTML = `${scoreValue}`
})

upvote.forEach(upvot=>{
    upvot.addEventListener('click', ()=>{
        scoreValue++
        voteScore.forEach(score=>{
            score.innerHTML = `${scoreValue}`
        })
    })
})

downvote.forEach(down=>{
    down.addEventListener('click', ()=>{
        scoreValue--
        voteScore.forEach(score=>{
            score.innerHTML = `${scoreValue}`
        })
    })
})

// reply.forEach(replie =>{
//     replie.addEventListener('click', newComment)
// })


reply.forEach(replie =>{
    replie.addEventListener('click', (e)=>{
        let newDiv = document.createElement('div')
        newDiv.className = 'comment_block'
        newDiv.style.marginLeft = '5%'

        //VOTES
        let voteDiv = document.createElement('div')
        voteDiv.className = 'votes'
        voteDiv.style.display = 'none'

        let upvoteSpan = document.createElement('span')
        let upvoteContext = document.createTextNode('+')
        upvoteSpan.appendChild(upvoteContext)
        upvoteSpan.className = 'upvote'

        let voteScoreSpan = document.createElement('span')
        let voteScoreContext = document.createTextNode('0')
        voteScoreSpan.appendChild(voteScoreContext)
        voteScoreSpan.className = 'vote_score'

        let downvoteSpan = document.createElement('span')
        let downvoteSpanContext = document.createTextNode('-')
        downvoteSpan.appendChild(downvoteSpanContext)
        downvoteSpan.className = 'downvote'

        //INFO_BLOCK
        let infoBlock = document.createElement('div')
        infoBlock.className = 'info_block'

        let infoBlockInner = document.createElement('div')
        infoBlockInner.className = 'info_block_inner'

        let detailsBlock = document.createElement('div')
        detailsBlock.className = 'details'
        
        let avatar = document.createElement('img')
        avatar.src = 'assets/images/avatars/image-juliusomo.png'
        avatar.className = 'avaImage'
        
        let name = document.createElement('p')
        let nickName = document.createTextNode('juliosomo')
        name.appendChild(nickName)
        name.className = 'name'

        let dateNow = new Date();
        let minutes = dateNow.getMinutes();
        let hours = dateNow.getHours()
        let month = dateNow.getMonth()
        let days = dateNow.getDay()
        let years = dateNow.getFullYear()
        let date5SecondsAgo = (`at ${hours}:${minutes} on ${days}/${month}/${years}`);

        let date = document.createElement('p')
        let currentDate = document.createTextNode(date5SecondsAgo)
        date.appendChild(currentDate)
        date.className = 'date'

        let deleteBtn = document.createElement('p')
        let deleteText = document.createTextNode('Delete')
        deleteBtn.appendChild(deleteText)
        deleteBtn.className = 'deleteBtn'

        let editBtn = document.createElement('p')
        let editText = document.createTextNode('Edit')
        editBtn.appendChild(editText)
        editBtn.className = 'editBtn'

        let blockText = document.createElement('p')
        let blockTextT = document.createTextNode('')
        blockText.appendChild(blockTextT)
        blockText.className = 'block_text'

        let textSubDiv = document.createElement('div')
        textSubDiv.className = 'textSubDiv'

        let textArea = document.createElement('textarea')
        // let areaNick = document.createTextNode(personName.forEach(name=>{
        //     document.querySelector(personName)?.console.log(name)
        // }))
        // textArea.appendChild(areaNick)
        textArea.className = 'textArea'

        let submitBtn = document.createElement('input')
        submitBtn.className = 'submitBtn'
        submitBtn.type = 'submit'

        //ADD TO THE DIV
        
        function insertAfter(newNode, existingNode) {
            existingNode.parentNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
        }

        insertAfter(newDiv, e.target)

        // const currentDiv = document.querySelector(".aria_block");
        // main.insertBefore(newDiv, comBlock.forEach(block=>{
        //     block.value - 1
        //     // console.log(this.personName)
        // }));
        //append VOTES
        newDiv.appendChild(voteDiv)
        voteDiv.appendChild(upvoteSpan)
        voteDiv.appendChild(voteScoreSpan)
        voteDiv.appendChild(downvoteSpan)

        //append INFO_BLOCK 
        newDiv.appendChild(infoBlock)
            infoBlock.appendChild(infoBlockInner)
                infoBlockInner.appendChild(detailsBlock)
                    detailsBlock.appendChild(avatar)
                    detailsBlock.appendChild(name)
                    detailsBlock.appendChild(date)
                infoBlockInner.appendChild(deleteBtn)
                infoBlockInner.appendChild(editBtn)
            infoBlock.appendChild(textSubDiv)
                textSubDiv.appendChild(textArea)
                textSubDiv.appendChild(submitBtn)


        submitBtn.addEventListener('click', (event)=>{
            voteDiv.style.display = 'flex'   

            blockText.value = `${textArea.value}`
            infoBlock.removeChild(textSubDiv)
            infoBlock.appendChild(blockText)
            blockText.innerHTML = `${blockText.value}`

        })

        deleteBtn.addEventListener('click', ()=>{
            newDiv.remove()
        })

        editBtn.addEventListener('click', ()=>{
            infoBlock.appendChild(textSubDiv)
            infoBlock.removeChild(blockText)
        })
    })
})

function newComment(){
    
}