const element =document.getElementById("menu-btn");
var adClass = document.getElementById("right");
element.addEventListener("click", ()=>{
    console.log("hello")
     if(adClass.classList.contains('active')){
        console.log(adClass)
        adClass.classList.add('deActive')
        adClass.classList.remove('active')
        
     }else{
         adClass.classList.add("active");
              adClass.classList.remove("deActive"); 
     }
});
// function myFunction(){
//    console.log("helo")
//     adClass.classList.add("deactive");
//     adClass.classList.remove("Active");
// }