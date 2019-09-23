const timer = document.getElementById("counter")
const minusBtn = document.getElementById("-")
const plusBtn = document.getElementById("+")
const likeBtn = document.getElementById("<3")
const pauseBtn = document.getElementById("pause")
const likeList = document.getElementById("likes")
let intervalID = null
const array = [] 

document.addEventListener("DOMContentLoaded",autoTimer)
minusBtn.addEventListener("click", decreaseTimer)
plusBtn.addEventListener("click", increaseTimer)
likeBtn.addEventListener("click", likeNumber)
pauseBtn.addEventListener("click", pauseTimer)


function autoTimer() {
    intervalID = setInterval(function() {
        let autoCount = (parseInt(timer.innerText) + 1).toString()
        timer.innerText = autoCount

    }, 1000)
}

function decreaseTimer() {
    let manuelDecrease = (parseInt(timer.innerText) - 1).toString()
    timer.innerText = manuelDecrease
 }

 function increaseTimer() {
     let manuelIncrease = (parseInt(timer.innerText) + 1).toString()
     timer.innerText = manuelIncrease
 }

 function pauseTimer() {
     if (pauseBtn.innerText == "pause"){
         clearInterval(intervalID)
         pauseBtn.innerText = "resume"
     } else {
         pauseBtn.innerText == "pause"
         autoTimer()
     }
 }

 function likeNumber() {
     likeList.innerHTML = ""
     let obj = array.find(obj => obj.number == timer.innerText)
     if (obj) {
         obj.likes +=1 
     } else {
        let newObj = {number: timer.innerText, likes: 1}
        array.push(newObj)
    }
     
     array.forEach( (obj)=> {
         let newLikeLi = document.createElement("li")
         newLikeLi.innerText = `${obj.number} has been liked ${obj.likes} times`
         likeList.appendChild(newLikeLi)
        })
    
 }


 

 // collection
 // num like and amount times
 //obj rep data
 // check if obj we have exsists,if does increment if not create