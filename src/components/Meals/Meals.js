import React from "react";
import Card from "../UI/Card";
import titleRibbon from "../../assets/ribbon.png";

import styles from "./Meals.module.css";
import MealItem from "./MealItems/MealItem";

// List of products, separated by category
const mealList = [
  {
    category: "PIZZA",
    items: [
      {
        id: "PIZZA_1",
        title: "MUSHROOM PIZZA",
        price: 144,
        description: "Mushroom, Onion, Ragu Sauce",
        image: ''
      },
      {
        id: "PIZZA_2",
        title: "3 CUP CHICKEN PIZZA",
        price: 148,
        description: "3 Cup Chicken, Red Pepper, Onion, Thai Basil, 3 Cup Chicken Sauce",
        image: ''
      },
    ],
  },
  {
    category: "STARTER",
    items: [
      {
        id: "STARTER_1",
        title: "Meatball",
        price: 12.99,
        description: "Juicy meatballs made by american porks",
        image: ''
      },
      {
        id: "STARTER_2",
        title: "Salad",
        price: 8.99,
        description: "Green, healthy salad",
        image: ''
      },
    ],
  },
  {
    category: "PASTA & RICE",
    items: [
      {
        id: "PASTA_1",
        title: "SPAGHETTI BOLOGNESE (BEEF)",
        price: 76,
        description: "Your choice of spaghetti tossed with minced meat baked in a rich homemade Tomato Sauce",
        image: ''
      },
      {
        id: "PASTA_2",
        title: "BAKED SPINACH AND MUSHROOM PENNE WITH CHEESE",
        price: 76,
        description: "Baked penne with spinach and mushroom in cheesy white sauce",
        image: ''
      },
    ],
  },
  {
    category: "DRINK & DESSERT",
    items: [
      {
        id: "DRINK_PEPSI_CAN",
        title: "PEPSI -CAN",
        price: 10,
        description: "Can (330ml)",
        image: ''
      },
      {
        id: "DRINK_7UP_CAN",
        title: "7 UP -CAN",
        price: 10,
        description: "Can (330ml)",
        image: ''
      },
    ],
  },
];

const Meals = (props) => {
  return (
    <div className={styles.meals}>
      <div className={styles.intro}>
        <img src={titleRibbon} />
        <h3>{"Drink and Desserts"}</h3>
      </div>

      <div className={styles.mealList}>
        <MealItem />
        <MealItem />
        <MealItem />
        <MealItem />
        <MealItem />
        <MealItem />
      </div>
    </div>
  );
};

export default Meals;
