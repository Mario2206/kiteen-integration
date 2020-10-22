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
      pages.map((page,index)=> (
          <DynamicView 
            key={index}
            className="app--dynamic-view"
            title={page.title}
            description={page.description}
            img={require("./assets/img/" + page.imgName)}
            color={page.color}
            visible={index === currentIndexView}
            />
    ))
      
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
          <AnimLogo value="KITTEN" className="app--logo"/>
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
