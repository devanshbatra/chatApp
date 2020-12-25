import React from "react";
import reactEmoji from "react-emoji";

const Msgmap=({message, user, name})=>{
    let isCurrentuser;
        let trimmedName = name.trim().toLowerCase();
        if(trimmedName===user){
            isCurrentuser=1;
        }
        else{
            isCurrentuser=0;
        }
    return(
        isCurrentuser
        ?(
            <div className="curr-msg">{reactEmoji.emojify(message)}</div>
        )
        :(
            <div className="other-msg">
                <h3>{user}</h3>
                <p>{reactEmoji.emojify(message)}</p>
            </div>
        )
                
    );
}

export default Msgmap;