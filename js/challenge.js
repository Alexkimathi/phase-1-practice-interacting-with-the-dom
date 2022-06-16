document.addEventListener("DOMContentLoaded", () => {
    setInterval(startTimer, 1000);
})

const counter = document.querySelector('#counter')
const count =0
let startTime =0
const plus = document.querySelector('#plus')
const minus = document.querySelector('#minus')
const heart = document.querySelector('#heart')
const pause = document.querySelector('#pause')
const likes = document.querySelector('#likes')
const myForm = document.querySelector('#form')
const myInput = document.querySelector('#comment-input')
const comments = document.querySelector('#list')
const submit = document.querySelector('#submit')
const selectedButton = document.querySelector('button')
const intervals = document.querySelector(runCounter, 1000)






//increment and decrement

plus.addEventListener("click", () => {
    startTime ++;
    counterElement.innerHTML = startTime
});

minus.addEventListener("click", () => {
    startTime --;
    counterElement.innerHTML = startTime
});


//likes
if (button == heart){
    const numberlikes = [];
    const liked = 0;
    let li = document.createElement('li')
    likes.appendChild(li)
    li.innerText =`${count} has been liked  `

}

//pause
if (button == pause){
    if(pause.innerText === "pause"){
        ResetIntervals()
        plus.setAttribute('disabled', "")
        minus.setAttribute('disabled', "")
        heart.setAttribute('disabled', "")
        pause.innerHTML = 'resume'
    }
    else if(pause.innerHTML === 'resume'){
        ResetIntervals()
        plus.removeAttribute('disabled', "")
        minus.removeAttribute('disabled', "")
        heart.removeAttribute('disabled', "")
        pause.innerHTML = 'pause'
        intervals = setInterval(runCounter, 1000)
    }

}

//comments

if (button == submit){
    let p = document.createElement('p');
    p.innerHTML = `${myInput.value}`
    comments.appendChild(p)
    p.innerHTML = `${myInput.value}`
    comments.appendChild(p)
   myInput.value = "";

}

selectedButton.forEach(button =>{
    button.addEventListener('click', (e)=>{
        e.preventDefault(button)
        changeCounter(button)
        })
})

        