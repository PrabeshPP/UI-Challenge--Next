import React from 'react'
import classes from "../../../styles/Header.module.scss";

const MainNavigation = () => {
    return (
        <div className={classes.nav}>
            <div>Prabesh's Blog</div>
            <div>
                <div>Home</div>
                <div>Recent</div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

export default MainNavigation