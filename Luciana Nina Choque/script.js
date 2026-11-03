//alert("Bienvenidos a mi pagina web")
let nombre = "Luciana Nina Choque y Sara Martinez";
let edad1 = 17;
let edad2 = 17;
let producto = "Jugo"
let precio = 100;
const IVA = 0.13;
let cantidad = 1;

let total = precio * cantidad;
console.log(total);

/**
 * condiciones
 */
let precio1 = 100;
if (precio1 > 50) {
    console.log("precio elevado");

} else {
    console.log("precio accesibles");
}

/**
 * Funciones
 */
function saludar() {
    //alert("Bienvenidos a mi pagina web y el precio es " + precio1)
}

saludar();
/**
 * Simbolos
 * suma + , resta -,
 *  multiplicacion *,
 * division /,
 */

function multipñocar() {
    let nota1 = 20;
    let nota2 = 20;
    let nota3 = 20;
    let sumatoria = nota1 + nota2 + nota3;
    let promedio = sumatoria / 3;
    //alert("Mi promedio es" + promedio)
}
multipñocar();
let boton2 = document.getElementById("btnSaludar");

boton2.addEventListener("click", function () {
    //alert("Agregar")
});


function Carritocompras() {
    let verduras = "zanahoria";
    let frutas = "pera";
    let carne = "puntas";
    let precioverduras = 12;
    let preciofrutas = 8;
    let preciocarne = 35;
    let total = (precioverduras + preciofrutas + preciocarne);
    //alert("Total Compras:" + total)
}
Carritocompras()
const boton1 = document.getElementById("btnAgregar");
boton1.addEventListener("click", function () {
    alert("Producto agregado al carrito");
});
let titulo = document.getElementById("titulonuevo")
let botonMod = document.getElementById("btnCambiar")

botonMod.addEventListener("click", function () {
    titulo.textContent = "Nuevos Productos";
})

let nombre1 = document.getElementById("nombreB");
let boton3 = document.getElementById("btnEnviarB");

boton3.addEventListener("click", function () {
    let nombreusuario = nombre1.value;
    alert("Bienvenido" + nombreusuario);
});

let nombre2 = document.getElementById("nombre");
let boton4 = document.getElementById("btnEnviar");

boton4.addEventListener("click", function(){
    if(nombre2.value == ""){
    alert("Debe Ingresar su Nombre");
}else{
    alert("Datos enviados correctamente");
}
});






