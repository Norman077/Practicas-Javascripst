//operador ternario
const velocidad = 120;
let mensaje;
if (velocidad > 100) {
    mensaje = "Vas muy rapido";
} else {
    mensaje = "Vas bien";
}
console.log(mensaje);


const velocidad2 = 20;
const mensaje2 = velocidad2 > 100 ? "Vas muy  rapido" : "Vas bien";
console.log(mensaje2);

//ciclo for
for (let i = 0; i < 10; i++) {
    if (i == 5) break
    console.log(i);
}

//ciclo while
let i = 0;
while (i < 10) {
    console.log(i);
    i++;
}

//numeros pares

for (let i = 0; i <= 100; i++)
    if (i % 2 == 0) {
        console.log(i);
    }

//numeros impares

for (let i = 0; i <= 100; i++)
    if (i % 2 !== 0) {
        console.log(i);
    }

//numeros primos
for (i = 2; i < 100; i++) {
    let primo = true;
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            primo = false;
        }
    }
    if (primo) {
        console.log(i);
    }
}
