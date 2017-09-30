//Dependencias
import React, { Component } from 'react';

class Home extends Component{
  constructor()
  {
    super();

    this.state =
      {
        count: 0,
    numero1: 0,
    numero2: 0
      };

    this.handleCountClick = this.handleCountClick.bind(this);
    this.handleResultClick = this.handleResultClick.bind(this);
    this.handleInputChanged = this.handleInputChanged.bind(this);

  }


  componentDidMount()
  {
    this.setState({
      count: 1,
      numero1: 0,
      numero2: 0
    });
  }


  handleCountClick(e){
    if(e.target.id === 'add'){
      this.setState({
        count: this.state.count + 1
      });
    }else if(e.target.id === 'substract' && this.state.count > 0){
      this.setState({
        count: this.state.count - 1
      });

    }else if(e.target.id === 'reset'){
      this.setState({
        count: 1
      });
    }
  }


  handleResultClick(e){
  this.setState({
    result: this.state.numero1 + this.state.numero2
  });
  }

  handleInputChanged(e)
  {
  if(e.target.id === 'numero1'){
    this.setState({
    numero1: Number(e.target.value)
    });
  }else if(e.target.id === 'numero2'){
    this.setState({
    numero2: Number(e.target.value)
    });
  }
  }


    render()
    {
    console.log("Se carga render")
        return (
            <div className="Content">
              <h1>Counter: {this.state.count}</h1>


              <p>
                <button id="add" onClick={this.handleCountClick}>+</button>
                <button id="substract" onClick={this.handleCountClick}>-</button>
                <button id="reset" onClick={this.handleCountClick}>C</button>
              </p>


              <h2>Calculadora</h2>

              <p>
                <input id="numero1" type="number" value={this.state.numero1} onChange={this.handleInputChanged}/>
                +
                <input id="numero2" type="number" value={this.state.numero2} onChange={this.handleInputChanged}/>

                <button id="result" onClick={this.handleResultClick}>=</button>
        {this.state.result}
              </p>



            </div>
        );
    }


}


export default Home;
