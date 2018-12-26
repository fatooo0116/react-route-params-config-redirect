import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Index extends Component{
  constructor(props, context){
    super(props, context)
  }

  render(){
    return(
      <div className="ui list">
        <ul>
          <li><Link to="/user/leon">Designer</Link></li>
          <li><Link to="/user/fred">Programmer</Link></li>
        </ul>
        <h1>Index</h1>
      </div>

    )
  }
}
