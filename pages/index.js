import React from 'react';
import { client } from '../lib/client';// in react useEffect to fatch data
import { Product, FooterBanner, HeroBanner } from '../components' ;
import banner from '../sanity_ecommerce/schemas/banner';

//serverSide Renderből jönnek a bemenők
const Home = ( {products, bannerData} ) => {

  return (
    <>
      <HeroBanner heroBanner={bannerData && bannerData[0] }/>

      <div className='products-heading'>

        <h2>Legkeresettebb Termékek</h2>
        <p>Rentgeteg formában megtalálható.</p>

        <div className='products-container'>
          {/* ?= check if not null */}
          {products?.map( (product) =>
           <Product key={product._id} product={product}/>
            )}


        </div>

      </div>

                                  {/* if banner data exists */}
      <FooterBanner footerBanner={ bannerData && bannerData[0] }/>
    </>
  )
}
//next js specific, fatching data... Betölti az adatokot a Dombba, gets populated into to a fuunction. máshol fogom tudni hasznáni
export const getServerSideProps = async() =>{

  //all products from sanity dashbor (sanitiy specific)
  const query = '*[_type == "product"]';
  const products =  await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData =  await client.fetch(bannerQuery);

  return {
    props: { products, bannerData }
  }

}

export default Home