let a = document.getElementById("home");
let box = document.getElementById('box');
a.addEventListener("mouseover", ()=>{
    console.log("enter the");
// box.classList.add('box2');
// box.classList.remove('box1');
box.classList.toggle('box2');
})