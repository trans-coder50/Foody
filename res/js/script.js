let biList = document.querySelector(".bi-list");
let links = document.querySelector(".links");
let nav = document.querySelector(".nav");

// menu translat
biList.addEventListener("click", function(){
    links.classList.toggle("active");
    
        if(links.classList.contains("active") == true){
        nav.style.boxShadow = "none";
    }else{
        setTimeout(function(){
            nav.style.boxShadow = "0px 1px 9px 3px rgba(0, 0, 0, 0.14)";
            nav.style.transition = "box-shadow 600ms"
        },800)
    } 
})
