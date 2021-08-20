import React from "react";
import titleRibbon from "../../assets/ribbon.png";

import styles from "./Meals.module.css";
import MealItem from "./MealItems/MealItem";

// Schema and prices of value deal choices for combos
// need to define this before mealList before combo category needs it.
const addOnDealIds = [
  { id: "VALUEDEAL_STARTER_1", extraCharges: 20 },
  { id: "VALUEDEAL_STARTER_2", extraCharges: 18 },
  { id: "VALUEDEAL_STARTER_3", extraCharges: 18 },
  { id: "VALUEDEAL_STARTER_5", extraCharges: 30 },
  { id: "VALUEDEAL_STARTER_6", extraCharges: 12 },
  { id: "VALUEDEAL_STARTER_7", extraCharges: 30 },
  { id: "VALUEDEAL_DRINK_1", extraCharges: 12 },
  { id: "VALUEDEAL_DRINK_2", extraCharges: 7 },
  { id: "VALUEDEAL_DRINK_3", extraCharges: 7 },
  { id: "VALUEDEAL_DRINK_4", extraCharges: 15 },
  { id: "VALUEDEAL_DRINK_5", extraCharges: 23 },
  { id: "VALUEDEAL_STARTER_9", extraCharges: 50 },
  { id: "VALUEDEAL_STARTER_11", extraCharges: 48 },
  { id: "VALUEDEAL_STARTER_12", extraCharges: 48 },
];

