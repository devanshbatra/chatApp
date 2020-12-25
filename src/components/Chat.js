import React, { useEffect, useState } from "react";
import io from 'socket.io-client';
import queryString from "query-string";

import Navigation from "./chatInnner/Navigation";
import Sender from "./chatInnner/Sender";
import Messagebox from "./chatInnner/Messagebox";

let socket;

const Join = ({ location }) => {
    const [name, setName] = useState("");
    const [room, setRoom] = useState("");
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);
    const [usersInRoom, setUsersInRoom] = useState([]);
    const ENDPOINT = "https://chatappserver1.herokuapp.com/";

    useEffect(() => {
        const { name, room } = queryString.parse(location.search);
        socket = io(ENDPOINT);
        setName(name);
        setRoom(room);
        socket.emit("user-joined", { name, room }, () => {
            console.log("error");
        });
        socket.on("roomdata", (users) => {
            setUsersInRoom(users);
        });
        return () => {
            socket.emit("disconnection");
            socket.off();
        }
    }, [ENDPOINT, location.search]);

    useEffect(() => {
        socket.on("message", (message) => {
            setMessages([...messages, message]);
        });
        socket.on("roomdata", (users) => {
            setUsersInRoom(users);
        });
        return () => {
            socket.off();
        }
    }, [messages]);

    // For sending messages
    const sendMessage = (event) => {
        event.preventDefault();
        if (message) {
            socket.emit("sendMessage", message, () => {
                setMessage("");
            });
        }
    }

    // getting users info
    const getusers = () => {
        socket.on("roomdata", (users) => {
            setUsersInRoom(users);
        });
    }

    return (

        <div className="inner-container">
            <Navigation room={room} usersInRoom={usersInRoom} getusers={getusers} />
            <Messagebox messages={messages} name={name} />
            <Sender message={message} setMessage={setMessage} sendMessage={sendMessage} />
        </div>

    );
}

export default Join;