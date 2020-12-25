import React from "react";

const Sender=({message, setMessage, sendMessage})=>{
    
    return(
        <form className="sender-bar" onSubmit={(e)=>{sendMessage(e)}}>
            <input 
                type="text"
                className="sender-input"
                placeholder="Type a message here..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' ? sendMessage(e) : null}
            />
            <button className="send-btn" type="submit" >Send</button>
        </form>
    );
}

export default Sender;