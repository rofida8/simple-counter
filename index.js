const button = document.querySelectorAll("button")
let counter = document.querySelector("counter_name")
let increasingCounter=document.getElementById("number")
/*
button.forEach(e=>e.addEventListener("click",click))

function click(){ 
    */
    button[0].addEventListener("click",function decreasing(){
        increasingCounter.innerHTML--})
    button[1].addEventListener("click",function restarting(){
        increasingCounter.innerHTML=0})
    button[2].addEventListener("click",function increasing(){
        increasingCounter.innerHTML++ })
      