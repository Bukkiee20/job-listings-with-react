import React from "react";
import { Card } from "./components";
import "./App.css";
import Datas from "./data";


const App = () => {
  const dataElements = Datas.map(data => {
    return <Card  
      key= {data.id}
      data={data} 
      />
  })

  return (
    <div className="app">
      {dataElements}

    </div>
  )
}

export default App;
