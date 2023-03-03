import React from 'react';
import "./Card.css";

const Card = (props) => {
  return (
    <div className="card">
      <div className="group1">
        <img src={props.data.logo} alt="pic1" />
        <div className="group2">
          <div className="group2-group">
            <p className="company">{props.data.company}</p>
            {props.new && <button className="btn1"> NEW!</button>}
            {props.featured && <button className="btn2"> FEATURED </button>}
          </div>
          <p className="title">{props.data.position}</p>
          <p className="sub-items">{props.data.postedAt} <span> . {props.data.contract}</span> <span> . {props.data.location}</span></p>
        </div>
      </div>
      
      <hr style={{width: "100%"}}/>
      
      <div className="categories">
          <button>{props.data.role}</button>
          <button>{props.data.level}</button>

          {props.data.languages.map((language, index) => (
            <button key={index}>{language}</button>
          ))}
        
          {props.data.tools.map((tools, index) => (
            <button key={index}>{tools}</button>
          ))}
        
      </div>
    </div>
  )
}

export default Card;