// List of products, separated by category
// Rule: All id must has prefix equal to its category (PIZZA => PIZZA_1)
export const mealList = [
  {
    category: "COMBO",
    items: [
      {
        id: "COMBO_1",
        title: "COMBO FOR 2",
        price: 158,
        description: `Selected Regular Hand Crafted Pizza / Pan Pizza / Thin'N Crispy Pizza X 1
        Selected Pasta / Rice/ Starter x 1
        Pepsi (can) X 2`,
        category: [
          { title: "pizza", amountReq: 1 },
          { title: "pasta / rice / starter", amountReq: 1 },
          { title: "drink", amountReq: 2 },
          { title: "add on deal (optional)", amountReq: 0 },
        ],
        categoryProductsId: [
          [
            { id: "PIZZA_1" },
            { id: "PIZZA_2" },
            { id: "PIZZA_3" },
            { id: "PIZZA_4", extraCharges: 0 },
            { id: "PIZZA_5" },
            { id: "PIZZA_6" },
          ],
          [
            { id: "PASTA_1" },
            { id: "PASTA_3" },
            { id: "PASTA_5", extraCharges: 10 },
            { id: "STARTER_2", extraCharges: 0 },
          ],
          [
            { id: "DRINK_1" },
            { id: "DRINK_2" },
            { id: "DRINK_3" },
          ],
          addOnDealIds
        ],
        image: "/pizza_products_webp/COMBO_01.webp",
      },
      {
        id: "COMBO_2",
        title: "BIG COMBO FOR 2",
        price: 238,
        description: `Selected Large Hand Crafted Pizza / Pan Pizza / Thin'N Crispy Pizza X 1
        Selected Rice / Pasta X1
        Selected Starter X 1
        Pepsi (can) X 2`,
        category: [
          { title: "pizza", amountReq: 1 },
          { title: "pasta / rice", amountReq: 1 },
          { title: "starter", amountReq: 1 },
          { title: "drink", amountReq: 2 },
          { title: "add on deal (optional)", amountReq: 0 },
        ],
        categoryProductsId: [
          [
            { id: "PIZZA_1" },
            { id: "PIZZA_2" },
            { id: "PIZZA_3" },
            { id: "PIZZA_4" },
            { id: "PIZZA_5" },
            { id: "PIZZA_6", extraCharges: 10 },
          ],
          [
            { id: "PASTA_1" },
            { id: "PASTA_3" },
            { id: "PASTA_5", extraCharges: 10 },
          ],
          [
            { id: "STARTER_1" },
            { id: "STARTER_2" },
            { id: "STARTER_3" },
          ],
          [
            { id: "DRINK_1" }, { id: "DRINK_2" }, { id: "DRINK_3" }
          ],
          addOnDealIds
        ],
        image: "/pizza_products_webp/COMBO_02.webp",
      },
      {
        id: "COMBO_3",
        title: "COMBO FOR 4",
        price: 378,
        description: `Selected Large Hand Crafted Pizza / Pan Pizza / Thin'N Crispy Pizza X 1
        Selected Rice / Pasta X 3
        Selected Starter X 1
        Pepsi (can) X 4`,
        category: [
          { title: "pizza", amountReq: 1 },
          { title: "pasta / rice", amountReq: 3 },
          { title: "starter", amountReq: 1 },
          { title: "drink", amountReq: 4 },
          { title: "add on deal (optional)", amountReq: 0 },
        ],
        categoryProductsId: [
          [
            { id: "PIZZA_1" },
            { id: "PIZZA_2" },
            { id: "PIZZA_3" },
            { id: "PIZZA_4" },
            { id: "PIZZA_5" },
            { id: "PIZZA_6", extraCharges: 10 },
          ],
          [
            { id: "PASTA_1" },
            { id: "PASTA_3" },
            { id: "PASTA_5", extraCharges: 10 },
          ],
          [
            { id: "STARTER_1" },
            { id: "STARTER_2" },
            { id: "STARTER_3" },
          ],
          [
            { id: "DRINK_1" }, { id: "DRINK_2" }, { id: "DRINK_3" }
          ],
          addOnDealIds
        ],
        image: "/pizza_products_webp/COMBO_03.webp",
      },
      {
        id: "COMBO_4",
        title: "COMBO FOR 6",
        price: 538,
        description: `Selected Large Hand Crafted Pizza / Pan Pizza / Thin'N Crispy Pizza X 2
        Selected Rice / Pasta X 2
        Selected Starter X 2
        Pepsi (can) X 6`,
        category: [
          { title: "pizza", amountReq: 2 },
          { title: "pasta / rice", amountReq: 2 },
          { title: "starter", amountReq: 2 },
          { title: "drink", amountReq: 6 },
          { title: "add on deal (optional)", amountReq: 0 },
        ],
        categoryProductsId: [
          [
            { id: "PIZZA_1" },
            { id: "PIZZA_2" },
            { id: "PIZZA_3" },
            { id: "PIZZA_4" },
            { id: "PIZZA_5" },
            { id: "PIZZA_6", extraCharges: 10 },
          ],
          [
            { id: "PASTA_1" },
            { id: "PASTA_3" },
            { id: "PASTA_5", extraCharges: 10 },
          ],
          [
            { id: "STARTER_1" },
            { id: "STARTER_2" },
            { id: "STARTER_3" },
          ],
          [
            { id: "DRINK_1" }, { id: "DRINK_2" }, { id: "DRINK_3" }
          ],
          addOnDealIds
        ],
        image: "/pizza_products_webp/COMBO_04.webp",
      },
      {
        id: "COMBO_5",
        title: "DOUBLE DEAL LARGE PIZZA",
        price: 298,
        description: `Choose any 2 Pan Pizza or Thin’N Crispy Pizza or Hand Crafted Pizza:
        (Offer is not applicable to Newly Promoted Pizza, Seafood Supreme, Half and Half and Create Your Own Pizza)`,
        category: [
          { title: "pizza", amountReq: 2 },
          { title: "add on deal (optional)", amountReq: 0 },
        ],
        categoryProductsId: [
          [
            { id: "PIZZA_1" },
            { id: "PIZZA_2" },
            { id: "PIZZA_3" },
            { id: "PIZZA_4" },
            { id: "PIZZA_5" },
            { id: "PIZZA_6" },
            { id: "PIZZA_7" },
            { id: "PIZZA_8" },
            { id: "PIZZA_9" },
            { id: "PIZZA_10" },
            { id: "PIZZA_11" },
          ],
          addOnDealIds
        ],
        image: "/pizza_products_webp/COMBO_05.webp",
      },
      /* {
        id: "COMBO_6",
        title: "HALF AND HALF - REGULAR PAN PIZZA",
        price: 168,
        description: `Choose 2 flavors in 1 pizza (except Newly Promoted Pizza)`,
        image: "/pizza_products_webp/COMBO_06.webp",
      },
      {
        id: "COMBO_7",
        title: "HALF AND HALF - OATMEAL REGULAR PIZZA",
        price: 168,
        description: `Choose 2 flavors in 1 pizza (except Newly Promoted Pizza)`,
        image: "/pizza_products_webp/COMBO_07.webp",
      },
      {
        id: "COMBO_8",
        title: "HALF AND HALF - REGULAR STUFFED CRUST PIZZA",
        price: 168,
        description: `Choose 2 flavors in 1 pizza (except Newly Promoted Pizza)`,
        image: "/pizza_products_webp/COMBO_08.webp",
      }, */
    ],
  },
  {
    category: "BOX",
    items: [
      {
        id: "BOX_1",
        title: "MY BOX - HAWAIIAN PARADISE MINI PIZZA",
        price: 55,
        description: `Hawaiian Paradise Mini Pizza X 1
        Snack X 1`,
        category: [
          { title: "mini pizza", amountReq: 1 },
          { title: "starter", amountReq: 1 },
          { title: "drink", amountReq: 1 },
        ],
        categoryProductsId: [
          [
            { id: "UNPUBLISHED_BOX-PIZZA-1-PAN" },
            { id: "UNPUBLISHED_BOX-PIZZA-1-CRISPY" },
            { id: "UNPUBLISHED_BOX-PIZZA-1-STUFFED-CRUST", extraCharges: 11 },
            { id: "UNPUBLISHED_BOX-PIZZA-1-GOLDEN-CRUST", extraCharges: 15 },
          ],
          [
            { id: "UNPUBLISHED_BOX-STARTER-A" },
            { id: "UNPUBLISHED_BOX-STARTER-B" },
            { id: "UNPUBLISHED_BOX-STARTER-C" },
          ],
          [
            { id: "UNPUBLISHED_NODRINK" },
            { id: "DRINK_1", extraCharges: 5 },
            { id: "DRINK_2", extraCharges: 5 },
            { id: "DRINK_3", extraCharges: 5 },
          ]
        ],
        image: "/pizza_products_webp/BOX_01.webp",
      },
      {
        id: "BOX_2",
        title: "MY BOX - HAWAIIAN PARADISE MINI PIZZA",
        price: 55,
        description: `Hawaiian Paradise Mini Pizza X 1
        Snack X 1`,
        category: [
          { title: "mini pizza", amountReq: 1 },
          { title: "starter", amountReq: 1 },
          { title: "drink", amountReq: 1 },
        ],
        categoryProductsId: [
          [
            { id: "UNPUBLISHED_BOX-PIZZA-2-PAN" },
            { id: "UNPUBLISHED_BOX-PIZZA-2-CRISPY" },
            { id: "UNPUBLISHED_BOX-PIZZA-2-STUFFED-CRUST", extraCharges: 11 },
            { id: "UNPUBLISHED_BOX-PIZZA-2-GOLDEN-CRUST", extraCharges: 15 },
          ],
          [
            { id: "UNPUBLISHED_BOX-STARTER-A" },
            { id: "UNPUBLISHED_BOX-STARTER-B" },
            { id: "UNPUBLISHED_BOX-STARTER-C" },
          ],
          [
            { id: "UNPUBLISHED_NODRINK" },
            { id: "DRINK_1", extraCharges: 5 },
            { id: "DRINK_2", extraCharges: 5 },
            { id: "DRINK_3", extraCharges: 5 },
          ]
        ],
        image: "/pizza_products_webp/BOX_02.webp",
      },
      {
        id: "BOX_3",
        title: "MY BOX - THOUSAND ISLAND SEAFOOD MINI PIZZA",
        price: 72,
        description: `Thousand Island Seafood Mini Pizza X 1
        Snack X 1`,
        category: [
          { title: "mini pizza", amountReq: 1 },
          { title: "starter", amountReq: 1 },
          { title: "drink", amountReq: 1 },
        ],
        categoryProductsId: [
          [
            { id: "UNPUBLISHED_BOX-PIZZA-3-PAN" },
            { id: "UNPUBLISHED_BOX-PIZZA-3-CRISPY" },
            { id: "UNPUBLISHED_BOX-PIZZA-3-STUFFED-CRUST", extraCharges: 11 },
            { id: "UNPUBLISHED_BOX-PIZZA-3-GOLDEN-CRUST", extraCharges: 15 },
          ],
          [
            { id: "UNPUBLISHED_BOX-STARTER-A" },
            { id: "UNPUBLISHED_BOX-STARTER-B" },
            { id: "UNPUBLISHED_BOX-STARTER-C" },
          ],
          [
            { id: "UNPUBLISHED_NODRINK" },
            { id: "DRINK_1", extraCharges: 5 },
            { id: "DRINK_2", extraCharges: 5 },
            { id: "DRINK_3", extraCharges: 5 },
          ]
        ],
        image: "/pizza_products_webp/BOX_03.webp",
      },
      {
        id: "BOX_4",
        title: "MY BOX - CHICKEN MUSHROOM MINI PIZZA WITH WHITE TRUFFLE SAUCE",
        price: 72,
        description: `Chicken Mushroom Mini Pizza with White Truffle Sauce X 1
        Snack X 1`,
        category: [
          { title: "mini pizza", amountReq: 1 },
          { title: "starter", amountReq: 1 },
          { title: "drink", amountReq: 1 },
        ],
        categoryProductsId: [
          [
            { id: "UNPUBLISHED_BOX-PIZZA-4-PAN" },
            { id: "UNPUBLISHED_BOX-PIZZA-4-CRISPY" },
            { id: "UNPUBLISHED_BOX-PIZZA-4-STUFFED-CRUST", extraCharges: 11 },
            { id: "UNPUBLISHED_BOX-PIZZA-4-GOLDEN-CRUST", extraCharges: 15 },
          ],
          [
            { id: "UNPUBLISHED_BOX-STARTER-A" },
            { id: "UNPUBLISHED_BOX-STARTER-B" },
            { id: "UNPUBLISHED_BOX-STARTER-C" },
          ],
          [
            { id: "UNPUBLISHED_NODRINK" },
            { id: "DRINK_1", extraCharges: 5 },
            { id: "DRINK_2", extraCharges: 5 },
            { id: "DRINK_3", extraCharges: 5 },
          ]
        ],
        image: "/pizza_products_webp/BOX_04.webp",
      },
      {
        id: "BOX_5",
        title: "MY BOX - SPAGHETTI AMERICANA",
        price: 55,
        description: `Spaghetti Americana X 1
        Snack X 1`,
        category: [
          { title: "pasta / rice", amountReq: 1 },
          { title: "starter", amountReq: 1 },
          { title: "drink", amountReq: 1 },
        ],
        categoryProductsId: [
          [
            { id: "PASTA_9" },
          ],
          [
            { id: "UNPUBLISHED_BOX-STARTER-A" },
            { id: "UNPUBLISHED_BOX-STARTER-B" },
            { id: "UNPUBLISHED_BOX-STARTER-C" },
          ],
          [
            { id: "UNPUBLISHED_NODRINK" },
            { id: "DRINK_1", extraCharges: 5 },
            { id: "DRINK_2", extraCharges: 5 },
            { id: "DRINK_3", extraCharges: 5 },
          ]
        ],
        image: "/pizza_products_webp/BOX_05.webp",
      },
      {
        id: "BOX_6",
        title: "MY BOX - SPAGHETTI BOLOGNESE (BEEF)",
        price: 72,
        description: `Spaghetti Bolognese (Beef) X 1
        Snack X 1`,
        category: [
          { title: "pasta / rice", amountReq: 1 },
          { title: "starter", amountReq: 1 },
          { title: "drink", amountReq: 1 },
        ],
        categoryProductsId: [
          [
            { id: "PASTA_1" },
          ],
          [
            { id: "UNPUBLISHED_BOX-STARTER-A" },
            { id: "UNPUBLISHED_BOX-STARTER-B" },
            { id: "UNPUBLISHED_BOX-STARTER-C" },
          ],
          [
            { id: "UNPUBLISHED_NODRINK" },
            { id: "DRINK_1", extraCharges: 5 },
            { id: "DRINK_2", extraCharges: 5 },
            { id: "DRINK_3", extraCharges: 5 },
          ]
        ],
        image: "/pizza_products_webp/BOX_06.webp",
      },
      {
        id: "BOX_7",
        title: "MY BOX - BAKED SPINACH AND MUSHROOM PENNE WITH CHEESE",
        price: 69,
        description: `Baked Spinach and Mushroom Penne with Cheese X 1
        Snack X 1`,
        category: [
          { title: "pasta / rice", amountReq: 1 },
          { title: "starter", amountReq: 1 },
          { title: "drink", amountReq: 1 },
        ],
        categoryProductsId: [
          [
            { id: "PASTA_4" },
          ],
          [
            { id: "UNPUBLISHED_BOX-STARTER-A" },
            { id: "UNPUBLISHED_BOX-STARTER-B" },
            { id: "UNPUBLISHED_BOX-STARTER-C" },
          ],
          [
            { id: "UNPUBLISHED_NODRINK" },
            { id: "DRINK_1", extraCharges: 5 },
            { id: "DRINK_2", extraCharges: 5 },
            { id: "DRINK_3", extraCharges: 5 },
          ]
        ],
        image: "/pizza_products_webp/BOX_07.webp",
      },
      {
        id: "BOX_8",
        title: "MY BOX - SEAFOOD FETTUCCINE",
        price: 72,
        description: `Seafood fettuccine X 1
        Snack X 1`,
        category: [
          { title: "pasta / rice", amountReq: 1 },
          { title: "starter", amountReq: 1 },
          { title: "drink", amountReq: 1 },
        ],
        categoryProductsId: [
          [
            { id: "PASTA_2" },
          ],
          [
            { id: "UNPUBLISHED_BOX-STARTER-A" },
            { id: "UNPUBLISHED_BOX-STARTER-B" },
            { id: "UNPUBLISHED_BOX-STARTER-C" },
          ],
          [
            { id: "UNPUBLISHED_NODRINK" },
            { id: "DRINK_1", extraCharges: 5 },
            { id: "DRINK_2", extraCharges: 5 },
            { id: "DRINK_3", extraCharges: 5 },
          ]
        ],
        image: "/pizza_products_webp/BOX_08.webp",
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
        image: "/pizza_products_webp/PIZZA_01.webp",
      },
      {
        id: "PIZZA_2",
        title: "3 CUP CHICKEN PIZZA",
        price: 138,
        description: "3 Cup Chicken, Red Pepper, Onion, Thai Basil, 3 Cup Chicken Sauce",
        image: "/pizza_products_webp/PIZZA_02.webp",
      },
      {
        id: "PIZZA_3",
        title: "MARGHERITA",
        price: 116,
        description: "Cherry Tomato, Basil, Mozzarella Cheese, Tomato Sauce",
        image: "/pizza_products_webp/PIZZA_03.webp",
      },
      {
        id: "PIZZA_4",
        title: "CARBONARA",
        price: 126,
        description: "Bacon, Onion, Mozzarella Cheese, Carbonara Sauce",
        image: "/pizza_products_webp/PIZZA_04.webp",
      },
      {
        id: "PIZZA_5",
        title: "PEPPERONI (TOMATO SAUCE)",
        price: 126,
        description: "Pepperoni, Mozzarella Cheese and Tomato Sauce",
        image: "/pizza_products_webp/PIZZA_05.webp",
      },
      {
        id: "PIZZA_6",
        title: "SUPER SUPREME (TOMATO SAUCE)",
        price: 126,
        description: "Ham, Pepperoni, Pork, Beef, Mushroom, Onion, Pepper, Pineapple and Tomato Sauce",
        image: "/pizza_products_webp/PIZZA_06.webp",
      },
      {
        id: "PIZZA_7",
        title: "SEAFOOD SUPREME (THOUSAND ISLAND SAUCE)",
        price: 160,
        description: "Seafood, Baby Scallop, Shrimp, Clam, Pineapple, Green Pepper, Red Pepper, Red Onion and Thousand Island Sauce",
        image: "/pizza_products_webp/PIZZA_07.webp",
      },
      {
        id: "PIZZA_8",
        title: "MEAT SUPREME (TOMATO SAUCE)",
        price: 146,
        description: "Chicken, Bacon, Ham, Pork, Beef, Pepperoni and Tomato Sauce",
        image: "/pizza_products_webp/PIZZA_08.webp",
      },
      {
        id: "PIZZA_9",
        title: "VEGGIE SUPREME (TOMATO SAUCE)",
        price: 146,
        description: "Cherry Tomato, Cucumber, Mushroom, Pineapple, Corn and Tomato Sauce",
        image: "/pizza_products_webp/PIZZA_09.webp",
      },
      {
        id: "PIZZA_10",
        title: "CHICKEN SUPREME (TOMATO SAUCE)",
        price: 152,
        description: "Chicken, Mushroom, Red Pepper, Pineapple and Tomato Sauce",
        image: "/pizza_products_webp/PIZZA_10.webp",
      },
      {
        id: "PIZZA_11",
        title: "SUPREME (TOMATO SAUCE)",
        price: 148,
        description: "Beef, Pork, Green Pepper, Mushroom, Pepperoni, Onion and Tomato Sauce",
        image: "/pizza_products_webp/PIZZA_11.webp",
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
        description:
          "Refreshing crispy lettuce and well seasoned shrimp potato salad (Not available during 19-20 June)",
        image: "/pizza_products_webp/STARTER_01.webp",
      },
      {
        id: "STARTER_2",
        title: "GARDEN SALAD",
        price: 33,
        description:
          "Refreshing ingredient with savory Thousand Island Sauce(Not available during 19-20 June)",
        image: "/pizza_products_webp/STARTER_02.webp",
      },
      {
        id: "STARTER_3",
        title: "GARLIC BREAD",
        price: 36,
        description:
          "Signature oven-baked sesame seed bun with hot buttery garlic spread",
        image: "/pizza_products_webp/STARTER_03.webp",
      },
      {
        id: "STARTER_4",
        title: "CHICKEN OATMEAL ITALIAN SANDWICH WITH POTATO WAFFLE",
        price: 45,
        description: "Oatmeal choice",
        image: "/pizza_products_webp/STARTER_04.webp",
      },
      {
        id: "STARTER_5",
        title: "NAPOLI MEATBALL",
        price: 69,
        description: "Juicy meatball with Napoli Sauce",
        image: "/pizza_products_webp/STARTER_05.webp",
      },
      {
        id: "STARTER_6",
        title: "MASHED POTATO WITH BACON",
        price: 46,
        description: "Mellow mashed potato with bacon",
        image: "/pizza_products_webp/STARTER_06.webp",
      },
      {
        id: "STARTER_7",
        title: "CHICKEN WINGS",
        price: 36,
        description: "Roasted savory chicken wings",
        image: "/pizza_products_webp/STARTER_07.webp",
      },
      {
        id: "STARTER_8",
        title: "ROASTED CHICKEN WITH POTATO WAFFLE (HALF)",
        price: 126,
        description: "Juicy roasted chicken with crispy potato waffle",
        image: "/pizza_products_webp/STARTER_08.webp",
      },
      {
        id: "STARTER_9",
        title: "CRISPY SHRIMP(8PCS)",
        price: 70,
        description: "Tasty shrimp with crispy outside",
        image: "/pizza_products_webp/STARTER_09.webp",
      },
      {
        id: "STARTER_10",
        title: "CRISPY CHICKEN STRIP WITH POTATO WAFFLE",
        price: 69,
        description:
          "Deep fried crunchy chicken strips yet juicy and tender, served with potato waffle",
        image: "/pizza_products_webp/STARTER_10.webp",
      },
      {
        id: "STARTER_11",
        title: "ORIGINAL CHICKEN WINGS AND ITALIAN MINI SAUSAGE",
        price: 64,
        description:
          "Enjoy classic taste of original chicken wings and mini sausage",
        image: "/pizza_products_webp/STARTER_11.webp",
      },
      {
        id: "STARTER_12",
        title: "SPICY CHICKEN WINGS AND ITALIAN MINI SAUSAGE",
        price: 64,
        description:
          "Enjoy classic taste of spicy chicken wings and mini sausage",
        image: "/pizza_products_webp/STARTER_12.webp",
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
        image: "/pizza_products_webp/PASTA_08.webp",
      },
      {
        id: "PASTA_1",
        title: "SPAGHETTI BOLOGNESE (BEEF)",
        price: 73,
        description:
          "Your choice of spaghetti tossed with minced meat baked in a rich homemade Tomato Sauce",
        image: "/pizza_products_webp/PASTA_01.webp",
      },
      {
        id: "PASTA_2",
        title: "SEAFOOD FETTUCCINE",
        price: 88,
        description: "With mouth-watering white Cream Garlic Sauce",
        image: "/pizza_products_webp/PASTA_02.webp",
      },
      {
        id: "PASTA_9",
        title: "SPAGHETTI AMERICANA",
        price: 63,
        description: "Pizza Hut's all time signature spaghetti dish",
        image: "/pizza_products_webp/PASTA_09.webp",
      },
      {
        id: "PASTA_3",
        title: "BAKED SPINACH AND MUSHROOM PENNE WITH CHEESE",
        price: 68,
        description:
          "Baked penne with spinach and mushroom in cheesy white sauce",
        image: "/pizza_products_webp/PASTA_03.webp",
      },
      {
        id: "PASTA_4",
        title: "BAKED SPINACH AND MUSHROOM PENNE WITH CHEESE",
        price: 68,
        description:
          "Baked penne with spinach and mushroom in cheesy white sauce",
        image: "/pizza_products_webp/PASTA_04.webp",
      },
      {
        id: "PASTA_5",
        title: "ITALIAN CHICKEN SPAGHETTI",
        price: 82,
        description:
          "Creamy and savory spaghetti with herb baked chicken and basil infused cream sauce",
        image: "/pizza_products_webp/PASTA_05.webp",
      },
      {
        id: "PASTA_6",
        title: "PRAWNS AND BABY SCALLOP RICE",
        price: 78,
        description:
          "Baked rice with Prawns and Baby Scallop in rich tomato sauce",
        image: "/pizza_products_webp/PASTA_06.webp",
      },
      {
        id: "PASTA_7",
        title: "SEAFOOD RICE DORIA",
        price: 88,
        description:
          "Baked rice with premium seafood in French white Cheddar Cheese Sauce",
        image: "/pizza_products_webp/PASTA_07.webp",
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
        image: "/pizza_products_webp/DRINK_01.webp",
      },
      {
        id: "DRINK_2",
        title: "PEPSI -CAN",
        price: 10,
        description: "Can (330ml)",
        image: "/pizza_products_webp/DRINK_02.webp",
      },
      {
        id: "DRINK_3",
        title: "7 UP -CAN",
        price: 10,
        description: "Can (330ml)",
        image: "/pizza_products_webp/DRINK_03.webp",
      },
      {
        id: "DRINK_4",
        title: "OREO CHOCOLATE PARFAIT",
        price: 25,
        description: "Oreo Chocolate Parfait",
        image: "/pizza_products_webp/DRINK_04.webp",
      },
      {
        id: "DRINK_5",
        title: "SOUFFLÉ CHEESE CAKE",
        price: 32,
        description: "",
        image: "/pizza_products_webp/DRINK_05.webp",
      },
    ],
  },
  {
    // Not a public category, these are item exclusive for value deals options in combo
    category: "VALUEDEAL",
    items: [
      {
        id: "VALUEDEAL_STARTER_1",
        title: "RUSSIAN SALAD",
        price: 40,
        description:
          "Refreshing crispy lettuce and well seasoned shrimp potato salad (Not available during 19-20 June)",
        image: "/pizza_products_webp/STARTER_01.webp",
      },
      {
        id: "VALUEDEAL_STARTER_2",
        title: "GARDEN SALAD",
        price: 33,
        description:
          "Refreshing ingredient with savory Thousand Island Sauce(Not available during 19-20 June)",
        image: "/pizza_products_webp/STARTER_02.webp",
      },
      {
        id: "VALUEDEAL_STARTER_3",
        title: "GARLIC BREAD",
        price: 36,
        description:
          "Signature oven-baked sesame seed bun with hot buttery garlic spread",
        image: "/pizza_products_webp/STARTER_03.webp",
      },
      {
        id: "VALUEDEAL_STARTER_5",
        title: "NAPOLI MEATBALL",
        price: 69,
        description: "Juicy meatball with Napoli Sauce",
        image: "/pizza_products_webp/STARTER_05.webp",
      },
      {
        id: "VALUEDEAL_STARTER_6",
        title: "MASHED POTATO WITH BACON",
        price: 46,
        description: "Mellow mashed potato with bacon",
        image: "/pizza_products_webp/STARTER_06.webp",
      },
      {
        id: "VALUEDEAL_STARTER_7",
        title: "CHICKEN WINGS",
        price: 36,
        description: "Roasted savory chicken wings",
        image: "/pizza_products_webp/STARTER_07.webp",
      },
      {
        id: "VALUEDEAL_DRINK_1",
        title: "MUSHROOM SOUP",
        price: 29,
        description: "A creamy soup with chicken and mushroom",
        image: "/pizza_products_webp/DRINK_01.webp",
      },
      {
        id: "VALUEDEAL_DRINK_2",
        title: "PEPSI -CAN",
        price: 10,
        description: "Can (330ml)",
        image: "/pizza_products_webp/DRINK_02.webp",
      },
      {
        id: "VALUEDEAL_DRINK_3",
        title: "7 UP -CAN",
        price: 10,
        description: "Can (330ml)",
        image: "/pizza_products_webp/DRINK_03.webp",
      },
      {
        id: "VALUEDEAL_DRINK_4",
        title: "OREO CHOCOLATE PARFAIT",
        price: 25,
        description: "Oreo Chocolate Parfait",
        image: "/pizza_products_webp/DRINK_04.webp",
      },
      {
        id: "VALUEDEAL_DRINK_5",
        title: "SOUFFLÉ CHEESE CAKE",
        price: 32,
        description: "",
        image: "/pizza_products_webp/DRINK_05.webp",
      },
      {
        id: "VALUEDEAL_STARTER_9",
        title: "CRISPY SHRIMP(8PCS)",
        price: 70,
        description: "Tasty shrimp with crispy outside",
        image: "/pizza_products_webp/STARTER_09.webp",
      },
      {
        id: "VALUEDEAL_STARTER_11",
        title: "ORIGINAL CHICKEN WINGS AND ITALIAN MINI SAUSAGE",
        price: 64,
        description:
          "Enjoy classic taste of original chicken wings and mini sausage",
        image: "/pizza_products_webp/STARTER_11.webp",
      },
      {
        id: "VALUEDEAL_STARTER_12",
        title: "SPICY CHICKEN WINGS AND ITALIAN MINI SAUSAGE",
        price: 64,
        description:
          "Enjoy classic taste of spicy chicken wings and mini sausage",
        image: "/pizza_products_webp/STARTER_12.webp",
      },
    ]
  },
  {
    category: 'UNPUBLISHED',
    items: [
      {
        id: "UNPUBLISHED_NODRINK",
        title: "NO DRINKS",
        price: 0,
        description: "",
        image: "/pizza_products_webp/BOX_nodrink.webp",
      },
      {
        id: "UNPUBLISHED_BOX-STARTER-A",
        title: "CRISPY SHRIMPS (3 PCS)",
        price: 64,
        description: "Tasty shrimps with crispy outside",
        image: "/pizza_products_webp/BOX_starterA.webp",
      },
      {
        id: "UNPUBLISHED_BOX-STARTER-B",
        title: "ITALIAN MINI SAUSAGE (3 PCS) AND POTATO WAFFLE",
        price: 64,
        description: "Crispy potato waffle with classic mini sausage. Every bites, every satisfaction",
        image: "/pizza_products_webp/BOX_starterB.webp",
      },
      {
        id: "UNPUBLISHED_BOX-STARTER-C",
        title: "CRISPY CHICKEN STRIPS (3PCS)",
        price: 64,
        description: "Deep fried crunchy chicken strips yet juicy and tender",
        image: "/pizza_products_webp/BOX_starterC.webp",
      },
      {
        id: "UNPUBLISHED_BOX-PIZZA-1-PAN",
        title: "HAWAIIAN PARADISE MINI PAN PIZZA",
        price: 64,
        description: "Ham, Pineapple and Tomato Sauce",
        image: "/pizza_products_webp/BOX_01_pizza.webp",
      },
      {
        id: "UNPUBLISHED_BOX-PIZZA-1-CRISPY",
        title: "HAWAIIAN PARADISE MINI THIN'N CRISPY PIZZA",
        price: 64,
        description: "Ham, Pineapple and Tomato Sauce",
        image: "/pizza_products_webp/BOX_01_pizza.webp",
      },
      {
        id: "UNPUBLISHED_BOX-PIZZA-1-STUFFED-CRUST",
        title: "HAWAIIAN PARADISE MINI STUFFED CRUST PIZZA",
        price: 64,
        description: "Ham, Pineapple and Tomato Sauce",
        image: "/pizza_products_webp/BOX_01_pizza.webp",
      },
      {
        id: "UNPUBLISHED_BOX-PIZZA-1-GOLDEN-CRUST",
        title: "HAWAIIAN PARADISE MINI GOLDEN CRUST PIZZA",
        price: 64,
        description: "Ham, Pineapple and Tomato Sauce",
        image: "/pizza_products_webp/BOX_01_pizza.webp",
      },
      {
        id: "UNPUBLISHED_BOX-PIZZA-2-PAN",
        title: "SUPREME PAN PIZZA",
        price: 64,
        description: "Beef, Pork, Green Pepper, Mushroom, Pepperoni, Onion and Tomato Sauce",
        image: "/pizza_products_webp/BOX_02_pizza.webp",
      },
      {
        id: "UNPUBLISHED_BOX-PIZZA-2-CRISPY",
        title: "SUPREME THIN'N CRISPY PIZZA",
        price: 64,
        description: "Beef, Pork, Green Pepper, Mushroom, Pepperoni, Onion and Tomato Sauce",
        image: "/pizza_products_webp/BOX_02_pizza.webp",
      },
      {
        id: "UNPUBLISHED_BOX-PIZZA-2-STUFFED-CRUST",
        title: "SUPREME STUFFED CRUST PIZZA",
        price: 64,
        description: "Beef, Pork, Green Pepper, Mushroom, Pepperoni, Onion and Tomato Sauce",
        image: "/pizza_products_webp/BOX_02_pizza.webp",
      },
      {
        id: "UNPUBLISHED_BOX-PIZZA-2-GOLDEN-CRUST",
        title: "SUPREME GOLDEN CRUST PIZZA",
        price: 64,
        description: "Beef, Pork, Green Pepper, Mushroom, Pepperoni, Onion and Tomato Sauce",
        image: "/pizza_products_webp/BOX_02_pizza.webp",
      },
      {
        id: "UNPUBLISHED_BOX-PIZZA-3-PAN",
        title: "THOUSAND ISLAND SEAFOOD MINI PAN PIZZA",
        price: 64,
        description: "Seafood, Tuna, Pineapple, Green Bell Pepper, Red Bell Pepper and Thousand Island Sauce",
        image: "/pizza_products_webp/BOX_03_pizza.webp",
      },
      {
        id: "UNPUBLISHED_BOX-PIZZA-3-CRISPY",
        title: "THOUSAND ISLAND SEAFOOD MINI THIN'N CRISPY PIZZA",
        price: 64,
        description: "Seafood, Tuna, Pineapple, Green Bell Pepper, Red Bell Pepper and Thousand Island Sauce",
        image: "/pizza_products_webp/BOX_03_pizza.webp",
      },
      {
        id: "UNPUBLISHED_BOX-PIZZA-3-STUFFED-CRUST",
        title: "THOUSAND ISLAND SEAFOOD MINI STUFFED CRUST PIZZA",
        price: 64,
        description: "Seafood, Tuna, Pineapple, Green Bell Pepper, Red Bell Pepper and Thousand Island Sauce",
        image: "/pizza_products_webp/BOX_03_pizza.webp",
      },
      {
        id: "UNPUBLISHED_BOX-PIZZA-3-GOLDEN-CRUST",
        title: "THOUSAND ISLAND SEAFOOD MINI GOLDEN CRUST PIZZA",
        price: 64,
        description: "Seafood, Tuna, Pineapple, Green Bell Pepper, Red Bell Pepper and Thousand Island Sauce",
        image: "/pizza_products_webp/BOX_03_pizza.webp",
      },
      {
        id: "UNPUBLISHED_BOX-PIZZA-4-PAN",
        title: "CHICKEN MUSHROOM MINI PAN PIZZA",
        price: 64,
        description: "Mushroom, Onion, White Sauce",
        image: "/pizza_products_webp/BOX_04_pizza.webp",
      },
      {
        id: "UNPUBLISHED_BOX-PIZZA-4-CRISPY",
        title: "CHICKEN MUSHROOM MINI THIN'N CRISPY PIZZA",
        price: 64,
        description: "Mushroom, Onion, White Sauce",
        image: "/pizza_products_webp/BOX_04_pizza.webp",
      },
      {
        id: "UNPUBLISHED_BOX-PIZZA-4-STUFFED-CRUST",
        title: "CHICKEN MUSHROOM MINI STUFFED CRUST PIZZA",
        price: 64,
        description: "Mushroom, Onion, White Sauce",
        image: "/pizza_products_webp/BOX_04_pizza.webp",
      },
      {
        id: "UNPUBLISHED_BOX-PIZZA-4-GOLDEN-CRUST",
        title: "CHICKEN MUSHROOM MINI GOLDEN CRUST PIZZA",
        price: 64,
        description: "Mushroom, Onion, White Sauce",
        image: "/pizza_products_webp/BOX_04_pizza.webp",
      },
    ]
  }
];

