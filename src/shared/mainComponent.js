import React, { Component } from 'react'
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './Menu.js'
import {Dishes} from '../Dishes.js';
import DishDetail from "./DishDetail.js";

class Main extends Component{
  constructor(props) {
    super(props);
    this.state = {
        dishes:Dishes,
        selectedDish: null
    }
  }
  onDishSelect(dishID) {
    console.log(dishID)
    this.setState({ selectedDish: dishID});
  }

  render(){
     // console.log(this.state.dishes);
    return(
    <>
        <Navbar dark color="primary">
            <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
            </div>
        </Navbar>
      <div className="container">
        <Menu dishes={this.state.dishes}
              onClick={(dishID) => this.onDishSelect(dishID)}
        />
        
        <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]}/>
      </div>
    </>
    );
  }
}

export default Main;
