import React from "react";
import Header from "../Components/Header/Header";

import styles from "../Styles/Product.module.css"

import { useParams } from "react-router-dom";

function Product(props) {
    let params = useParams();

    const product_image = "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-pro-family-hero?wid=940&hei=1112&fmt=png-alpha&.v=1631220221000"
    const product_name = params.name.split("-").join(" ")
    const price = 69999
    const category = "Electronics | Mobile Phones | Apple"
    const description = `15 cm (6.1-inch) Super Retina XDR display
    Cinematic mode adds shallow depth of field and shifts focus automatically in your videos
    Advanced dual-camera system with 12MP Wide and Ultra Wide cameras; Photographic Styles, Smart HDR 4, Night mode, 4K Dolby Vision HDR recording
    12MP TrueDepth front camera with Night mode, 4K Dolby Vision HDR recording
    A15 Bionic chip for lightning-fast performance
    Up to 19 hours of video playback
    Durable design with Ceramic Shield`

    function currencyFormat(num) {
        return '₹ ' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }

    return <div>
        <Header />

        <div className={styles.parentContainer}>

            <div>
                <img src={product_image} className={styles.mainImage} />
            </div>

            <div>
                <h1 className={styles.product_name}>{product_name}</h1>
                <p className={styles.category_name}>{category}</p>
                <p className={styles.price}>{currencyFormat(price)}</p>

                <button className={styles.button}>Buy Now</button>
            </div>

        </div>

        <div className={styles.descriptionWrapper}>
            <p className={styles.heading}>Description</p>

            <p>{description}</p>
        </div>

    </div>
}

export default Product