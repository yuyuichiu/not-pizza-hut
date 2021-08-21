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
<< Desktop, Tablet, Mobile >>

## Logic behind the scene
<< explain your code for important features here >>
