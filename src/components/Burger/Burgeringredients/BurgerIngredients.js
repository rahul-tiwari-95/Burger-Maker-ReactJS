import React , {Component} from 'react';
import classes from './BurgerIngredient.css'
import PropTypes from 'prop-types';

class BurgerIngredients extends Component{


  render (){


    let ingredients = '';

    switch(this.props.type){

      case ('bread-bottom'):

                        ingredients= (<div className={classes.BreadBottom}></div>);
                          break;

      case ('bread-top'):

                        ingredients = (
                          <div className={classes.BreadTop}>
                          <div className={classes.Seeds1}></div>
                          <div className={classes.Seeds2}></div>
                          </div>

                        );
                        break;

        case ('meat'):

                        ingredients = <div className={classes.Meat}></div>
                        break;

        case ('cheese'):

                        ingredients = <div className={classes.Cheese}></div>
                        break;

        case('salad'):

                        ingredients = <div className={classes.Salad}></div>
                        break;


        case('bacon'):

                        ingredients = <div className={classes.Bacon}></div>
                        break;


        default:
                        ingredients = null;
    }


    return ingredients;



  }


}

BurgerIngredients.PropTypes ={

              type : PropTypes.string.isRequired//Putting a condition on the Input field
              //Checking for values
}


export default BurgerIngredients;
