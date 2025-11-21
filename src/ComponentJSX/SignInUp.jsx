import React, { useState } from "react";
import "../ComponentCSS/SignInUp.css";
import { ResturantIG } from "../assets/assest";

const SignInUp = () => {
    const [isSignUp, setIsSignUp] = useState(false);

    return (
        <div className="SignUpPop" style={{ display: "block" }}>
            <div className="SignInsidePop">

                {/* ================= SIGN IN FORM ================= */}
                <div className={`FirstSignUp ${isSignUp ? "HideForm" : ""}`}>
                    <img src={ResturantIG.WebLogo} className="WebLogoImg" />
                    <h1>Sign In</h1>

                    <div className="MediaIconSect">
                        <div className="IconSect"><i className="fa-brands fa-facebook-f"></i></div>
                        <div className="IconSect"><i className="fa-brands fa-google"></i></div>
                        <div className="IconSect"><i className="fa-brands fa-linkedin-in"></i></div>
                    </div>

                    <p id="LetterSect">Or use your account</p>

                    <div className="InputSectBox">
                        <input type="email" placeholder="Email or Number" required />
                        <input type="number" placeholder="OTP" />
                    </div>

                    <p id="SectFort">Forget Your Password</p>
                    <button className="NormalSect">Sign In</button>
                </div>

                {/* ================= SIGN UP FORM ================= */}
                <div className={`SecondSignIn ${isSignUp ? "" : "HideForm"}`}>
                    <img src={ResturantIG.WebLogo} className="WebLogoImg" />
                    <h1>Create Account</h1>

                    <div className="MediaIconSect">
                        <div className="IconSect"><i className="fa-brands fa-facebook-f"></i></div>
                        <div className="IconSect"><i className="fa-brands fa-google-plus-g"></i></div>
                        <div className="IconSect"><i className="fa-brands fa-linkedin-in"></i></div>
                    </div>

                    <p id="LetterSect">Or use your email for registration</p>

                    <div className="InputSectBox">
                        <input type="text" placeholder="Name" />
                        <input type="email" placeholder="Email or Number" required />
                        <input type="number" placeholder="OTP" />
                    </div>

                    <button className="NormalSect">Sign Up</button>
                </div>

                {/* ================= SLIDE PANEL ================= */}
                <div className="MoveBtnBox" style={{ left: isSignUp ? "0" : "50%" }}>
                    {!isSignUp ? (
                        <div className="StartSectSign">
                            <div className="BurgerAbosulet"><img src={ResturantIG.AbsoluteBurg} /></div>
                            <div className="PizaaAbosulet"><img src={ResturantIG.AbsolutePizz} /></div>

                            <h1>Hello, Friend!</h1>
                            <p>
                                Sign in and continue your late-night <br /> food journey with MNF!!
                            </p>
                            <button onClick={() => setIsSignUp(true)}>SIGN UP</button>
                        </div>
                    ) : (
                        <div className="CloseSectSign" style={{ display: "block" }}>
                            <div className="BurgerAbosulet"><img src={ResturantIG.AbsoluteBurg} /></div>
                            <div className="PizaaAbosulet"><img src={ResturantIG.AbsolutePizz} /></div>
                            <h1>Welcome Back!</h1>
                            <p>
                                Create your MNF account and explore endless <br /> midnight food moments!!
                            </p>
                            <button onClick={() => setIsSignUp(false)}>SIGN IN</button>
                        </div>
                    )}
                </div>

            </div>
        </div>
    );
};

export default SignInUp;