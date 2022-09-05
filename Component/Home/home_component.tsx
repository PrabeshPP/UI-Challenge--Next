import React from 'react'
import classes from "./home_component.module.scss";

export const HomeComponent = () => {
  return (
    <div className={classes.homeBox}>
        {/* left-side of the home component */}

        <div className={classes.leftBox}>
            <div className={classes.heading}>
                    <span className={classes.span1}>Make</span>
                    <span className={classes.span2}>remote work</span>
            </div>
        </div>
        <div className={classes.rightBox}>
        </div>
    </div>
  )
}


