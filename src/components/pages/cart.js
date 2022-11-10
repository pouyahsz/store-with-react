import React, { useContext } from 'react';
import SelectedProduct from '../cards/selectedProduct';
import { Context } from '../store/context';
import styles from '../cards/card.module.scss';

export const Cart = () => {
    const ctx = useContext(Context);
    const selectedProducts = ctx.ItemsInCart.map((product) => {
        return (
            <SelectedProduct product={product} />
        )

    })
    return (
        <div className={styles["products-in-basket"]}>
            {selectedProducts}
            {selectedProducts.length === 0 ? <div className={styles['message-container']}><p className={styles["empty-cart-message"]}>Your cart is empty</p></div> : null}
        </div>
    )
}
