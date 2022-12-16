import logo from "./logo.svg";

import "./App.css";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import Card from "./card";

import Cart from "./cart";

import { useState } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {faCartShopping } from '@fortawesome/free-solid-svg-icons'


function App() {

  const [products, setproducts] = useState( [

    {
      id: 1,
      name: "xiaomi 11i",
      price:24999,
      img: "https://th.bing.com/th/id/OIP.EZWiCGQmclEVCAdoq4tPuQHaHa?pid=ImgDet&rs=1",
    },

    {
      id: 2,
      name: "One plus ",
      price: 1999,
      img: "https://rukminim1.flixcart.com/image/832/832/kg8avm80-0/headphone/2/p/r/e304a-oneplus-original-imafwgkvchwhf63s.jpeg?q=70",
    },

    {
      id: 3,
      name: "Boat airdopes 441",
      price: 1799,
      img: "https://electromania.co.in/wp-content/uploads/2021/01/Boat-Airdopes-441-Red-4.jpg",
    },

    {
      id: 4,
      name: "Redmi note 11 pro+ 5G",
      price: 21999,
      img: "https://jbm.pl/environment/cache/images/500_500_productGfx_61683/Smartfon-XIAOMI-Redmi-Note-11-Pro-6-128GB-Grafitowy-tyl-front.webp",
    },

    {
      id: 5,
      name:"Lenovo Aio ideacenter 3",
      price: 54999,
      img: "https://www.elgiganten.dk/image/dv_web_D180001002770728/308872/lenovo-ideacentre-aio-3-27alc6-all-in-one-computer-r516512uma27.jpg?$fullsize$",
    },

    {
      id: 6,
      name: "Redmi smart band 6",
      price: 3499,
      img: "https://images.news18.com/ibnlive/uploads/2022/02/mi-band-6.png",
    },

    {
      id: 7,
      name: "V2A sports",
      price: 999,
      img: "https://n4.sdlcdn.com/imgs/i/5/k/V2A-S-Shock-Sports-PU-SDL843914795-2-14ef5.jpg",
    },

    {
      id: 8,
      name: "HIT Racket",
      price: 499,
      img: "https://www.bigbasket.com/media/uploads/p/l/40174570-4_2-hit-anti-mosquito-racquet-rechargeable-insect-killer-bat-with-led-light.jpg",
    },


  ]);
  const [cartItems, setcartItems] = useState([]);

  let m = (v) => {

    setcartItems([...cartItems, v]);

  };

  let removeFromCart = (v) => {

    const indexValue = cartItems.findIndex((obj) => obj.id === v.id);

    cartItems.splice(indexValue, 1);

    setcartItems([...v]);

  };

  return (

    <div className="container">

      <div className="row">

        <nav class="navbar navbar-expand-lg navbar-light bg-light">

          <div class="container px-5 px-lg-5">

            <a class="navbar-brand" href="#!">
              HOME 
              About 
              Shop
            </a>

          </div>

        </nav>



        <header class="bg-dark py-5">

          <div class="container px-5 px-lg-5 my-5">

            <div class="text-center text-white">

              <h1 class="display-4 fw-bolder">Shop in style</h1>

              <p class="lead fw-normal text-white-50 mb-0">

                With this shop hompeage template

              </p>

            </div>

          </div>

        </header>




        <div className="col-lg-8">

          <div className="row">

            {products.map((product) => {

              return <Card v={product} addTocart={m} cartItems={cartItems}></Card>;

            })}

          </div>

        </div>

        <div className="col-lg-5">

          <div className="border border-dark">

            <div className="text-center">

            <h2>Cart <FontAwesomeIcon icon= {faCartShopping} /></h2>

          </div>

          </div>

          <Cart cartItems={cartItems} removeFromCart={removeFromCart}></Cart>

        </div>

      </div>

    </div>

  );

}

export default App;