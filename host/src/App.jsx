import React from 'react';
import ReactDOM from 'react-dom';
import HomeContent from './HomeContent';
import Header from './Header';
import Footer from './Footer';
import appOne from 'appOne/App';
import './index.scss';
const container = (document.createElement = appOne);
const App = () => (
  <div className='mt-10 text-3xl mx-auto max-w-6xl'>
    <Header />
    <div className='bg-red-400'>
      <div id='test'></div>
      <HomeContent />
    </div>
    <Footer />
  </div>
);
ReactDOM.render(<App />, document.getElementById('app'));
