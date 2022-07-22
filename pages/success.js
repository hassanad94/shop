import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { BsBagCheckFill } from 'react-icons/bs';

import { useStateContext } from '../context/StateContext';
import { runFireworks } from '../lib/utils';

const Success = () => {
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();
  
  useEffect(() => {
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
    runFireworks();
  }, []);// Ha az üres a akkor az on load-t jelenti. HA betölti ezt az oldal-t azonnal töröl mindent.

  return (
    <div className="success-wrapper">
      <div className="success">
        <p className="icon">
          <BsBagCheckFill />
        </p>
        <h2>Köszönjük a vásárlásod</h2>
        <p className="email-msg">Elküldtük a vissza igaziló email-t. ( akár 5 percbe is telhet mire megérkezik )</p>
        <p className="description">
          További kérdésekért
          <a className="email" href="mailto:fp.hassanad94@gmail.com">
            fp.hassanad94@gmail.com
          </a>
        </p>
        <Link href="/">
          <button type="button" width="300px" className="btn">
           Folytatom a vásárlást.
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Success