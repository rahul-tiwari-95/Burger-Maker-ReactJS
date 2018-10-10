import React from 'react';
import classes from './Burger.css';
import BurgerIngredients from './Burgeringredients/BurgerIngredients';

// Stateless Component / Functionality

const burger = ( props )=>{

  return (

      <div className={classes.Burger}>

          <BurgerIngredients type="bread-top" />
         <BurgerIngredients type="cheese" />
         <BurgerIngredients type="meat" />
         <BurgerIngredients type="bread-bottom" />



      </div>

  )
}


export default burger;
