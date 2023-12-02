let miniatures = document.getElementsByClassName("miniatures");
let zoom = (e) => {
    document.getElementById("bigPicture").setAttribute("src", e.target.getAttribute("src"));
}


for (let i = 0; i < miniatures.length; i++) {
    miniatures[i].addEventListener("click", zoom)    
}