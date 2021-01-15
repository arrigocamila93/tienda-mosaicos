const productos = [
    {
        nombre:"producto 01",
        img:"https://i.ibb.co/9nNrhhS/1.png",
        id: 1991,
        descripcion:"Mafalda",
        precio: 300,
        stock: 50
    },
    {
        nombre:"producto 02",
        img:"https://i.ibb.co/2knt9xs/7.png",
        id: 1992,
        descripcion:"Snoopy",
        precio: 300,
        stock: 51  
    },
    {
        nombre:"producto 03",
        img:"https://i.ibb.co/vZsChk4/9.png",
        id: 1993,
        descripcion:"Namaste",
        precio: 300,
        stock: 52
    }
]

export const getProducts = ()=> {
    return new Promise ((resolve) =>{
        resolve(productos)
    })
}

export const getProductById = (id)=> {
    return new Promise ((resolve) => {
        resolve(
            productos.find((producto) => producto.id === id)
        )
    })
}

