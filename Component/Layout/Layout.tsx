import React from 'react'
import MainNavigation from './Header/MainNavigation';
import classes from "../../styles/Layout.module.scss";

interface props{
    children:React.ReactNode
}

const Layout = ({children}:props) => {
  return (
   <div className={classes.layout}>
     <MainNavigation/>
    <div>
        {children}
    </div>
   </div>
  )
}

export default Layout;