import React from "react";
import titleRibbon from "../../assets/ribbon.png";

import styles from "./Meals.module.css";
import MealItem from "./MealItems/MealItem";

// List of products, separated by category
export const mealList = [{
  category: "COMBO",
    items: [
      {
        id: "COMBO_1",
        title: "COMBO FOR 2",
        price: 158,
        description: `Selected Regular Hand Crafted Pizza / Pan Pizza / Thin'N Crispy Pizza X 1
        Selected Pasta / Rice/ Starter x 1
        Pepsi (can) X 2`,
        category: [{title: 'pizza', amountReq: 3}, {title: 'pasta / rice / starter', amountReq: 2}, {title: 'drink', amountReq: 2}],
        categoryProductsId: [
          ['PIZZA_1','PIZZA_2','PIZZA_4'],
          ['PASTA_1','PASTA_3','PASTA_5','STARTER_1'],
          ['DRINK_1','DRINK_2']
        ],
        image: '/pizza_product/COMBO_01.png'
      },
      {
        id: "COMBO_2",
        title: "BIG COMBO FOR 2",
        price: 238,
        description: `Selected Large Hand Crafted Pizza / Pan Pizza / Thin'N Crispy Pizza X 1
        Selected Rice / Pasta X1
        Seleted Starter X 1
        Pepsi (can) X 2`,
        image: '/pizza_product/COMBO_02.png'
      },
      {
        id: "COMBO_3",
        title: "COMBO FOR 4",
        price: 378,
        description: `Selected Large Hand Crafted Pizza / Pan Pizza / Thin'N Crispy Pizza X 1
        Selected Rice / Pasta X 3
        Selected Starter X 1
        Pepsi (can) X 4`,
        image: '/pizza_product/COMBO_03.png'
      },
      {
        id: "COMBO_4",
        title: "COMBO FOR 6",
        price: 538,
        description: `Selected Large Hand Crafted Pizza / Pan Pizza / Thin'N Crispy Pizza X 2
        Selected Rice / Pasta X 2
        Selected Starter X 2
        Pepsi (can) X 6`,
        image: '/pizza_product/COMBO_04.png'
      },
      {
        id: "COMBO_5",
        title: "DOUBLE DEAL LARGE PIZZA",
        price: 298,
        description: `Choose any 2 Pan Pizza or Thin’N Crispy Pizza or Hand Crafted Pizza:
        (Offer is not applicable to Newly Promoted Pizza, Seafood Supreme, Half and Half and Create Your Own Pizza)`,
        image: '/pizza_product/COMBO_05.png'
      },
      {
        id: "COMBO_6",
        title: "HALF AND HALF - REGULAR PAN PIZZA",
        price: 168,
        description: `Choose 2 flavors in 1 pizza (except Newly Promoted Pizza)`,
        image: '/pizza_product/COMBO_06.png'
      },
      {
        id: "COMBO_7",
        title: "HALF AND HALF - OATMEAL REGULAR PIZZA",
        price: 168,
        description: `Choose 2 flavors in 1 pizza (except Newly Promoted Pizza)`,
        image: '/pizza_product/COMBO_07.png'
      },
      {
        id: "COMBO_8",
        title: "HALF AND HALF - REGULAR STUFFED CRUST PIZZA",
        price: 168,
        description: `Choose 2 flavors in 1 pizza (except Newly Promoted Pizza)`,
        image: '/pizza_product/COMBO_08.png'
      },
    ]
  },
  {
  category: "MY BOX",
    items: [
      {
        id: "BOX_1",
        title: "",
        price: 134,
        description: "",
        image: '/pizza_product/BOX_01.png'
      },
    ]
  },
  {
    category: "PIZZA",
    items: [
      {
        id: "PIZZA_1",
        title: "MUSHROOM PIZZA",
        price: 134,
        description: "Mushroom, Onion, Ragu Sauce",
        image: '/pizza_product/PIZZA_01.png'
      },
      {
        id: "PIZZA_2",
        title: "3 CUP CHICKEN PIZZA",
        price: 138,
        description: "3 Cup Chicken, Red Pepper, Onion, Thai Basil, 3 Cup Chicken Sauce",
        image: '/pizza_product/PIZZA_02.png'
      },
      {
        id: "PIZZA_3",
        title: "MARGHERITA",
        price: 116,
        description: "Cherry Tomato, Basil, Mozzarella Cheese, Tomato Sauce",
        image: '/pizza_product/PIZZA_03.png'
      },
      {
        id: "PIZZA_4",
        title: "CARBONARA",
        price: 126,
        description: "Bacon, Onion, Mozzarella Cheese, Carbonara Sauce",
        image: '/pizza_product/PIZZA_04.png'
      },
      {
        id: "PIZZA_5",
        title: "PEPPERONI (TOMATO SAUCE)",
        price: 126,
        description: "Pepperoni, Mozzarella Cheese and Tomato Sauce",
        image: '/pizza_product/PIZZA_05.png'
      },
      {
        id: "PIZZA_6",
        title: "SUPER SUPREME (TOMATO SAUCE)",
        price: 126,
        description: "Ham, Pepperoni, Pork, Beef, Mushroom, Onion, Pepper, Pineapple and Tomato Sauce",
        image: '/pizza_product/PIZZA_06.png'
      },
      {
        id: "PIZZA_7",
        title: "SEAFOOD SUPREME (THOUSAND ISLAND SAUCE)",
        price: 160,
        description: "Seafood, Baby Scallop, Shrimp, Clam, Pineapple, Green Pepper, Red Pepper, Red Onion and Thousand Island Sauce",
        image: '/pizza_product/PIZZA_07.png'
      },
      {
        id: "PIZZA_8",
        title: "MEAT SUPREME (TOMATO SAUCE)",
        price: 146,
        description: "Chicken, Bacon, Ham, Pork, Beef, Pepperoni and Tomato Sauce",
        image: '/pizza_product/PIZZA_08.png'
      },
      {
        id: "PIZZA_9",
        title: "VEGGIE SUPREME (TOMATO SAUCE)",
        price: 146,
        description: "Cherry Tomato, Cucumber, Mushroom, Pineapple, Corn and Tomato Sauce",
        image: '/pizza_product/PIZZA_09.png'
      },
      {
        id: "PIZZA_10",
        title: "CHICKEN SUPREME (TOMATO SAUCE)",
        price: 152,
        description: "Chicken, Mushroom, Red Pepper, Pineapple and Tomato Sauce",
        image: '/pizza_product/PIZZA_10.png'
      },
      {
        id: "PIZZA_11",
        title: "SUPREME (TOMATO SAUCE)",
        price: 148,
        description: "Beef, Pork, Green Pepper, Mushroom, Pepperoni, Onion and Tomato Sauce",
        image: '/pizza_product/PIZZA_11.png'
      },
    ],
  },
  {
    category: "STARTER",
    items: [
      {
        id: "STARTER_1",
        title: "RUSSIAN SALAD",
        price: 40,
        description: "Refreshing crispy lettuce and well seasoned shrimp potato salad (Not available during 19-20 June)",
        image: '/pizza_product/STARTER_01.png'
      },
      {
        id: "STARTER_2",
        title: "GARDEN SALAD",
        price: 33,
        description: "Refreshing ingredient with savory Thousand Island Sauce(Not available during 19-20 June)",
        image: '/pizza_product/STARTER_02.png'
      },
      {
        id: "STARTER_3",
        title: "GARLIC BREAD",
        price: 36,
        description: "Signature oven-baked sesame seed bun with hot buttery garlic spread",
        image: '/pizza_product/STARTER_03.png'
      },
      {
        id: "STARTER_4",
        title: "CHICKEN OATMEAL ITALIAN SANDWICH WITH POTATO WAFFLE",
        price: 45,
        description: "Oatmeal choice",
        image: '/pizza_product/STARTER_04.png'
      },
      {
        id: "STARTER_5",
        title: "NAPOLI MEATBALL",
        price: 69,
        description: "Juicy meatball with Napoli Sauce",
        image: '/pizza_product/STARTER_05.png'
      },
      {
        id: "STARTER_6",
        title: "MASHED POTATO WITH BACON",
        price: 46,
        description: "Mellow mashed potato with bacon",
        image: '/pizza_product/STARTER_06.png'
      },
      {
        id: "STARTER_7",
        title: "CHICKEN WINGS",
        price: 36,
        description: "Roasted savory chicken wings",
        image: '/pizza_product/STARTER_07.png'
      },
      {
        id: "STARTER_8",
        title: "ROASTED CHICKEN WITH POTATO WAFFLE (HALF)",
        price: 126,
        description: "Juicy roasted chicken with crispy potato waffle",
        image: '/pizza_product/STARTER_08.png'
      },
      {
        id: "STARTER_9",
        title: "CRISPY SHRIMP(8PCS)",
        price: 70,
        description: "Tasty shrimp with crispy outside",
        image: '/pizza_product/STARTER_09.png'
      },
      {
        id: "STARTER_10",
        title: "CRISPY CHICKEN STRIP WITH POTATO WAFFLE",
        price: 69,
        description: "Deep fried crunchy chicken strips yet juicy and tender, served with potato waffle",
        image: '/pizza_product/STARTER_10.png'
      },
      {
        id: "STARTER_11",
        title: "ORIGINAL CHICKEN WINGS AND ITALIAN MINI SAUSAGE",
        price: 64,
        description: "Enjoy classic taste of original chicken wings and mini sausage",
        image: '/pizza_product/STARTER_11.png'
      },
      {
        id: "STARTER_12",
        title: "SPICY CHICKEN WINGS AND ITALIAN MINI SAUSAGE",
        price: 64,
        description: "Enjoy classic taste of spicy chicken wings and mini sausage",
        image: '/pizza_product/STARTER_12.png'
      },
    ],
  },
  {
    category: "PASTA & RICE",
    items: [
      {
        id: "PASTA_8",
        title: "AGLIO OLIO WITH PRAWN",
        price: 88,
        description: "Classic Spaghetti with Prawn in mild spicy Garlic Sauce",
        image: '/pizza_product/PASTA_08.png'
      },
      {
        id: "PASTA_1",
        title: "SPAGHETTI BOLOGNESE (BEEF)",
        price: 73,
        description: "Your choice of spaghetti tossed with minced meat baked in a rich homemade Tomato Sauce",
        image: '/pizza_product/PASTA_01.png'
      },
      {
        id: "PASTA_2",
        title: "SEAFOOD FETTUCCINE",
        price: 88,
        description: "With mouth-watering white Cream Garlic Sauce",
        image: '/pizza_product/PASTA_02.png'
      },
      {
        id: "PASTA_9",
        title: "SPAGHETTI AMERICANA",
        price: 63,
        description: "Pizza Hut's all time signature spaghetti dish",
        image: '/pizza_product/PASTA_09.png'
      },
      {
        id: "PASTA_3",
        title: "BAKED SPINACH AND MUSHROOM PENNE WITH CHEESE",
        price: 68,
        description: "Baked penne with spinach and mushroom in cheesy white sauce",
        image: '/pizza_product/PASTA_03.png'
      },
      {
        id: "PASTA_4",
        title: "BAKED SPINACH AND MUSHROOM PENNE WITH CHEESE",
        price: 68,
        description: "Baked penne with spinach and mushroom in cheesy white sauce",
        image: '/pizza_product/PASTA_04.png'
      },
      {
        id: "PASTA_5",
        title: "ITALIAN CHICKEN SPAGHETTI",
        price: 82,
        description: "Creamy and savory spaghetti with herb baked chicken and basil infused cream sauce",
        image: '/pizza_product/PASTA_05.png'
      },
      {
        id: "PASTA_6",
        title: "PRAWNS AND BABY SCALLOP RICE",
        price: 78,
        description: "Baked rice with Prawns and Baby Scallop in rich tomato sauce",
        image: '/pizza_product/PASTA_06.png'
      },
      {
        id: "PASTA_7",
        title: "SEAFOOD RICE DORIA",
        price: 88,
        description: "Baked rice with premium seafood in French white Cheddar Cheese Sauce",
        image: '/pizza_product/PASTA_07.png'
      },
    ],
  },
  {
    category: "DRINK & DESSERT",
    items: [
      {
        id: "DRINK_1",
        title: "MUSHROOM SOUP",
        price: 29,
        description: "A creamy soup with chicken and mushroom",
        image: '/pizza_product/DRINK_01.png'
      },
      {
        id: "DRINK_2",
        title: "PEPSI -CAN",
        price: 10,
        description: "Can (330ml)",
        image: '/pizza_product/DRINK_02.png'
      },
      {
        id: "DRINK_3",
        title: "7 UP -CAN",
        price: 10,
        description: "Can (330ml)",
        image: '/pizza_product/DRINK_03.png'
      },
      {
        id: "DRINK_4",
        title: "OREO CHOCOLATE PARFAIT",
        price: 25,
        description: "Oreo Chocolate Parfait",
        image: '/pizza_product/DRINK_04.png'
      },
      {
        id: "DRINK_5",
        title: "SOUFFLÉ CHEESE CAKE",
        price: 32,
        description: "",
        image: '/pizza_product/DRINK_05.png'
      },
    ],
  },
];

