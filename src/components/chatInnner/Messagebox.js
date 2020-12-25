import React from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import Msgmap from "./Msgmap";

const Messagebox = ({ messages, name }) => {

    return (
        <ScrollToBottom className="msg-box">

            {messages.map((element) => (
                <Msgmap message={element.text} user={element.user} name={name} key={messages.indexOf(element)} />
            ))}

        </ScrollToBottom>
    );
}

export default Messagebox;