// PRODUCTS
const products = [
    // Rings
    {
        id: "ring-01",
        title: "Ring 01",
        image: "./img/rings/01.webp",
        category: {
            name: "Rings",
            id: "rings"
        },
        price: 1000
    },
    {
        id: "ring-02",
        title: "Ring 02",
        image: "./img/rings/02.webp",
        category: {
            name: "Rings",
            id: "rings"
        },
        price: 1000
    },
    {
        id: "ring-03",
        title: "Ring 03",
        image: "./img/rings/03.webp",
        category: {
            name: "Rings",
            id: "rings"
        },
        price: 1000
    },
    {
        id: "ring-04",
        title: "Ring 04",
        image: "./img/rings/04.webp",
        category: {
            name: "Rings",
            id: "rings"
        },
        price: 1000
    },
    {
        id: "ring-05",
        title: "Ring 05",
        image: "./img/rings/05.webp",
        category: {
            name: "Rings",
            id: "rings"
        },
        price: 1000
    },
    // Necklaces 
    {
        id: "necklace-01",
        title: "Necklace 01",
        image: "./img/necklaces/01.webp",
        category: {
            name: "Necklaces",
            id: "necklaces"
        },
        price: 1000
    },
    {
        id: "necklace-02",
        title: "Necklace 02",
        image: "./img/necklaces/02.webp",
        category: {
            name: "Necklaces",
            id: "necklaces"
        },
        price: 1000
    },
    {
        id: "necklace-03",
        title: "Necklace 03",
        image: "./img/necklaces/03.webp",
        category: {
            name: "Necklaces",
            id: "necklaces"
        },
        price: 1000
    },
    {
        id: "necklace-04",
        title: "Necklace 04",
        image: "./img/necklaces/04.webp",
        category: {
            name: "Necklaces",
            id: "necklaces"
        },
        price: 1000
    },
    {
        id: "necklace-05",
        title: "Necklace 05",
        image: "./img/necklaces/05.webp",
        category: {
            name: "Necklaces",
            id: "necklaces"
        },
        price: 1000
    },
    // {
    //     id: "necklace-06",
    //     title: "Necklace 06",
    //     image: "./img/necklaces/06.webp",
    //     category: {
    //         name: "Necklaces",
    //         id: "necklaces"
    //     },
    //     price: 1000
    // },
    // {
    //     id: "necklace-07",
    //     title: "Necklace 07",
    //     image: "./img/necklaces/07.webp",
    //     category: {
    //         name: "Necklaces",
    //         id: "necklaces"
    //     },
    //     price: 1000
    // },
    // {
    //     id: "necklace-08",
    //     title: "Necklace 08",
    //     image: "./img/necklaces/08.webp",
    //     category: {
    //         name: "Necklaces",
    //         id: "necklaces"
    //     },
    //     price: 1000
    // },
    // Earings
    {
        id: "earing-01",
        title: "Earing 01",
        image: "./img/earings/01.webp",
        category: {
            name: "Earings",
            id: "earings"
        },
        price: 1000
    },
    {
        id: "earing-02",
        title: "Earing 02",
        image: "./img/earings/02.webp",
        category: {
            name: "Earings",
            id: "earings"
        },
        price: 1000
    },
    {
        id: "earing-03",
        title: "Earing 03",
        image: "./img/earings/03.webp",
        category: {
            name: "Earings",
            id: "earings"
        },
        price: 1000
    },
    {
        id: "earing-04",
        title: "Earing 04",
        image: "./img/earings/04.webp",
        category: {
            name: "Earings",
            id: "earings"
        },
        price: 1000
    },
    {
        id: "earing-05",
        title: "Earing 05",
        image: "./img/earings/05.webp",
        category: {
            name: "Earings",
            id: "earings"
        },
        price: 1000
    }
];

const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");  
const tituloPrincipal= document.querySelector("#titulo-principal");
let botonesAgregar= document.querySelectorAll(".producto-agregar");

function cargarProductos(productosElegidos) {
    contenedorProductos.innerHTML=""
    productosElegidos.forEach((product) => {
        const div= document.createElement("div");
        div.classList.add("producto");
        div.innerHTML= `
            <img class="producto-imagen" src="${product.image}" alt="${product.title}">
            <div class="producto-detalles">
                <h3 class="producto-titulo">${product.title}</h3>
                <p class="producto-precio">$${product.price}</p>
                <button class="producto-agregar" id="${product.id}">Add</button>
            </div>
        `;
    
    contenedorProductos.append(div)
    })


    actualizarBotonesAgregar()
} 


cargarProductos(products); 

botonesCategorias.forEach(boton =>{
    boton.addEventListener("click", (e) => {

        botonesCategorias.forEach(boton => {
            boton.classList.remove("active")
        })
        e.currentTarget.classList.add("active")
        if(e.currentTarget.id==="todos") {
            cargarProductos(products)
            tituloPrincipal.innerText="All Products"
            
        } else {
            const productosElegidos= products.filter(product => product.category.id===e.currentTarget.id)
            cargarProductos(productosElegidos)
            tituloPrincipal.innerText=productosElegidos[0].category.name
        }

        
    })
})

function actualizarBotonesAgregar() {
    botonesAgregar=document.querySelectorAll(".producto-agregar")

}









