import React, { Component } from 'react';
import './App.css';
import foods from './foods.json';
import FoodBox from './Foodbox';

class App extends Component {
  state = {
    foodList: foods,
    showForm: false,
    todaysFood: []
  };

  displayFood = () => {
    let arr = this.state.foodList.map((food) => {
      return (
        <FoodBox
          key={food.name}
          name={food.name}
          calories={food.calories}
          image={food.image}
          theClickedFoodProp={this.clickedFood}
        />
      );
    });
    return arr;
  };

  displayTodaysFood = () => {
    let arr = this.state.todaysFood.map((food) => {
      return (
        <li>{food.name} {food.calories}</li>
      )
    })
    return arr
  }


  clickedFood = (food) => {
    console.log('I clicked the food named:', food.name) 
    let newTodaysFood = [...this.state.todaysFood] 
    newTodaysFood.push(food) 
    this.setState({
      todaysFood:newTodaysFood 
    })
  }





  toggleForm = () => {
    this.setState({
      showForm: !this.state.showForm,
    });
  };

  addFood = (event) => {
    event.preventDefault();
    let newFoodObj = {  
      name: this.state.name, 
      calories: this.state.calories,
      image: this.state.image,
      quantity: 0,
    };
    
    let foodListCopy = [...this.state.foodList]; 
    foodListCopy.unshift(newFoodObj); 

    this.setState({
      foodList: foodListCopy, 
      showForm: false,
    });
  };





  handleChange = (event) => {
    console.log(event.target.name);

    this.setState({
      [event.target.name]: event.target.value, 
    });
  };

  searchList = (event) => {
    
    let filterFoods = foods.filter(eachFood=>{
      return eachFood.name.toLowerCase().includes(event.target.value.toLowerCase())
    })

    this.setState({
      foodList:filterFoods
    })

  }


  render() {
    return (
      <div className="App">
        <input onChange={this.searchList} placeholder="search"/>
        <br /> 
        <button onClick={this.toggleForm}>Add Food</button>
        {this.state.showForm ? (
          <form onSubmit={this.addFood}>
            <label>Food name:</label>
            <input onChange={this.handleChange} type="text" name="name" />
            <br />
            <label>Calories:</label>
            <input onChange={this.handleChange} type="number" name="calories" />
            <br />
            <label>Image URL:</label>
            <input onChange={this.handleChange} type="text" name="image" />
            <br />
            <input type="submit" />
          </form>
        ) : (
          ''
        )}

        <section class="foods">
          <ul>{this.displayFood()}</ul>
          <ul>{this.displayTodaysFood()}</ul>
        </section>
      </div>
    );
  }
}

export default App;