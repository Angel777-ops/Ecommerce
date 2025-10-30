//------seleccionar elementos

console.log("hello");
const title = document.getElementById("txt");
// console.log(title);
const image = document.getElementsByClassName("logo");
// console.log(image);
const tags = document.getElementsByTagName("section");
// console.log(tags);
const elem = document.querySelectorAll(".logo"); /*para seleccionar elementos css*/
// console.log(elem);


//---------crear elemento y agregar attribute

const parent = document.querySelector(".products");
const newElemem = document.createElement("section");
parent.append(newElemem);
newElemem.setAttribute("class", "new"); /*crea un nuevo elemento section con una clase llamda new*/

parent.append(newElemem);




//--------------Atributes

const logo = document.querySelector(".logo");

console.log(logo.getAttribute("src"));
console.log(logo.hasAttribute("src"));

if(logo.hasAttribute("src")){
    //alert("tiene src!")
}


//-------------css clases
const parent2 = document.querySelector(".products");
const parent3 = parent2.firstElementChild;
const price = parent3.lastElementChild;
price.classList.add("red");
//price.classList.remove("red");
price.classList.replace("red", "blue");


//--------------------modificar texto
const button = document.getElementsByTagName("button");
console.log(button[0].innerText);
button[0].innerText = "buy";

//--------modificar style
console.log(button[0].style);
//button[0].style.backgroundColor = "gray";

//------eventos
const elemButton = button[0];
elemButton.addEventListener("click", ()=>{
    elemButton.classList.toggle("toggle"); //cuando demos click en el boton se va a poner azul, y si le vovemos a dar click se va a quitar el azul

})

//---------eventos-------remover elemento del carrito

const iconRemove = document.querySelectorAll(".cart__product--delete-icon"); //seleccionar elementos que tengan la clase "cart__product--delete-icon" en este caso el icono de basura y nos da un array

iconRemove.forEach(elem =>{ //toma cada elemento del array y ejecuta una funcion
    elem.addEventListener("click", ()=>{//agregamos un controlador que responda al click
        const elemParent = elem.parentElement;//cada que hacemos click en el elemento (icono de bote de basura), este selecciona a su padre(section)
        elemParent.remove();//al seleccionarlo lo elimina
    })
})

const header  = document.querySelector(".header");//selecciona el header
const cartIcon = header.lastElementChild; //selecciona el ultimo elemento hijo del header (icono de carrito)
const cart = document.querySelector(".cart"); //selecciona el carrito

cartIcon.addEventListener("click", ()=>{ //cuando se de click en cartIcon
cart.classList.toggle("show"); //al dar click en el icono del carrito, se agrega o se quita la clase show que hace visible el carrito
})