import React from 'react'
import '../PagesCSS/AnotherNav.css'
import { Link } from 'react-router-dom'
import { ResturantIG } from '../assets/assest'

const AnotherNav = () => {
    return (
        <section className='AnotherNav'>
            <Link to='/' className="WebNavLogo">
                <img src={ResturantIG.WebLogo} />
                <h1>MidNight N Food</h1>
            </Link>

            <div className="AnotherNavLinks">
                <Link to='/mainWebsite' className='OnlyAccOpt'>Home</Link>
                <Link to='/mainWebsite/menu' className='OnlyAccOpt'>Menu</Link>
                <Link to='/mainWebsite/cart' className='OnlyAccOpt'>Cart</Link>
                <div className="AnotherNavDrop">
                    <div className="CircleBoxBtn">
                        <span>More</span>
                        <i className="ri-arrow-down-s-fill"></i>
                    </div>
                    <div className="BezPadding">
                        <div className="InsideBoxDrop">
                            <button onClick={() => { window.dispatchEvent(new Event('openOrderDetail')); localStorage.setItem('showOrderDetail', JSON.stringify(true)); }}>Order Tracking</button>
                            <Link to="/about"><button>About Us</button></Link>
                            <Link to="/report-fraud"><button>Report a Fraud</button></Link>
                            <Link to="/help-support"><button>Help and Support</button></Link>
                        </div>
                    </div>
                </div>

                <button className="NaviAccount NaviAdd">
                    <i className="ri-user-2-fill"></i>
                </button>
            </div>
        </section>
    )
}

export default AnotherNav