import "./intro.scss";
import { init } from 'ityped';
import { useEffect , useRef } from "react";

export default function Intro() {

    const textRef = useRef();
    useEffect(() => {
        init(textRef.current, { 
            showCursor: true,
            backDelay: 1500,
            backSpeed: 60,
             strings: ["Software","Development","Engineer" ],
     });
    }, []);

    return (
        <div className="intro" id="Intro">
            <div className="left"></div>
            <div className="imgContainer">
            </div>
            <div className="right">
            <div className="wrapper">
                <h2>Hi There , I'm</h2>
                <h1>Priya Prakash</h1>
                <h3>Up-and-coming <span ref={ textRef }></span></h3>
            </div>
            </div>
            
        </div>
    )
}
