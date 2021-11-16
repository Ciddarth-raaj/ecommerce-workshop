import React from "react";

import Header from "../Components/Header/Header";
import Banner from "../Components/Banner/Banner";

import ProductCard from "../Components/ProductCard/ProductCard";

function Home() {
    return (
        <div>
            <Header />

            <Banner />

            <div className={"productWrapper"}>
                <ProductCard product_name={"iPhone 13 | Blue | 128 GB | Unlocked"} price={69999} image={"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-pro-family-hero?wid=940&hei=1112&fmt=png-alpha&.v=1631220221000"} />
                <ProductCard product_name={"iPhone 13 | Gold | 128 GB | Unlocked"} price={69999} image={"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-pro-family-hero?wid=940&hei=1112&fmt=png-alpha&.v=1631220221000"} />
                <ProductCard product_name={"iPhone 13 | Gold | 128 GB | Unlocked"} price={69999} image={"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-pro-family-hero?wid=940&hei=1112&fmt=png-alpha&.v=1631220221000"} />
                <ProductCard product_name={"iPhone 13 | Gold | 128 GB | Unlocked"} price={69999} image={"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-pro-family-hero?wid=940&hei=1112&fmt=png-alpha&.v=1631220221000"} />
                <ProductCard product_name={"iPhone 13 | Gold | 128 GB | Unlocked"} price={69999} image={"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-pro-family-hero?wid=940&hei=1112&fmt=png-alpha&.v=1631220221000"} />
                <ProductCard product_name={"iPhone 13 | Gold | 128 GB | Unlocked"} price={69999} image={"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-pro-family-hero?wid=940&hei=1112&fmt=png-alpha&.v=1631220221000"} />
                <ProductCard product_name={"iPhone 13 | Gold | 128 GB | Unlocked"} price={69999} image={"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-pro-family-hero?wid=940&hei=1112&fmt=png-alpha&.v=1631220221000"} />
                <ProductCard product_name={"iPhone 13 | Gold | 128 GB | Unlocked"} price={69999} image={"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-pro-family-hero?wid=940&hei=1112&fmt=png-alpha&.v=1631220221000"} />
                <ProductCard product_name={"iPhone 13 | Gold | 128 GB | Unlocked"} price={69999} image={"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-pro-family-hero?wid=940&hei=1112&fmt=png-alpha&.v=1631220221000"} />
            </div>

        </div>
    );
}

export default Home