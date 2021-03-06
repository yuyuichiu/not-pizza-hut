# Not Pizza Hut 🍕  ![](https://img.shields.io/github/last-commit/yuyuichiu/not-pizza-hut?style=flat-square)
Live on https://not-pizzahut.netlify.app/

This is a React version replica of the offical pizza hut. It mimics the functionality and design of the Pizza Hut food order website to build a website that looks just like the real deal. A fun project to train my React skills.

No real payment and real pizza involved. Just for my educational use only :)

## Technologies used
> Javascript, React.js (Hooks), npm, Firebase for backend server, CSS modules, Netlify (web hosting)

React.js is used because it allow a smoother web browsing experience and provides better performance, and the original site is not build upon it. Thus, I think it is a great oppounity to rebuild the site with React as a challenge for myself.

## Tell me about this website
This website contains features you need to put an order through the internet, implemented through React and Javascript logics.

#### Food Ordering & Cart system
On top of choosing what to order, user can choose subitems / customize their order dynaically based on their preference.

![cart and ordering](https://media.giphy.com/media/H3VnHjgSTqSHNkFRmp/giphy.gif?cid=790b7611815f6ba545faf25a2ae783a474748c0fa948ffd1&rid=giphy.gif&ct=g)


#### Checkout - Communicates to the backend server
Although there is no real payment involved, the order data will be sent to the database just like how the real orders do. With HTTP request and the fetch API, This website sends the POST request to the server when an order is confirmed, by which the server records the order.

This website has provided an option to fetch server data and print them on the console, so you see how the order has been stored on the Firebase server

![checkout](https://media.giphy.com/media/MSSrNptMzzwUcjHxhK/giphy.gif?cid=790b761162669406df0b3eb5de609a01546b64be60746788&rid=giphy.gif&ct=g)
![backend](https://media.giphy.com/media/jrfUwlhKnM0I8F3vEU/giphy.gif?cid=790b761109afdb81cac940c4646ddb4e932946be6a01942b&rid=giphy.gif&ct=g)

#### Responsive Design
Layout of the website is responsive to different screen sizes. 

<div>
  <img src="https://upload.cc/i1/2021/08/22/bm0HnO.jpeg" width="150px" />
  <img src="https://upload.cc/i1/2021/08/22/e0NGyS.png" height="300px" />
</div>

## Logic behind the scene
This website is built upon the React.js Library. It utilizes components to separate code blocks into reusable components and manages the app status with Hooks like props and state. I have used function & hooks instead of class components because the <a href="https://reactjs.org/docs/hooks-faq.html#should-i-use-hooks-classes-or-a-mix-of-both">React offical site recommands it.</a>

Multiple advanced Hook concepts is applied onto this project. The cart state is managed with useReducer to handle complex logic, and deliverd with useContext & Provider to make it more assessible to other components without passing too much props (~Redux). The HTTP fetch and input validation is handled by custom written Hooks (useHttp in use-http.js & useInput in use-input.js) to make them reusable and convenient to use. 

Module CSS is used to manage CSS of each component to ensure they do not accidentally collide with each other. The responive layout is made possible thanks to media query to adjust flex size and other various properties based on screen size.


### Future plan on additions
* Playing with actual Paypal payment
* Option to choose pick up time and location instead of delivery only (Google map to display store locations)
* Applying Coupon code
* Put food menu on the server (I wrote the menu on client-side code and I am too lazy to rewrite them on the server :P)
