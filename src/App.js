import React, { Component } from 'react';
import './App.css';

import Counter1 from './component/counter1';
import Counter2 from './component/counter2';
import Counter3 from './component/counter3';

class App extends Component {
    constructor(props){
        super(props);
    }
    state={
        counter1:0,
        counter2:0,
        counter3:0
    }

    incCounter1=()=>{
        this.setState({
            counter1:this.state.counter1+1,

        })
    }

    decCounter1=(num)=>{
        this.setState({
            counter1:this.state.counter1-1,
        })
    }

    incCounter2=()=>{
        this.setState({
            counter2:this.state.counter2+1,

        })
    }

    decCounter2=(num)=>{
        this.setState({
            counter2:this.state.counter2-1,
        })
    }

    incCounter3=()=>{
        this.setState({
            counter3:this.state.counter3+1,

        })
    }

    decCounter3=(num)=>{
        this.setState({
            counter3:this.state.counter3-1,
        })
    }

    incAll=()=>{
        this.setState({
            counter1:this.state.counter1+1,
            counter2:this.state.counter2+1,
            counter3:this.state.counter3+1,
        })
    }

    decAll=()=>{
        this.setState({
            counter1:this.state.counter1-1,
            counter2:this.state.counter2-1,
            counter3:this.state.counter3-1,
        })
    }

    render() {
        return (
            <div className="App">
                <Counter1 num1={this.state.counter1} inc={this.incCounter1} dec={this.decCounter1}/>
                <Counter2 num2={this.state.counter2} inc={this.incCounter2} dec={this.decCounter2}/>
                <Counter3 num3={this.state.counter3} inc={this.incCounter3} dec={this.decCounter3}/>

                <button className="all" onClick={this.incAll}>Increase All</button>
                <button className="all" onClick={this.decAll}>Decrease All</button>
            </div>
        );
    }
}

export default App;
