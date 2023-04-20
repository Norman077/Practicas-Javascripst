const a= true && true;
const b= true && false;
const c= false && true;
const d= false && (3==4);
const e= "cat" && false;

const a1= |true;
const b1= |false;


const tiempo=14;
let saludo;
if (tiempo<12) {
    saludo = "Buenos dias mi amur!!";
} else if (tiempo >12 && tiempo <19) {
    saludo = "Buenas tardes wey";
} else if (tiempo >19 && tiempo <24){
    saludo = "Buenas noches hermos@ ;v";
}

console.log(saludo);

if (tiempo<25) {
    saludo="error de programa we :v - No existe eso mma webo xdddd"
} else if (tiempo>25 && tiempo<26){
    saludo="error falal - pipipipipi"
}

//Swich

const dia = 0 ;
let texto;
switch (dia) {
    case 0:
    texto="Domingo";
    break;
    case 1:
        texto = "Lunes";
        break;
    case 2:
    texto="Martes";
    break;
        case 3:
        texto = "Miercoles";
        break;
    case 4:
    texto="Jueves";
    break;
        case 5:
        texto = "Viernes";
        break;
    case 6:
    texto="Sabado";
    break;
        default:
        texto = "No hay mas dias :v";
}

console.log(texto);