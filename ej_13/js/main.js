let ps = document.getElementsByTagName("p");

for(let i = 0; i < ps.length; i++){
    ps[i].addEventListener("click", function(){alert("Se ha clicado un parrafo")});
}

ps[3].addEventListener("click", function(){alert("El parrafo es de la segunda tabla")})
ps[4].addEventListener("click", function(){alert("El parrafo es de la segunda tabla")})