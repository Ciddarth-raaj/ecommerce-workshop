import React from "react";

import styles from "./ProductCard.module.css"

import { Link } from "react-router-dom";

function ProductCard(props) {

    const image = props.image
    const product_name = props.product_name
    const price = props.price

    function currencyFormat(num) {
        return '₹ ' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }

    return <Link to={"/product/" + product_name.split(" ").join("-")} className={styles.linkWrapper}>
        <div className={styles.mainWrapper}>
            <img src={image} className={styles.image} />
            <p className={styles.productName}>{product_name}</p>
            <p className={styles.price}>{currencyFormat(price)}</p>

            <button className={styles.button}>Add to Cart</button>
        </div>
    </Link>
}

export default ProductCard