import React from 'react'
import classes from "../../../styles/Header.module.scss";

const MainNavigation = () => {
    return (
        <div className={classes.nav}>
            <div className={classes.logoBox}>
                <h1 className={classes.logo}>Prabesh's Blog</h1>
            </div>
            <div className={classes.navBox}>
                <div>Home</div>
                <div>Recent</div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

export default MainNavigation