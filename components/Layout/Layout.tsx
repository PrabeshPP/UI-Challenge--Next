import React from 'react'
import MainNavigation from './MainNavigation'

interface props{
    children:React.ReactNode
}

const Layout = ({children}:props) => {
  return (
    <div className='h-[100vh] w-[100%] bg-white'>
        <MainNavigation/>
        {children}
    </div>
  )
}

export default Layout