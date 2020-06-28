import React, { Component } from 'react'

 class Counter extends Component {


 formatCount (){
     const{value} = this.props.counter
     return value === 0 ? 'Zero' : value
 }
 badgeFormat (){
    
    let classes="badge m-2 badge-"
    classes+= (this.props.counter.value === 0) ? 'warning' : 'primary'

    return classes
 }
    render() {
    
        return (
            <div>
            <span className={this.badgeFormat()}>{this.formatCount()}</span>
            <button className="btn btn-primary btn-sm m-2"
            onClick={()=>this.props.onIncrement(this.props.counter)}>Increment</button>            
            <button className="btn btn-danger btn-sm m-2"
            onClick={()=>this.props.onDelete(this.props.counter)}>Decrement</button>
            </div>
        )
    }
}

export default Counter
