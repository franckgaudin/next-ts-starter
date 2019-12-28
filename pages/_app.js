import React from 'react';
import App from 'next/app';
import { Tina, TinaCMS } from 'tinacms';
// import the git client
import { GitClient } from '@tinacms/git-client';

class MyApp extends App {
  constructor() {
    super();
    // initialize the cms
    this.cms = new TinaCMS();
    // create the client
    const client = new GitClient('http://localhost:3000/___tina');
    // register client with the cms
    this.cms.registerApi('git', client);
  }

  render() {
    const { Component, pageProps } = this.props;
    // Wrap the page with Tina, provide the cms
    return (
      <Tina cms={this.cms}>
        <Component {...pageProps} />
      </Tina>
    );
  }
}

export default MyApp;
