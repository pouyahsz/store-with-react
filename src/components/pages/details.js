import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from '../cards/card.module.scss';
import { Context } from '../store/context';
import spinnerStyles from '../loader/spinner.module.scss';
import Spinner from '../loader/spinner';
const Details = () => {
    const [product, setProduct] = useState({ image: "", title: "", description: "", price: "" })
    const { id } = useParams()
    const ctx = useContext(Context);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        async function fetchDetails() {
            setIsLoading(true);
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            const data = await response.json();
            data.count = 1;
            setProduct(data);
            setIsLoading(false);

        }
        fetchDetails();
    }, [id])
    const addToCardHandler = () => {
        ctx.setItemInCartHandler(product)
    }
    return (
        <div className={styles["details-container"]}>
            {
                isLoading ? <div className={spinnerStyles["loading-container"]}>
                    <Spinner />
                </div> : <> <div className={styles.image}>
                    <img src={product.image} alt={product.title} />
                </div>
                    <div className={styles.content}>
                        <div className="title">
                            <h2>{product.title}</h2>
                        </div>
                        <div className="description">
                            <p>{product.description}</p>
                        </div>
                        <div className="price">
                            <span>{product.price} $ </span>
                        </div>
                        <div className="button">
                            <button onClick={addToCardHandler}>add to cart</button>
                        </div>
                    </div></>}
        </div>

    )
}

export default Details;
