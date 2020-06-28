
import React, { Component } from 'react';
import './App.css';
import Counters from './Counters';
import AppNav from './AppNav';



 class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      counters: [
        { id: 1, value: 0 },
        { id: 2, value: 0 },
        { id: 3, value: 0 },
        { id: 4, value: 0 }
      ]
    };
  }

  handleIncrement = (counter) =>{
    const counters=[...this.state.counters]
    const index=counters.indexOf(counter)
    counters[index]={... counter}
    counters[index].value++;
    this.setState({
        counters
    })

  }

  handleDelete= (counter) =>{
    if(counter.value <1){
    const counters=this.state.counters.filter(c=> c.id !== counter.id)
    this.setState({
        counters
    })}
    else{
        const counters=[...this.state.counters]
        const index=counters.indexOf(counter)
        counters[index]={... counter}
        counters[index].value--;
        this.setState({
            counters
        })
    }
  }

handleReset= ()=>{
    const counters= this.state.counters.map(counter => {counter.value =0
        return counter 
    })
    this.setState({
        counters
    })
}

  render() {
    const totalLength=this.state.counters.filter(c=> c.value!==0).length
    return (
      <React.Fragment>
      <AppNav totalLength={totalLength}/>
      <div className="container">
        <Counters counters={this.state.counters}
        onDelete={this.handleDelete}
        onIncrement={this.handleIncrement}
        onReset={this.handleReset}/>
      </div>
      </React.Fragment>
    )
  }
}

export default App


