import React, { useState } from 'react'
import AnotherNav from './AnotherNav'
import '../PagesCSS/HelpSupport.css'
import { Link } from 'react-router-dom';

const HelpSupport = () => {

    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState("How can we help you?");

    const options = [
        "I have an issue with my MNF Order.",
        "My MNF app is not working.",
        "I want to share feedback or a suggestion."
    ];

    return (
        <>
            <AnotherNav />

            <section className='HelpSection'>
                <section className='HelpSectBanner'>
                    <h1>We would love to hear from you !!</h1>
                </section>

                <section className='HelpFormSection'>
                    <form className='HelpForm' action="">
                        <div>
                            <div className="DropHeader" onClick={() => setOpen(!open)}>
                                <div className='inputAcc'></div>
                                <span className='SelectHelp'>{selected}</span>
                                <span className={`Arrow ${open ? "Rotate" : ""}`}>
                                    <i className="ri-arrow-down-s-fill"></i>
                                </span>
                            </div>
                            {open && (
                                <ul className="DropList">
                                    {options.map((opt, i) => (
                                        <li
                                            key={i}
                                            className="DropItem"
                                            onClick={() => {
                                                setSelected(opt);
                                                setOpen(false);
                                            }}
                                        >
                                            {opt}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>

                        <div className="input-box">
                            <span className="input-accent"></span>

                            <input
                                type="text"
                                id="input"
                                className="input-field"
                                placeholder=""
                                required
                            />

                            <label htmlFor="input" className="input-label">
                                Full Name
                            </label>
                        </div>

                        <div className="input-box">
                            <span className="input-accent"></span>

                            <input
                                type="email"
                                id="input"
                                className="input-field"
                                placeholder=""
                                required
                            />

                            <label htmlFor="input" className="input-label">
                                Email Address
                            </label>
                        </div>

                        <div className="input-box">
                            <span className="input-accent"></span>

                            <input
                                type="text"
                                id="input"
                                className="input-field"
                                placeholder=""
                                required
                            />

                            <label htmlFor="input" className="input-label">
                                Phone Number ( Optional )
                            </label>
                        </div>


                        <div className="input-box">
                            <span className="input-accent"></span>

                            <textarea
                                type="text"
                                id="input"
                                className="input-field"
                                placeholder=""
                                required
                            />

                            <label htmlFor="input" className="input-label">
                                Type Text
                            </label>
                        </div>

                        <input type="submit" className='SubmitButton' />
                    </form>

                    <div className="infoReportBoxes">
                        <div className="SafetyEmergency">
                            <h1>Report a Safety Emergency</h1>
                            <p>We are committed to the safety of <br /> everyone using Zomato.</p>
                            <Link>Report here</Link>
                        </div>

                        <div className='SafetyEmergency'>
                            <h1>Issue with your live order?</h1>
                            <p>Click on the 'Support' or 'Online ordering help' section in your app to connect to our customer support team.</p>
                        </div>
                    </div>
                </section>
            </section>
        </>
    )
}

export default HelpSupport