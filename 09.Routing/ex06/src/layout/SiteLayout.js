import React from 'react'
import Header from './Header'
import Navigation from './Navigation'
import Footer from './Footer'
import * as styles from '../assets/scss/layout/Content.scss';

const SiteLayout = ({children}) => {
  return (
    <>
        <Header />
        <div className={styles.Content}>
            {children}
        </div>
        <Navigation/>
        <Footer/>
    </>
    
  )
}

export default SiteLayout