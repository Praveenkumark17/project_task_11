import React from "react";
import { Link } from "react-router-dom";
import './nav.css';

export default function Nav(props){

    const cart = props.cartdot;

    // const olddata = localStorage.getItem('prolist');

    return(
        <>
            <nav className="navbar navbar-expand-lg nav-style sticky-top px-3">
                <div className="container-fluid">
                    <Link className="navbar-brand fs-3 fw-semibold" to={'/'}><i className="fa-solid fa-alien-8bit"></i> Magical Games</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav menu d-flex align-items-center justify-content-between">
                            <div className="icon-input">
                                <p className="icon m-0"><i className="fa-solid fa-magnifying-glass"></i></p>
                                <input className="input px-3" placeholder='Search now'/>
                            </div>
                            <div className="d-flex align-items-center fs-3">
                                <Link to={'/'} className="link" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Sign In"><i className="fa-regular fa-house me-4"></i></Link>
                                <Link to={'/products'} className="link"><i className="fa-regular fa-gamepad-modern me-4"></i></Link>
                                <Link to={'/cart'} className="link position-relative">
                                    <i className="fa-regular fa-cart-shopping"></i>
                                    {cart?<span className="position-absolute start-100 translate-middle p-1 bg-danger rounded-circle cart-dot"></span>:null}
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}