import { createContext, useState } from "react";




export const Context = createContext(
    { ItemsInCart: [], setItemInCartHandler: (product) => { } }
)



const ContextProvider = ({ children }) => {
    const [itemsInCart, setItemInCart] = useState([]);
    const [counter, setCounter] = useState(0);
    const setItemInCartHandler = (product) => {
        const searchResult = itemsInCart.find((item) => {
            return item.id === product.id;
        })
        let newItemsInCart = [];
        if (searchResult) {
            newItemsInCart = itemsInCart.map((item) => {
                if (item.id === product.id) {
                    item.count++;
                    return item;
                }
                else {
                    return item;
                }
            })
        } else {
            newItemsInCart = [...itemsInCart, product]
        }
        setCounter((prevState) => ++prevState);
        setItemInCart(newItemsInCart);

    }
    const removeItemFromCartHandler = (product) => {
        let newItemsInCart = [];
        const selectedItem = itemsInCart.find((item) => {
            return product.id === item.id;
        })
        if (selectedItem.count === 1) {
            newItemsInCart = itemsInCart.filter((item) => {
                return product.id !== item.id;
            })
        } else {
            newItemsInCart = itemsInCart.map((item) => {
                if (product.id === item.id) {
                    item.count--;
                    return item;
                } else {
                    return item;
                }
            })
        }
        setCounter((prevState) => --prevState);
        setItemInCart(newItemsInCart);

    }
    console.log(itemsInCart)
    return (
        <Context.Provider value={{ ItemsInCart: itemsInCart, setItemInCartHandler: setItemInCartHandler, removeItemFromCartHandler: removeItemFromCartHandler, count: counter }}>
            {children}
        </Context.Provider>
    )
}

export default ContextProvider;