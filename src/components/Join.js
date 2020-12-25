import React, {useState} from "react";
import {Link} from "react-router-dom";

const Join = ()=>{
    const [name, setName] = useState("");
    const [room, setRoom] = useState("");

    return(
        <div className="inner-container-join" >
            <h1 className="app-name" >Commutify</h1>
            <h3 className="app-label">Chat App</h3>
            <div className="h-line"></div>
            <form className="joining-form">
                <input type="text" placeholder='Your name here..' onChange={(e)=>{setName(e.target.value)}  } />
                <input type="text" placeholder='Your room here..' onChange={(e)=>{setRoom(e.target.value)}} />
                <Link onClick={e=> (!name || !room) ? e.preventDefault() : null } to={`/chat?name=${name}&room=${room}`}>
                    <button type="submit"className="send-btn join-btn" >Sign In</button>
                </Link>
            </form>
        </div>
    );
}

export default Join;