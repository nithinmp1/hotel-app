import React from 'react';
import { Footer, Header, Hotel  } from './containers';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  return (
    <div className='App'>
      <Header />
      <Hotel />
      <Footer />
    </div>
  )
}

export default App