



import { useContext, createContext, useEffect, useState } from "react";

const CartContext = createContext({});

export const CartProvider = ({ children }) => {
    const [cartProducts, setCartProducts] = useState([]);

    const putProductInCart = (product) => {
        const cartIndex = cartProducts.findIndex((prd) => prd.id === product.id);

        let newProductsINCart = [];
        if (cartIndex >= 0) {
            newProductsINCart = cartProducts;

            newProductsINCart[cartIndex].quantity = newProductsINCart[cartIndex].quantity + 1;
            setCartProducts(newProductsINCart);
        } else {
            product.quantity = 1;
            newProductsINCart = [...cartProducts, product];
            setCartProducts(newProductsINCart);
        }
        updateLocalStorage(newProductsINCart);
    };

    const clearCart = () => {
       setCartProducts([]);

       updateLocalStorage([])
    };

    const deleteProduct = (productID) => {
        const newCart = cartProducts.filter((prd) => prd.id !== productID);
        setCartProducts(newCart);
        updateLocalStorage(newCart);
    };

    const increseProduct = (productID) => {
        const newCart = cartProducts.map((prd) => {
            return prd.id === productID ? { ...prd, quantity: prd.quantity + 1 } : prd;
        });

        setCartProducts(newCart);
        updateLocalStorage(newCart);
    };

    const decreseProduct = (productID) => {
        const cartIndex = cartProducts.findIndex((prd) => prd.id === productID);

        if (cartProducts[cartIndex]?.quantity > 1) {
            const newCart = cartProducts.map((prd) => {
                return prd.id === productID ? { ...prd, quantity: prd.quantity - 1 } : prd;
            });

            setCartProducts(newCart);
            updateLocalStorage(newCart);
        } else {
            deleteProduct(productID);
        }
    };

    const updateLocalStorage = (products) => {
        localStorage.setItem('devburger:cartInfo', JSON.stringify(products));
    };

    useEffect(() => {
        const loaCartData = localStorage.getItem('devburger:cartInfo');
        if(loaCartData){
            setCartProducts(JSON.parse(loaCartData))
        }
    }, []);

    return (
        <CartContext.Provider
            value={{
                cartProducts,
                putProductInCart,
                clearCart,
                deleteProduct,
                increseProduct,
                decreseProduct,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}; 

export const useCart = () => {
    const context = useContext(CartContext);

    if (!context) {
        throw new Error('useCart must be used with a context');
    }

    return context;
};