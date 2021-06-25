import React, { Component } from 'react'
import Menu from './Menu.js'
import { Dishes } from '../Dishes.js';
import DishDetail from "./DishDetail.js";
import Header from './header.js';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: Dishes,
      selectedDish: null
    }
  }
  onDishSelect(dishID) {
    console.log(dishID)
    this.setState({ selectedDish: dishID });
  }

  render() {
    // console.log(this.state.dishes);
    return (
      <>
        <Header/>
        <div className="container">
          <Menu dishes={this.state.dishes}
            onClick={(dishID) => this.onDishSelect(dishID)}
          />
          <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
        </div>
      </>
    );
  }
}

export default Main;
