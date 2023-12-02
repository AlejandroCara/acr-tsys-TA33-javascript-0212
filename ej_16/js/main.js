let date = new Date();
let refresh = () => {
    date = new Date();
    if(date.getHours() < 10){
        document.getElementById("hours").innerHTML = "0"+date.getHours();
    } else {  
        document.getElementById("hours").innerHTML = date.getHours();
    }

    if(date.getMinutes() < 10){
        document.getElementById("minutes").innerHTML = "0"+date.getMinutes();
    } else {  
        document.getElementById("minutes").innerHTML = date.getMinutes();
    }

    if(date.getSeconds() < 10){
        document.getElementById("secconds").innerHTML = "0"+date.getSeconds();
    } else {  
        document.getElementById("secconds").innerHTML = date.getSeconds();
    }
}
refresh();
window.setInterval(function(){
    refresh();
  }, 1000);