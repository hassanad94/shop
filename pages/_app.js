import React from 'react';
import {Toaster} from 'react-hot-toast';
import { Layout } from '../components';
import '../styles/globals.css'

import { StateContext } from '../context/StateContext';

function MyApp({ Component, pageProps }) {
  return( 
    // state contextet az import csináltam, és azért van itt minden felül, hogy bárhol tudjam használni ezeket az értékeket
    <StateContext>
      <Layout>
        <Toaster/>
        <Component {...pageProps} /> 
      </Layout>
    </StateContext>
  ) //Currenct page we are at
}

export default MyApp
