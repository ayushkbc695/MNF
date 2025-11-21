import React, { useState } from 'react'
import '../ComponentCSS/SingleProduct.css'

const SingleProduct = ({ product }) => {
    const [toastMsg, setToastMsg] = useState('')

    if (!product) return null;

    const showToast = (message) => {
        setToastMsg(message);
        setTimeout(() => setToastMsg(''), 2000);
    };

    // ✅ send product info to HomeSect
    const handleViewProduct = () => {
        window.dispatchEvent(new CustomEvent('viewProductDetail', { detail: product }));
    };

    return (
        <>
            {toastMsg && <div className="toast">{toastMsg}</div>}

            <div className="product-box" onClick={handleViewProduct}>
                <div className="product-img">
                    <img src={product.image} alt={product.alt || product.name} />
                    <button className="cart-btn">+</button>
                </div>

                <div className="product-details">
                    <h3 className="product-name">{product.name}</h3>
                    <p className="product-category">{product.category}</p>
                    <p className="product-description">{product.description}</p>
                    <div className="product-price">
                        <span>₹{product.price}</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleProduct;