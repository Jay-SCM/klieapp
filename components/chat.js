

import {useState, useEffect} from 'react';
import io from 'socket.io-client';


const socket = io('http://localhost:3001');

export default function Chat(){

    const [message, setMessage] = useState([]);
    const [newMessage, setNewMessage] = useState('');

    useEffect(()=>{
        socket.on('message',(msg)=>{
     setMessage((prevMessages) => [...prevMessages, msg]);});

     return()=>{
         socket.disconnect();
     };
    },[]);

    const sendMessage = () =>{
        socket.emit('message',newMessage);
        setNewMessage('');
    };


    return(
        <div>
            <div>
                {message.map((msg,index)=> (
                <div key={index}>{msg}</div>
                ))}
            </div>
            <input type = "text"
            value = {newMessage}
            onChange = {(e) => 

            setNewMessage(e.target.value)} />
            <button onClick = {sendMessage}>Send</button>
        </div>

            );
        }