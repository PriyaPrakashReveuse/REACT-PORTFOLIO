import React from "react"
import "./topbar.scss"
import {Person,Mail} from '@material-ui/icons';

export default function Topbar() {
    return (
        <div className="topbar active" >
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">reveuse.</a>
                    <div className="itemContainer">
                        <Person className="icon"/>
                        <span>+9275811034</span>
                    </div>
                    <div className="itemContainer">
                        <Mail className="icon"/>
                        <span>pprkash2017@gmail.com</span>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger">
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>

            </div>
        </div>
    )
}
