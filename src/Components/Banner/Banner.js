import React from "react";

import styles from "./Banner.module.css"

import { Slide, Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

function Banner() {
    return <div>
        <Zoom scale={0.4} transitionDuration={500} Easing={"cubic-out"}>
            <img
                src="https://png.pngtree.com/thumb_back/fh260/back_pic/00/02/44/5056179b42b174f.jpg"
                className={styles.bannerImg} />

            <img
                src="https://www.aashe.org/wp-content/uploads/2018/02/Placeholder-Banner.png"
                className={styles.bannerImg} />

            <img
                src="https://i.pinimg.com/originals/0b/a3/d6/0ba3d60362c7e6d256cfc1f37156bad9.jpg"
                className={styles.bannerImg} />
        </Zoom>
    </div>
}

export default Banner