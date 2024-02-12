import React from 'react';
import Hero from '../components/Hero/Hero';
import Popular from '../components/Popular/Popular';
import Ofertas from '../components/Ofertas/Ofertas';
import NewCollections from '../components/NewCollections/NewCollections';
import NewsLetter from '../components/NewsLetter/NewsLetter';

const Home = () => {
  return (
    <div>
      <Hero/>
      <Popular />
      <Ofertas />
      <NewCollections />
      <NewsLetter />
    </div>
  )
}

export default Home