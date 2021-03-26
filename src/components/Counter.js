import React, { Component } from 'react'

 class Counter extends Component {
     constructor(){
         super();
         this.state={
             count:0
         }
        //  this.increment=this.increment.bind(this);
     }
      increment(){
        this.setState((prevState)=>({
            count:prevState.count+1
        }));
     }
     decrement(){
        this.setState((prevState)=>({
            count:prevState.count-1
        }));
     }
    render() {
        return (
            <div>
                <h1>Count : {this.state.count}</h1>
                <div className="btn-container">
                    <button  className="btn increment" onClick={()=>{this.increment()}}>Increment</button>

                    <button disabled={this.state.count===0} className="btn decrement" onClick={()=>{this.decrement()}}>Decrement </button>
                </div>
            </div>
        )
    }
}

export default Counter
