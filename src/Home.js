import React from 'react';
import Social from './Social';
import './Home.css';
import Data from './Data';

function Home() {
  return (
    <div>
      <section className="home section" id="home">
        <div className="home__container container grid">
            <div className="home__content grid">
                <Social />

                <div className="home__img"></div>

                <Data />
            </div>
        </div>
      </section>
    </div>
  )
}

export default Home
