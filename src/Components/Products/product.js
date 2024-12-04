import React, { useEffect, useState } from "react";
import "./product.css";
import Nav from "../nav";
import Footer from "../footer";
import { HashLoader } from "react-spinners";

export default function Product() {

  const [local,setLocal] = useState();

  const [cartdot,setCartdot] = useState(false);

  const olddata = localStorage.getItem('prolist');

  const products = [
    {
      id: 1,
      title: "Fortnite",
      type: "Adventure",
      price: 3332,
      cart: false,
      img: "game game1",
    },
    {
      id: 2,
      title: "PUBG Battleground",
      type: "Adventure",
      price: 2500,
      cart: false,
      img: "game game2",
    },
    {
      id: 3,
      title: "NFS Unbound",
      type: "Racing",
      price: 3499,
      cart: false,
      img: "game game3",
    },
    {
      id: 4,
      title: "Asphalt 9",
      type: "Racing",
      price: 1000,
      cart: false,
      img: "game game4",
    },
    {
      id: 5,
      title: "GTA 5",
      type: "Adventure",
      price: 2500,
      cart: false,
      img: "game game5",
    },
    {
      id: 6,
      title: "Minecraft",
      type: "Sandbox",
      price: 3500,
      cart: false,
      img: "game game6",
    },
    {
      id: 7,
      title: "Black Myth",
      type: "Fighting",
      price: 3150,
      cart: false,
      img: "game game7",
    },
    {
      id: 8,
      title: "God Of War",
      type: "Adventure",
      price: 3999,
      cart: false,
      img: "game game8",
    },
  ];

  useEffect(()=>{
    setTimeout(() => {
      if(olddata){
        setLocal(JSON.parse(olddata));
        console.log('old data:',JSON.parse(olddata));
      }else{
        localStorage.setItem('prolist',JSON.stringify(products));
        const newdata = localStorage.getItem('prolist');
        console.log('get value:',JSON.parse(newdata))
        if(newdata){
              setLocal(JSON.parse(newdata));
          }
      }
    }, 1000);
  },[])



  const onAddcart = (id) =>{
    console.log('id:',id);

    const updateproduct = local.map((product)=>{
      if(product.id === id){
        return {...product,cart:!product.cart}
      }
      return product;
    })
    localStorage.setItem('prolist',JSON.stringify(updateproduct));
    setLocal(updateproduct);
    setCartdot(true);

    console.log('updated:',updateproduct)
    
  }

  return (
    <>
      <div className="product-main">
        <Nav cartdot={cartdot}/>
        <div className="pro-title mx-auto mt-4 d-flex align-items-center justify-content-center">
        <p className="m-0 fs-4 fw-semibold game-title">Latest Games</p>
        </div>
        <div className="container-fluid d-flex justify-content-center pt-4 pb-5 product-cont">
          {local?<div className="product-list">
            {local.map((list) => (
              <div key={list.id} className="product1">
                <div className={list.img}></div>
                <div>
                  <p className="m-0 mt-2 mb-2 fw-semibold text-secondary">
                    {list.type}
                  </p>
                </div>
                <div>
                  <p className="m-0 fs-5 fw-semibold">{list.title}</p>
                </div>
                <div>
                  <p className="m-0 mt-3 fs-6 fw-semibold">{`₹ ${list.price}`}</p>
                </div>
                <div className="mt-3">
                  <button className="buy fw-semibold fs-6">Buy Now</button>
                  <button className="cart" onClick={()=>onAddcart(list.id)} style={list.cart?{backgroundColor:'black',color:'wheat'}:{backgroundColor:'#d7ecfb',color:'black'}}>
                    <i className="fa-regular fa-cart-shopping"></i>
                  </button>
                </div>
              </div>
            ))}
          </div>:<div className="loader"><HashLoader size={150} color="#001360"></HashLoader><h2 className="mt-2">Loading...</h2></div>}
        </div>
        <Footer />
      </div>
    </>
  );
}
