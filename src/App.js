import React from "react";
import { Card } from "./components";
import "./App.css";
import Datas from "./data";


const App = () => {
  const dataElements = Datas.map(data => {
    return <Card  
      company={data.company} 
      logo={data.logo} 
      new={data.new} 
      featured={data.featured} 
      position={data.position} 
      role={data.role} 
      level={data.level} 
      postedAt={data.postedAt} 
      contract={data.contract} 
      location={data.location} 
      languages={data.languages} 
      tools={data.tools} 
      />
  })

  return (
    <div className="app">
      {dataElements}

    </div>
  )
}

export default App;
