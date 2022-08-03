
import './App.css';
import React from 'react'
import Header from './components/Header'
import CardMatch from './components/CardMatch';



function App() {
  return (
    <div className='App'>
        <Header/>
        <CardMatch/>

        {/* <Astrocard/>
      <Footer/> */}
    </div>
  );
}

export default App;
