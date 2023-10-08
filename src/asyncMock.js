const products = [
    {
        id: '1',
        name: 'Artesenal',
        price: 200,
        category: '1',
        stock: 20,
        img: 'Artesanal.jpg'
    },

    {
        id: '2',
        name: 'Baguette',
        price: 230,
        category: '1',
        stock: 18,
        img: 'Baguette.jpg'
    },

    {
        id: '3',
        name: 'Molde',
        price: 220,
        category: '1',
        stock: 25,
        img: 'Molde.jpg'
    },

    {
        id: '4',
        name: 'Alfajores',
        price: 90,
        category: '2',
        stock: 40,
        img: 'alfajores.jpg'
    },

    {
        id: '5',
        name: 'Brownis',
        price: 120,
        category: '2',
        stock: 20,
        img: 'brownis.jpg'
    },

    {
        id: '6',
        name: 'Muffins',
        price: 200,
        category: '2',
        stock: 20,
        img: 'Muffins.jpg'
    }


]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 1000)
    })
}

export const getProductsById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 1000);
    })
}

export const getProductsByCaterogy = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const produtscategory = products.filter(prod => prod.category === categoryId)
            resolve(produtscategory)
        }, 1000)
    })
}






