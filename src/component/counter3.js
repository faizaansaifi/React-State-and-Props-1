import React,{Component} from 'react'
export default class Counter3 extends Component{
  render(){
        return(
        <div className="counters">
          <button onClick={this.props.inc}>+</button>
          <input type="text" value={this.props.num3}></input>
          <button onClick={this.props.dec}>-</button>
         </div>
        )
    }
}