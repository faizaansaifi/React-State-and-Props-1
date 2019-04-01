import React,{Component} from 'react'
export default class Counter1 extends Component{
  render(){
      return(
        <div className="counters">
          <button onClick={this.props.inc}>+</button>
          <input type="text" value={this.props.num1}></input>
          <button onClick={this.props.dec}>-</button>
         </div>
        )
    }
}