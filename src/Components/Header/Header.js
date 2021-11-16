import React from "react"

import styles from "./Header.module.css"

function Header() {
    return <div className={styles.headerWrapper}>
        <div className={styles.logo}>
            <h3>Ecommerce</h3>
            <h3 className={styles.storeText}>Store</h3>
        </div>

        <input placeholder="Search" className={styles.searchBar} />

        <div>
            <button className={`${styles.button} ${styles.signup}`}>Sign In</button>
            <button className={styles.button}>Login</button>
        </div>
    </div>
}

export default Header