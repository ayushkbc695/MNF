import React from 'react'
import AnotherNav from './AnotherNav'
import '../PagesCSS/ReportFraud.css'
import { Link } from 'react-router-dom';

const ReportFraud = () => {

    return (
        <>
            <AnotherNav />

            <section className='ReportSection'>
                <section className='HelpSectBanner'>
                    <h1>Report a potential fraud!!</h1>
                </section>

                <section className='HelpFormSection'>
                    <form className='HelpForm' action="">
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
                                Mobile Number
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
                                Name of the person / organization against whom concern is being reported
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
                                City
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
                                Message
                            </label>
                        </div>

                        <p className='SomeTermsOfCond'>This reporting channel is used to provide an opportunity to report your concerns related to suspected fraud or suspected violation of the Code of Conduct (COC) of MNF.</p>
                        <p className='SomeTermsOfCond'>Please note that you should not use this channel to report events / instances other than misconduct related to suspected fraud and suspected violation of COC. For any concern / complaint relating to your order, please reach out to our customer care team using the chat option.</p>
                        <p className='SomeTermsOfCond'>MNF expects that reports made through this channel are made in good faith and are legitimate concerns that you believe should be investigated. All reports submitted will be given careful attention</p>

                        <input type="submit" className='SubmitButton' />
                    </form>

                    <div className="infoReportBoxes">
                        <div className="SafetyEmergency">
                            <h1>Disclaimer</h1>
                            <p>Please use this form only for reporting potential frauds. For order or other general queries.</p>
                            <Link to='/help-support'>contact us here</Link>
                        </div>
                    </div>
                </section>
            </section>
        </>
    )
}

export default ReportFraud