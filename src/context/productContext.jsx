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

    return <ProductContext.Provider value={{
        getProductsCategory,
        getProductsSubcategory,
        setLoadedProducts,
        loadedProducts,
        productList
    }}>
        {children}
    </ProductContext.Provider>
}