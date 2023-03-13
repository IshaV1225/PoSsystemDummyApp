import React from "react";
import { Link } from "react-router-dom";
import style from "../style/welcome.module.css";

export default function Welcome(){
    return(
        <div className={style.WelcomeContainer}>
            <div className={style.WelcomeHeader}>
                <h3>Carleton University Examinations</h3>
                <img2
                src = "images/carletonLogo.png" 
                alt = "" 
                width="300" 
                height="100"
                />
            </div>

            <div className={style.LoginContainer}>
                <div className={style.LoginForm}>
                    <div className={style.actionBtn}>
                        <Link
                            exact
                            to="/mainPage"
                            className="primaryBtn d-flex align-items-center mb-3" >
                            Login to Exam{" "}
                        </Link>
                    </div>
                </div>
            </div>

            <h1>Welcome to ExaMap!</h1>
            {/* <img src="src/images/ExaMapLogoRed.png" alt=""width="400" height="500"/> */}
            <div className={style.WelcomeInfo}>
                <p>
                    This is the PoS stystem for ExaMap. Lets add everyone to the attendance list!!
                    <p>
                    Start with having the examinee tap their ID card on the system to get full details. 
                    <p>
                    Next check them in for attendance and assign them a booklet.
                    </p>
                    </p>
                </p>
            </div>
        </div>
    );
}