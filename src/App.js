import React, { Component } from 'react';
import foods from './foods.json';

class App extends Component {
  state = {
    showForm:true,
    foods: foods,
  }

  handleSubmit = e => {
    e.preventDefault();
    let newFood = { 
      name: this.state.name, 
      calories: this.state.calories, 
      image:this.state.image
    }


    let copyOfFoods = [...this.state.foods]


    copyOfFoods.unshift( newFood )

    this.setState({   
      showForm: false,
      foods: copyOfFoods
    })


    // this.toggleForm() //Another option >> Call a method from another ones
  }


  throwBatrang = () => {
    console.log("POW!!!!")
  }

  handleChange = e => {
    this.setState({
      [e.target.name]:e.target.value
    })
  }

  toggleForm = () => {
    this.setState({
      showForm: !this.state.showForm
      //true: !true
      //false: !false
    })

    this.throwBatrang()
  }

  render() {
    return (
      <div>
          <h1>Log in</h1>
          
          <button onClick={this.toggleForm}>Toggle Form</button>

          {this.state.showForm ? 

          <form onSubmit={this.handleSubmit}>
            <input onChange={this.handleChange} placeholder="name" name="name" type="text" />
            <input onChange={this.handleChange} placeholder="calories" name="calories" type="text" />
            <input onChange={this.handleChange} placeholder="image" name="image" type="text" />

            <input type="submit" />
          </form>

          : 'dont show form' }


      </div>
    );
  }
}

export default App;