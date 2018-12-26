import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';


export default class User extends Component{
  constructor(props, context){
    super(props, context)

    this.state = {
      name:this.props.match.params.name
    }
  }

  componentWillReceiveProps = (nextProps) => {
    this.setState({
      name:nextProps.match.params.name
    });
  }



  render(){
    return(
      <div className="ui list">
        <ul>
          <li><Link to="/user/leon">Designer</Link></li>
          <li><Link to="/user/fred">Programmer</Link></li>
          <li><Link to="/">Index</Link></li>
        </ul>
        <h1>User: Hello {this.state.name} !!</h1>
      </div>
    )
  }
}
