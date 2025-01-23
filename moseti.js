const kaite  = document.getElementById("kaite");
const chicken = document.getElementById("chicken");
const jasper = document.getElementById("jasper");




kaite.addEventListener("click", event=>{
    kaite.style.display ="none";
});



jasper.addEventListener("click",event=>{
    if(chicken.style.visibility ==="hidden"){
        chicken.style.visibility = "Visible";
        jasper.textContent = "Hide";
    }
    else{
        chicken.style.visibility = "hidden";
        jasper.textContent = "Show";
    }
});









