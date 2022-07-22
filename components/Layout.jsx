import React from 'react';
import Head from 'next/head';
import NavBar from './NavBar';
import Footer from './Footer';

const Layout = ( { children } ) => {
  return (
    <div className='layout'>

      {/* <head>

        <title> Fejhallgató Shop</title>
        <meta http-equiv="x-ua-compatible" content="IE=edge" />

      </head> */}

      <header>

        <NavBar/>

        <main className='main-container'>

          {children}

        </main>

        <footer>

          <Footer/>

        </footer>

      </header>

    </div>
  )
}

export default Layout