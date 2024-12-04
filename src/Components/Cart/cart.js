import React, { useEffect, useState } from "react";
import Nav from "../nav";
import Footer from "../footer";
import "./cart.css";
import { Link } from "react-router-dom";

export default function Cart() {
  const [cartdata, setCartdata] = useState([]);
  const [trigger,setTrigger] = useState(false);

  const olddata = localStorage.getItem("prolist");
  const data = JSON.parse(olddata);

  useEffect(() => {
    if (data) {
      const filterdata = data.filter((data) => data.cart);
      const updatedCartData = filterdata.map((item) => {
        return { ...item };
      });
      setCartdata(updatedCartData);
      // console.log('cart data:',filterdata)
    }
  }, [trigger,data]);

  const totalPrice = cartdata.reduce((sum, val) => sum + val.price,0);
  const finaltotal = totalPrice + 50;

  console.log("cart value:", cartdata);

  const onRemove = (id) =>{
    console.log('remove id:',id)

    const updatecart = data.map((cart)=>{
      if(cart.id === id){
        return {...cart,cart:!cart.cart}
      }
      return cart;
    })
    localStorage.setItem('prolist',JSON.stringify(updatecart));

    console.log('updated:',updatecart)

    setTrigger(!trigger);

  }

  const game = {
    height: "130px",
    width: "130px",
    border:'2px solid #001360',
    borderRadius:'5px'
  };

  return (
    <>
      <div className="cart-main">
        <Nav cartdot={false}/>
        <div className="container cart-title d-flex align-items-center justify-content-center my-4">
          <p className="m-0 fs-4 fw-semibold">Shopping Cart</p>
        </div>
        <div className="cart-list">
          <div className="empty-cart container mb-4 px-4">
            {cartdata.length !== 0 ? (
              <div className="box">
                <div className="cart-box">
                  <div className="pt-3 mb-2 d-flex justify-content-between fs-6 fw-semibold cart-box-title">
                    <p className="m-0">
                      You have {cartdata.length} items in your cart
                    </p>
                    <p className="m-0">
                      Short by:
                      <span className="short ms-2">
                        price <i className="fa-solid fa-chevron-down"></i>
                      </span>
                    </p>
                  </div>
                  <div className="line"></div>
                  <div className="list-title text-center mt-3 text-light fw-semibold">
                    <p>Item</p>
                    <p>Name</p>
                    <p>Price</p>
                    <p>Remove</p>
                  </div>
                  <div className="list-item">
                    {cartdata.map((value) => (
                      <div key={value.id} className="cart-games mb-2 p-2">
                        <div className={value.img} style={game}></div>
                        <p className="d-flex align-items-center justify-content-center fs-6 fw-semibold">{value.title}</p>
                        <p className="d-flex align-items-center justify-content-center fs-6 fw-semibold">{`₹ ${value.price}`}</p>
                        <p className="d-flex align-items-center justify-content-center fs-5 fw-semibold cart-remove" onClick={()=>onRemove(value.id)}><i className="fa-solid fa-trash"></i></p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="pay-box container mt-3 p-3">
                  <div className="d-flex justify-content-between fw-semibold mb-1">
                    <p className="m-0">Sub Total</p>
                    <p className="m-0">{`₹ ${totalPrice}`}</p>
                  </div>
                  <div className="d-flex justify-content-between fw-semibold mb-1">
                    <p className="m-0">Shipping</p>
                    <p className="m-0">₹ 50</p>
                  </div>
                  <div className="d-flex justify-content-between fw-semibold mb-1">
                    <p className="m-0">Total</p>
                    <p className="m-0">{`₹ ${finaltotal}`}</p>
                  </div>
                  <div className="line" style={{backgroundColor:'#001360'}}></div>
                  <div className="mt-2 d-flex justify-content-between align-items-center">
                    <p className="m-0 fs-5 fw-semibold">Card details</p>
                    <div className="cart-profile"></div>
                  </div>
                  <div className="mb-3">
                    <p className="fw-semibold mb-1">Card Type</p>
                    <div className="fs-3 d-flex gap-1" style={{color:'#001360'}}>
                      <i className="fa-brands fa-cc-amazon-pay"></i>
                      <i className="fa-brands fa-cc-visa"></i>
                      <i className="fa-brands fa-cc-apple-pay"></i>
                      <i className="fa-brands fa-cc-mastercard"></i>
                      <i className="fa-brands fa-cc-paypal"></i>
                    </div>
                  </div>
                  <div className="mb-1">
                    <input className="mb-2 card-input" placeholder="Card holder's name"/>
                    <input className="mb-1 card-input" placeholder="Card number"/>
                    <div className="d-flex gap-2 mt-1">
                      <input className="mb-1 card-input" placeholder="Expire date"/>
                      <input className="mb-1 card-input" placeholder="Cvv"/>
                    </div>
                  </div>
                  <div>
                    <button className="card-btn mb-1">Place Order</button>
                    <Link to={'/products'}><button className="card-btn">Continue Shopping</button></Link>
                  </div>
                </div>
              </div>
            ) : (
              <div className="d-flex justify-content-center align-items-center my-auto h-100">
                <p className="fs-4 fw-semibold" style={{color:'#001360'}}>
                  Your cart empty !!!
                </p>
              </div>
            )}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
