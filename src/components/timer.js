import React, { Component } from 'react';


 import { Link,Redirect } from 'react-router-dom'


export default class Timer extends Component{
    constructor(props, context){
      super(props, context);
      this.state = {
        number:10
      }
    }

    componentDidMount = () =>{
      setInterval(this.tick,1000);
    }

    tick = () =>{
        if(this.state.number == 0){
          return
        }else{
          this.setState({
            number: this.state.number -1
          });
        }
    }




    render(){

      if(this.state.number == 0){
        return( <Redirect to={'/timeup'} />)
      }else{
        return(
          <div  class="ui raised segment">
            <h1>{this.state.number}</h1>
          </div>
        )
      }
    }
}
