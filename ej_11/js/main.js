let apariciones = [];
let dice1;
let dice2;
let result;
let max = 6;
let min = 1;
let aparece = false;

for(let i = 0; i < 36000; i++){
    dice1 = Math.floor(Math.random() * (max - min + 1) + min);
    dice2 = Math.floor(Math.random() * (max - min + 1) + min);
    
    result = dice1 + dice2;

    apariciones.forEach(aparicion => {
        if(aparicion[0] == result){
            aparicion[1]+=1;
            aparece = true;
        }
    });

    if(!aparece){
        apariciones.push([result, 1]);
    }

    aparece = false;
}

console.log(apariciones);