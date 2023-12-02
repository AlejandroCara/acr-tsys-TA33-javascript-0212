let text = "hola m undo 10/12/2023";
let result = text.match(/\d{1,2}\/\d{1,2}\/\d{2,4}/gm);

console.log("En el texto " + text)

if (result != null) {
    console.log("La fecha está bien");
} else {
    console.log("La fecha no es correcta");
}


text = "hola m undo 1012/2023"
result = text.match(/\d{1,2}\/\d{1,2}\/\d{2,4}/gm);

console.log("En el texto " + text)

if (result != null) {
    console.log("La fecha está bien");
} else {
    console.log("La fecha no es correcta");
}

console.log("\n\n\n\n\n")


text = "alejandro.carahol@gmail.com"
result = text.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

console.log("En el texto " + text)

if (result != null) {
    console.log("El correo es correcto");
} else {
    console.log("El correo no es correcto");
}

text = "alejandro.caraholgmail.com"
result = text.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

console.log("En el texto " + text)

if (result != null) {
    console.log("El correo es correcto");
} else {
    console.log("El correo no es correcto");
}


console.log("\n\n\n\n\n")


text = "alejandro.carahol@gmail.com"
result = text.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

console.log("En el texto " + text)

if (result != null) {
    console.log("El correo es correcto");
} else {
    console.log("El correo no es correcto");
}