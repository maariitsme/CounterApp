import React, { Component } from 'react'
import Counter from './Counter';

 class EnableDisable extends Component {
     constructor(){
         super();
         this.state={
             mount:false,
             unmount:true
         }
     }
     toggleM(){
         console.log("enabled");
         this.setState((prevState)=>({
                mount: !prevState.mount,
                unmount: !prevState.unmount
         }));
     }
     toggleU(){
        console.log("disabled");

        this.setState((prevState)=>({
            mount: !prevState.mount,
            unmount: !prevState.unmount
        }));
    }
    render() {
        return (
            <div>
                <h1>{this.state.mount} <br/> {this.state.unmount}</h1>
                 <div className="btn-container">
                    <button  disabled={this.state.mount} className="btn enable" onClick={()=>{this.toggleM()}}>Mount</button>

                    <button disabled={this.state.unmount}  className="btn disable" onClick={()=>{this.toggleU()}}>Unmount </button>
                </div>
                <div>
                    {(()=>{
                        if(this.state.mount){
                            return <Counter/>
                        }
                    })()
                    }
                </div>
            </div>
        )
    }
}

export default EnableDisable
