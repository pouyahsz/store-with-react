import React from 'react'
import Card from '../cards/card';
import styles from '../cards/card.module.scss';
import spinnerStyles from '../loader/spinner.module.scss';
import Spinner from '../loader/spinner';
const Products = ({ products, loading }) => {
    return (
        <div className={styles.products}>
            {
                loading && <div className={spinnerStyles["loading-container"]}>
                    <Spinner />
                </div>
            }
            {products.map((product) => <Card product={product} key={product.id} />)}
        </div>
    )
}

export default Products;
