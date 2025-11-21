import React, { useEffect, useState } from 'react'
import '../ComponentCSS/HomeSect.css'
import { ResturantIG } from '../assets/assest'
import { assets } from '../assets/assests1'
import SingleProduct from './SingleProduct'

const HomeSect = () => {
    const [activeSection, setActiveSection] = useState('onprocess')
    const [toastMsg, setToastMsg] = useState('')
    const [quantity, setQuantity] = useState(1) // ✅ for selected product quantity

    // ✅ Restore OrderDetail visibility
    const [showOrderDetail, setShowOrderDetail] = useState(() => {
        const saved = localStorage.getItem('showOrderDetail')
        return saved === null ? true : JSON.parse(saved)
    })

    // ✅ Restore selectedProduct
    const [selectedProduct, setSelectedProduct] = useState(() => {
        const savedProduct = localStorage.getItem('selectedProduct')
        return savedProduct ? JSON.parse(savedProduct) : null
    })

    // ✅ Save visibility state
    useEffect(() => {
        localStorage.setItem('showOrderDetail', JSON.stringify(showOrderDetail))
    }, [showOrderDetail])

    // ✅ Save selected product
    useEffect(() => {
        if (selectedProduct) {
            localStorage.setItem('selectedProduct', JSON.stringify(selectedProduct))
        } else {
            localStorage.removeItem('selectedProduct')
        }
    }, [selectedProduct])

    // ✅ Listen for Navbar “Order Tracking”
    useEffect(() => {
        const handleOpenOrder = () => {
            setSelectedProduct(null)
            setShowOrderDetail(true)
            localStorage.setItem('showOrderDetail', JSON.stringify(true))
        }

        window.addEventListener('openOrderDetail', handleOpenOrder)
        return () => window.removeEventListener('openOrderDetail', handleOpenOrder)
    }, [])

    // ✅ Listen for product click
    useEffect(() => {
        const handleViewProduct = (e) => {
            const product = e.detail
            setSelectedProduct(product)
            setQuantity(1) // reset qty
            setShowOrderDetail(false)
            localStorage.setItem('selectedProduct', JSON.stringify(product))
            localStorage.setItem('showOrderDetail', JSON.stringify(false))
        }

        window.addEventListener('viewProductDetail', handleViewProduct)
        return () => window.removeEventListener('viewProductDetail', handleViewProduct)
    }, [])

    // ✅ Toast Function
    const showToast = (msg) => {
        setToastMsg(msg)
        setTimeout(() => setToastMsg(''), 2000)
    }

    // ✅ Handle Quantity Buttons
    const increaseQty = () => setQuantity(prev => prev + 1)
    const decreaseQty = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1))

    // ✅ Add to Cart
    const handleAddToCart = (product, quantity) => {
        const savedCart = JSON.parse(localStorage.getItem('cartItems')) || []
        const existingItem = savedCart.find(item => item.id === product.id)

        const newItem = {
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            description: product.description,
            category: product.category,
            quantity: quantity,
        }

        if (existingItem) {
            existingItem.quantity += quantity
            showToast(`Updated ${product.name} quantity 🛒`)
        } else {
            savedCart.push(newItem)
            showToast(`${product.name} added to cart 🛒`)
        }

        localStorage.setItem('cartItems', JSON.stringify(savedCart))
        window.dispatchEvent(new Event('cartUpdated'))
    }

    return (
        <>
            {/* ✅ Toast */}
            {toastMsg && <div className="CustomToast">{toastMsg}</div>}

            <section className='MainOpenWeb'>
                <div className={`MainBoxSev ${(showOrderDetail || selectedProduct) ? '' : 'FullWidth'}`}>
                    <div className="HeroicBanner">
                        <div className='SwastikAbso'>
                            <img src={ResturantIG.SwastikImg} alt="Swastik" />
                        </div>

                        <div className="BurgerBannerSect">
                            <img src={ResturantIG.AbsoluteBurg} alt="Burger Banner" />
                        </div>

                        <div className="AboutInfoBanner">
                            <span>Limited Time!</span>
                            <h1>Get Special Discount</h1>
                            <p>35%</p>
                            <pre>
                                All resturant available | T & C applied
                                <a href="#"><button>Claim</button></a>
                            </pre>
                        </div>
                    </div>

                    <div className="AllProductSection">
                        <h2 className="SectionTitle">Explore Popular Dishes 🍴</h2>
                        <div className="ProductsGrid">
                            {assets.slice(0, 27).map((item) => (
                                <SingleProduct key={item.id} product={item} />
                            ))}
                        </div>
                    </div>
                </div>

                {/* ✅ Product Detail Panel */}
                {selectedProduct && (
                    <div className="ProductDetail">
                        <div className="HeadingMoreButton">
                            <h3>Product Detail</h3>
                            <button
                                className='OrderShowButton'
                                onClick={() => {
                                    setSelectedProduct(null)
                                    localStorage.removeItem('selectedProduct')
                                }}
                            >
                                X
                            </button>
                        </div>

                        <div className="ProductInfoBox">
                            <img src={selectedProduct.image} alt={selectedProduct.name} />
                            <h2>{selectedProduct.name}</h2>
                            <p className="product-categoryside">{selectedProduct.category}</p>
                            <p className="product-descriptionside">{selectedProduct.description}</p>
                            <h3 className="product-priceside">₹{selectedProduct.price}</h3>

                            <div className="quantity-selector">
                                <button onClick={decreaseQty}>−</button>
                                <span>{quantity}</span>
                                <button onClick={increaseQty}>+</button>
                            </div>

                            <button
                                className='AddToCartBtn'
                                onClick={() => handleAddToCart(selectedProduct, quantity)}
                            >
                                Add to Cart 🛒
                            </button>
                        </div>
                    </div>
                )}

                {/* ✅ Order Detail Panel */}
                {!selectedProduct && showOrderDetail && (
                    <div className="OrderDetail">
                        <div className="HeadingMoreButton">
                            <div className="HeadingOrderDe">
                                <img src={ResturantIG.ManOrder} alt="Order Man" />
                                <h3>Order Details</h3>
                            </div>

                            <button
                                className='OrderShowButton'
                                onClick={() => {
                                    setShowOrderDetail(false)
                                    localStorage.setItem('showOrderDetail', JSON.stringify(false))
                                }}
                            >
                                X
                            </button>
                        </div>

                        <div className="OrderSectionButtonChanger">
                            <button
                                className={activeSection === 'onprocess' ? 'activeSeccBtn' : ''}
                                onClick={() => setActiveSection('onprocess')}
                            >
                                On Process
                            </button>
                            <button
                                className={activeSection === 'complete' ? 'activeSeccBtn' : ''}
                                onClick={() => setActiveSection('complete')}
                            >
                                Complete
                            </button>
                            <button
                                className={activeSection === 'canceled' ? 'activeSeccBtn' : ''}
                                onClick={() => setActiveSection('canceled')}
                            >
                                Canceled
                            </button>
                        </div>

                        {activeSection === 'onprocess' && (
                            <div className="OnProcessSect">
                                <div className="OrderShowDetail">
                                    <div className="BoxOfOrderPro">
                                        <img src='' alt="" />
                                        <div className="OrderShowDet">
                                            <p className='OrderProcHead'>Example On Process</p>
                                            <span className='OrderOnProcess'>
                                                <p>15 Jan 2024</p> <div>On Process</div>
                                            </span>
                                            <div className="ProcessOrderPrice">₹1892</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="OrderPriceDetail">
                                    <div><span>Item</span><p>₹1892</p></div>
                                    <div><span>Discount</span><p>₹300</p></div>
                                    <div><span>Shipping</span><p>Free</p></div>
                                    <hr />
                                    <div><span>Total</span><p>₹1592</p></div>
                                </div>
                                <button className='OrderTrackingButton'>Tracking Order</button>
                            </div>
                        )}
                    </div>
                )}
            </section>
        </>
    )
}

export default HomeSect