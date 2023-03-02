import React from 'react';
import "./Card.css";

const Card = (props) => {
  return (
    <div className="card">
      <div className="group1">
        <img src={props.logo} alt="pic1" />
        <div className="group2">
          <div className="group2-group">
            <p className="company">{props.company}</p>
            {props.new && (<button className="btn1"> NEW!</button>)}
            {props.featured && (<button className="btn2"> FEATURED </button>)}
          </div>
          <p className="title">{props.position}</p>
          <p className="sub-items">{props.postedAt} <span> . {props.contract}</span> <span> . {props.location}</span></p>
        </div>
      </div>
      
      <hr style={{width: "100%"}}/>
      
      <div className="categories">
          <button>{props.role}</button>
          <button>{props.level}</button>

          {props.languages.map((language, index) => (
            <button key={index}>{language}</button>
          ))}
        
          {props.tools.map((tools, index) => (
            <button key={index}>{tools}</button>
          ))}
        
      </div>
    </div>
  )
}

export default Card;