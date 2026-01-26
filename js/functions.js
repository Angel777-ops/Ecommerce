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
//button[0].innerText = "buy";

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

const product = document.querySelector(".mouse");
product.addEventListener("mouseenter", () => {
    product.style.opacity = ".5";
})//selecciona todos los productos
product.addEventListener("mouseleave", () => {
    product.style.opacity = "1";
})//selecciona todos los productos



//------menu lateral 
const menuIcon = header.firstElementChild; //selecciona el primer elemento hijo del header (icono de menu)
const menu = document.querySelector(".menu"); //selecciona el menu

menuIcon.addEventListener("click", ()=>{ //cuando se de click en menuIcon
menu.classList.toggle("showLeft"); //al dar click en el icono del menu, se agrega o se quita la clase show que hace visible el menu
})
const close = document.querySelector(".close"); //selecciona el icono de cerrar menu
close.addEventListener("click", ()=>{ //cuando se de click en close
menu.classList.toggle("showLeft"); //al dar click en el icono de cerrar menu, se quita la clase showLeft que hace visible el menu
})
//----------------------------------------------------------------

const closeCart = document.querySelector(".closeCart"); 
closeCart.addEventListener("click", ()=>{ 
cart.classList.toggle("show"); 
})


//-----------------------------------------------------------------




//------agregar productos al carrito y calcular total
//---------------------------------------------------------------------


const productos = [
    { id: 1, nombre: "Adidas LG2 hombre", precio: 2300, imagen: "img/adidas lg22.jpg"},
    { id: 2, nombre: "Chamarra adidas spezial hombre", precio: 2000, imagen: "img/chamarra adidas2.jpg" },
    { id: 3, nombre: "Jersey mexico 2023 hombre", precio: 1000, imagen: "img/jersey mexico.jpg" },
    { id: 4, nombre: "Tachones negros hombre", precio: 1800, imagen: "img/1.jpeg" },
    { id: 5, nombre: "Playera deportiva azul hombre", precio: 850, imagen: "img/2.jpeg" },
    { id: 6, nombre: "Tachones adidas profesionales hombre", precio: 3500, imagen: "img/3.jpeg" },
    { id: 7, nombre: "Mochila mujer adidas", precio: 700, imagen: "img/4.jpeg" },
    { id: 8, nombre: "Hoodie hombre", precio: 1200, imagen: "img/5.jpeg" },
    { id: 9, nombre: "Gorra deportiva unisex", precio: 500, imagen: "img/6.jpeg" },
    { id: 10, nombre: "Tenis hombre adidas", precio: 1400, imagen: "img/7.jpeg" },
    { id: 11, nombre: "Mochila hombre adidas", precio: 700, imagen: "img/8.jpeg" },
    { id: 12, nombre: "Sueter hombre", precio: 2000, imagen: "img/9.jpeg" },


];

let carrito = [];

const listaProductosDiv = document.getElementById('productos-lista');


//______Tarjetas de los productos en la pagina____________________
productos.forEach(prod => {
    const div = document.createElement('div');
    div.classList.add('producto-card');
   
    div.innerHTML = `
        <img class="producto-imagen" src="${prod.imagen}" alt="${prod.nombre}" >
        <h3 class="productoNombre">${prod.nombre}</h3>
        <p class="precioProductos">$${prod.precio}</p>
        <button id="addToCart" class="buttonProduct" onclick="agregarAlCarrito(${prod.id})">Agregar al carrito</button>
    `;
    listaProductosDiv.appendChild(div);
    
});

//___________________________________________________________________________
//______Actualizar interfaz del carrito____________________

function actualizarInterfazCarrito() {
    const listaCarrito = document.getElementById('carrito-lista');
    const totalSpan = document.getElementById('total-precio');
    
    listaCarrito.innerHTML = ''; 
    let total = 0;

    carrito.forEach((item, index) => {
        const iconoBasura = "img/eliminar.png"; // Ruta al icono de basura
        const li = document.createElement('li');
        li.style.display = "flex";
        li.style.alignItems = "center";
        li.style.marginBottom = "10px";
        li.style.borderBottom = "1px solid #424242ff";
        li.style.justifyContent = "space-between";
          li.classList.add('producto-carrito');
        
        li.innerHTML = `
            <img src="${item.imagen}" style="width:60px; margin-right:30px; border-radius:4px;">
            <span class="carritoLetras" style="margin-right:50px;">${item.nombre}</span>
            <span class="carritoLetras">$${item.precio}</span>

            <button class="IconoBasura" onclick="eliminarDelCarrito(${index})" style="margin-left:50px;"> 
            <img src="${iconoBasura}" alt="Eliminar" style="width: 25px; height: 25px;">
            </button>
        `;
        listaCarrito.appendChild(li);
        total += item.precio;
    });

    totalSpan.textContent = total;
}

//____________________________________________________________

//_____________________agregar productos al carrito y actualizar contador_____________________
function agregarAlCarrito(id) {
    const productoEncontrado = productos.find(p => p.id === id);
    if (productoEncontrado) {
        carrito.push(productoEncontrado);
        actualizarInterfazCarrito();
    }

      
     const span = document.getElementById("span");
    
        span.innerHTML = parseInt(span.innerHTML) + 1;
    
}



//_____________________eliminar productos del carrito y actualizar contador_____________________
function eliminarDelCarrito(index) {
    carrito.splice(index, 1);
    actualizarInterfazCarrito();


     
    const span = document.getElementById("span");
    if (parseInt(span.innerHTML) > 0) {
        span.innerHTML = parseInt(span.innerHTML) - 1;
    }
}


//---------------------------------------------------------------------









 
   

   







