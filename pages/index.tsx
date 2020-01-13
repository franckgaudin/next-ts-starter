import React from 'react';
import Head from 'next/head';

import './index.scss';

const Home = (): object => (
  <div>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    Welcome !
  </div>
);

export default Home;
