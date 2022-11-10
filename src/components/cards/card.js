import React, { useContext } from 'react'
import styles from './card.module.scss';
import { Context } from '../store/context';
import { Link } from 'react-router-dom';
const Card = ({ product }) => {
    const ctx = useContext(Context);
    function AddToCartHandler() {
        ctx.setItemInCartHandler(product)
    }
    return (
        <div className={styles.card}>
            <div>
                <img src={product.image} alt={product.title} className={styles.image} />
            </div>
            <div className={styles.body}>
                <div className="title">
                    <h3>{product.title}</h3>
                </div>

                <div className={styles.price}>
                    <span>{product.price}$</span>
                </div>
                <div className={styles.buttons}>
                    <button className={styles['add-to-card']} onClick={AddToCartHandler}>Add</button>
                    <Link to={`/products/${product.id}/details`} className={styles['details']}>Details</Link>
                </div>
            </div>

        </div>
    )
}

export default Card;