const filteredMeals = (criteria) => {
  return mealList.filter(x => x.category === criteria)[0].items;
}

export default function Meals(props) {
  const modalOpenHandler = (item) => {
    props.onModalOpen(item, mealList);
  }

  return (
    <div className={styles.meals}>
      <div className={styles.intro}>
        <img src={titleRibbon} alt=''/>
        <h3>{props.activeSection}</h3>
      </div>

      <div className={styles.mealList}>
        {/* Show menu based on active section */}
        {props.activeSection === 'COMBO' && 
          filteredMeals('COMBO').map(x => <MealItem key={'Combo' + x.id} meal={x} onModalOpen={modalOpenHandler} large="true"/>)}
        {props.activeSection === 'PIZZA' && 
          filteredMeals('PIZZA').map(x => <MealItem key={x.id} meal={x} onModalOpen={modalOpenHandler}/>)}
        {props.activeSection === 'PASTA & RICE' && 
          filteredMeals('PASTA & RICE').map(x => <MealItem key={x.id} meal={x}/>)}
        {props.activeSection === 'STARTER' && 
          filteredMeals('STARTER').map(x => <MealItem key={x.id} meal={x}/>)}
        {props.activeSection === 'DRINK & DESSERT' && 
          filteredMeals('DRINK & DESSERT').map(x => <MealItem key={x.id} meal={x}/>)}
      </div>
      
    </div>
  );
};

