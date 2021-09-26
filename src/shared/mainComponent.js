import React, { Component } from 'react';
import Menu from './Menu.js';
import { DISHES } from '../Dishes.js';
import DishDetail from "./DishDetail.js";
import Header from './header.js';
import Footer from './footer.js';
import Home from './HomeComponents.js';
import About from './AboutUs.js';
import { Switch, Route, Redirect } from 'react-router-dom';
import Contact from './ContactComponent';
import { COMMENTS } from '../Comments.js';
import { PROMOTIONS } from '../Promotions.js';
import { LEADERS } from '../Leaders.js';



class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      comments: COMMENTS,
      promotions: PROMOTIONS,
      leaders: LEADERS
    }
  }
  onDishSelect(dishID) {
    console.log(dishID)
    this.setState({ selectedDish: dishID });
  }

  render() {
    const HomePage = () => {
      return(
          <Home 
              dish={this.state.dishes.filter((dish) => dish.featured)[0]}
              promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
              leader={this.state.leaders.filter((leader) => leader.featured)[0]}
          />
      );
    }

    const DishWithId = ({match}) => {
      return (
          // 10 -> base 10
          <DishDetail dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
              comments={this.state.comments.filter((comment) => comment.id === parseInt(match.params.dishId,10))}
          />
      );
    }  

    const AboutUs = () => {
      return(
        <About leaders = {this.state.leaders}/>
      )
    }

    // console.log(this.state.dishes);
    return (
      <>
        <Header />
          <Switch> 
            <Route path='/home' component={HomePage} />
            <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes} />} />
            <Route path="/menu/:dishID" component={DishWithId} />
            <Route exact path="/contactus" component={Contact} />
            <Route exact path="/aboutus" component={AboutUs}/>
            <Redirect to="/home" />  
          </Switch>
        <Footer/>
      </>
    );
  }
}

export default Main;
