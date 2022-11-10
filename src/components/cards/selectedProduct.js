import React, { useContext } from 'react'
import styles from './card.module.scss';
import { Context } from '../store/context';
import { Link } from 'react-router-dom';

const SelectedProduct = ({ product }) => {
    const ctx = useContext(Context);
    function removeFromCartHandler() {
        ctx.removeItemFromCartHandler(product)
    }
    return (
        <div className={`${styles["selected-card"]} ${styles.card}`}>
            <div>
                <img src={product.image} alt={product.title} className={styles.image} />
            </div>
            <div className={styles.body}>
                <div className="title">
                    <h3>{product.title}</h3>
                </div>

                <div className={styles.info}>
                    <span> count: {product.count}</span>
                    <span>{product.price * product.count}$</span>
                </div>
                <div className={styles.buttons}>
                    <button className={styles['remove']} onClick={removeFromCartHandler}>Remove</button>
                    <Link to={`/products/${product.id}/details`} className={styles['details']}>Details</Link>
                </div>
            </div>

        </div>
    )
}

export default SelectedProduct;
