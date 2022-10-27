const c1 = 15;
const c2 = 3;

function arrayDivisori(c1){
    let arrayD = [];
    for (let index = 0; index <= c1; index++) {
        if (c1 % index == 0) {
            arrayD.push(index);
        } 
    }
    return arrayD;
    
}

function Divisore(arrayD, c2){
    if (arrayD.includes(c2)) {
        console.log("Divisore");
    } else {
        console.log("Non Divisore")
    }
}

arrayD = arrayDivisori(c1);
console.log(arrayD);
Divisore(arrayD, c2);

