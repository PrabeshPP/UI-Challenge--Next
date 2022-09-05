import React from 'react'
import classes from "../../../styles/Header.module.scss";

const MainNavigation = () => {
    return (
        <div className={classes.nav}>
            <div className={classes.logoBox}>
                <div className={classes.logo}>
                    <span className={classes.logo}>snap</span>
                </div>
                    <div className={classes.navBox}>
                    <div>Features</div>
                    <div>Company</div>
                    <div>Careers</div>
                    <div>About</div>
                </div>
            </div>

            <div className={classes.loginContainer}>
                <div className={classes.loginBox}>
                    <span>Login</span>
                </div>
                <div className={classes.registerBox}>
                        Register
                </div>
            </div>
            
        </div>
    )
}

export default MainNavigation