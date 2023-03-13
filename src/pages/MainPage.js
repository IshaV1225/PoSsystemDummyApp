import React from "react";
import style from "../style/mainPage.module.css";
import { Link } from "react-router-dom";

export default function MainPage() {
    return(
        <div className={style.mainPageContainer}>
            <h1>Tap your Card!!</h1>
            <div className={style.actionBtn}>
            <Link
                exact
                to="/Attendance_page"
                className="primaryBtn d-flex align-items-center mb-3" >
                Start Adding{" "}
            </Link>
            </div>
        </div>
    );
}