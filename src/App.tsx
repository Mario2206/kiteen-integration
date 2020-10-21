import React, { useMemo, useState } from 'react';
import DynamicView from './components/dynamic-view/dynamic-view';
import "./app.css"
import AnimLogo from './components/anim-logo/anim-logo';
import EvolutionBar from './components/evolution-bar/evolution-bar';
import NavBar from './components/nav-bar/nav-bar';

import pages from "./data/pages.json"


function App() {

  const [currentIndexView, setCurrentIndexView] = useState<number>(0)
  const maxPages = useMemo(()=>pages.length - 1, [])

  function displayView () {
    return(
      <DynamicView 
          className="app--dynamic-view"
          title={pages[currentIndexView].title}
          description={pages[currentIndexView].description}
          img={require("./assets/img/" + pages[currentIndexView].imgName)}
          color={pages[currentIndexView].color}
          />
    )
  }

  const nextPage =  () => {
    setCurrentIndexView(index => index === maxPages  ? 0 : index + 1)
  }

  const backPage =  () => {
    setCurrentIndexView(index => index === 0 ? maxPages  : index - 1)
  }

  return (
    <main className="app">
      <div className="app--left-part">
          <AnimLogo value="KITEEN" className="app--logo"/>
          {
            displayView()
          }
      </div>
      <div className="app--right-part">
        <div className="app--container-nav">
            <NavBar/> 
        </div>  
        <div className="app--evolution-bar-container">
            <EvolutionBar evolution={currentIndexView / maxPages} next={nextPage} back={backPage}/>    
        </div> 
      </div>
    </main>
  );
}

export default App;