const filteredMeals = (criteria) => {
  return mealList.filter((x) => x.category === criteria)[0].items;
};

export default function Meals(props) {
  const modalOpenHandler = (item) => {
    props.onModalOpen(item, mealList);
  };

  return (
    <div className={styles.meals}>
      <div className={styles.intro}>
        <img src={titleRibbon} alt="" />
        <h3>{props.activeSection}</h3>
      </div>

      <div className={styles.mealList}>
        {/* Show menu based on active section */}
        {props.activeSection === "COMBO" &&
          filteredMeals("COMBO").map((x) => (
            <MealItem
              key={"Combo" + x.id}
              meal={x}
              onModalOpen={modalOpenHandler}
              large="true"
            />
          ))}
        {props.activeSection === "MY BOX" && 
          filteredMeals("BOX").map((x) => (
            <MealItem key={x.id} meal={x} onModalOpen={modalOpenHandler} large="true" />
          ))}
        {props.activeSection === "PIZZA" &&
          filteredMeals("PIZZA").map((x) => (
            <MealItem key={x.id} meal={x} onModalOpen={modalOpenHandler} />
          ))}
        {props.activeSection === "PASTA & RICE" &&
          filteredMeals("PASTA & RICE").map((x) => (
            <MealItem key={x.id} meal={x} />
          ))}
        {props.activeSection === "STARTER" &&
          filteredMeals("STARTER").map((x) => <MealItem key={x.id} meal={x} />)}
        {props.activeSection === "DRINK & DESSERT" &&
          filteredMeals("DRINK & DESSERT").map((x) => (
            <MealItem key={x.id} meal={x} />
          ))}
      </div>
    </div>
  );
}
