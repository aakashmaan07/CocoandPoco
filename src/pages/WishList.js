import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout/layout';
import axios from 'axios';
import { useAuth } from '../context/auth';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useWishlist } from '../context/wishlist';
import { useCart } from '../context/cart';
import "../styles/Wishlist.css"

const WishList = () => {
    const [wishlist, setWishlist] = useWishlist()
    const [auth, setAuth] = useAuth()
    const navigate = useNavigate()
    const [clientToken, setClientToken] = useState("")
    const [instance, setInstance] = useState("")
    const [loading, setLoading] = useState(false)
    const [cart, setCart] = useCart();

    //detele item
    const removeWishlistItem = (pid) => {
        try {
            let myWishlist = [...wishlist];
            let index = myWishlist.findIndex((item) => item._id === pid);
            myWishlist.splice(index, 1);
            setWishlist(myWishlist);
            localStorage.setItem("wishlist", JSON.stringify(myWishlist));
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Layout>
            <div className="wishlist-page">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="text-center bg-light p-2 mb-1">
                            {!auth?.user
                                ? "Hello Guest"
                                : `Hello  ${auth?.token && auth?.user?.name}`}
                            <p className="text-center">
                                {cart?.length
                                    ? `You Have ${wishlist.length} items in your wishlist ${auth?.token ? "" : "please login to checkout !"
                                    }`
                                    : " Your Cart Is Empty"}
                            </p>
                        </h1>
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="d-flex flex-wrap">
                        {wishlist?.map((p) => (
                            <div className="card m-2" key={p._id}>
                                <img
                                    src={`/api/v1/product/product-photo/${p._id}`}
                                    className="card-img-top"
                                    alt={p.name}
                                />
                                <div className="card-body">
                                    <div className="card-name-price">
                                        <h5 className="card-title">{p.name}</h5>

                                        <h5 className="card-title card-price">
                                            {p.price.toLocaleString("en-US", {
                                                style: "currency",
                                                currency: "USD",
                                            })}
                                        </h5>
                                    </div>
                                    <div className="card-name-price">
                                        <button
                                            className="btn-card btn-dark ms-1"
                                            onClick={() => {
                                                setCart([...cart, p]);
                                                localStorage.setItem(
                                                    "cart",
                                                    JSON.stringify([...cart, p])
                                                );
                                                toast.success("Item Added to cart");
                                            }}
                                        >
                                            Add to Cart
                                        </button>
                                        <button
                                            className="btn-remove btn-danger"
                                            onClick={() => removeWishlistItem(p._id)}
                                            id='remove-button'
                                        >
                                            Remove
                                        </button>
                                    </div>



                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default WishList;
