import React, { createContext, useState } from "react";

export const ProductContext = createContext()

export const ProductProvider = ({ children }) => {

    // const urlHost = 'https://panel-control-bazar.000webhostapp.com/backend/'
    const urlHost = 'http://localhost:80/Bazar-Backend/'

    const [productList, setProductList] = useState({ 'products': [] })
    const [loadedProducts, setLoadedProducts] = useState(2)

    const callServer = async (urlFile, method, body) => {
        return await fetch(`${urlHost}${urlFile}`, { method, body })
    }

    const getProductsCategory = (categoryId, setLoading) => {
        setLoading(true)
        const urlFile = `category.php?categoryId=${categoryId}&offset=${(loadedProducts * 10) - 20}`

        callServer(urlFile, 'GET')
            .then(e => e.json())
            .then(e => {
                setProductList(e)
            })
            .finally(() => setLoading(false))

    }

    const getProductsSubcategory = (subcategoryId, setLoading) => {
        setLoading(true)
        const urlFile = `subcategories.php?subcategoryId=${subcategoryId}&offset=${(loadedProducts * 10) - 20}`

        callServer(urlFile, 'GET')
            .then(e => e.json())
            .then(e => {
                setProductList(e)
            })
            .finally(() => setLoading(false))

    }

    const detailProduct = async (id) => {
        const urlFile = `productDetail.php?id=${id}`

        return await callServer(urlFile, 'GET')
    }

    const updateViews = (id) => {
        const urlFile = `updateView.php`
        const productId = new FormData()
        productId.append('id', id)

        callServer(urlFile, 'POST', productId)
    }

    const searchProduct = async ({ code, name }) => {
        const urlFile = `searchProduct.php?name=${name}&code=${code}`
        return await  callServer(urlFile, 'GET')
    }

    return <ProductContext.Provider value={{
        getProductsCategory,
        getProductsSubcategory,
        setLoadedProducts,
        detailProduct,
        updateViews,
        searchProduct,
        loadedProducts,
        productList
    }}>
        {children}
    </ProductContext.Provider>
}