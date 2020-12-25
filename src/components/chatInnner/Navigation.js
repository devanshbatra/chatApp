import React, {useState} from "react";
import {Link} from "react-router-dom";
import icon from "../../img/icon.png";

const Navigation=(props)=>{
    const [userClass, setUserClass]=useState("");
    const [toggleClass, setToggleClass]=useState("");
    const animation=()=>{
        if(userClass==="show-users"){
            setUserClass("");
            setToggleClass("");
        }
        else{
            setUserClass("show-users");
            setToggleClass("toggle");
            props.getusers();
        }
    }
    return(
        <nav className="nav">
            <img src={icon} className="icon-img" alt="icon"/>
            <h1 className="room-name" >Room-{props.room}</h1>
            <div className={`burger ${toggleClass}`} onClick={animation} >
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
            <div className={`users ${userClass}`}>
                <h4>MEMBERS</h4>
                {props.usersInRoom.map(user=>(
                    <p key={props.usersInRoom.indexOf(user)}>{user.name}</p>
                ))}
                
                <Link to="/" ><button className="leave-btn" >Leave</button></Link>
            </div>
        </nav>
    );
}

export default Navigation;