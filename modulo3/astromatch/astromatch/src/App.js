
import './App.css';
import React, { useState, useEffect } from "react";
import Header from './components/Header'
import Home from './components/Inicial/Home'
import Matches from './components/Matches/Matches'




function App() {

  const [page, setPage] = useState("homepage")
  const changePage = (page) => setPage(page)

  const rendPage = () => {
    switch (page) {
      case "homepage":
        return <><Header /><Home changePage={changePage} /></>

      case "Matches":
        return <><Header/><Matches  /> </>
    }
  }

  return (
    <div className='App'>
      <>{rendPage()}
      </>
      {/* <Astrocard/>
      <Footer/> */}
    </div>
  );
}


export default App;
