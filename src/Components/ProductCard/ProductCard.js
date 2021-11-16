import React from "react";

import styles from "./ProductCard.module.css"

function ProductCard() {

    const image = "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-pro-family-hero?wid=940&hei=1112&fmt=png-alpha&.v=1631220221000"
    const product_name = "iPhone 13"
    const price = 60000

    return <div>
        <img src={image} />
        <p>{product_name}</p>
        <p>{price}</p>

        <button>Add to Cart</button>
    </div>
}

export default ProductCard