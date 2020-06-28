import React, { Component } from "react";
import Counter from "./Counter";

class Counters extends Component {
  
  render() {

     const {onReset , onIncrement,onDelete,counters}=this.props
    return <div className="container">

        <button className="btn btn-primary btn-sm"
        onClick={onReset}>Reset</button>
        {
            counters.map(counter => (
            <Counter key={counter.id}
            onIncrement={onIncrement}
            onDelete={onDelete}
            counter={counter}/>)
            )
        }
    </div>;
  }
}

export default Counters;
