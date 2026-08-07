import "./Contact.css"
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";

function Contact(){
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [message, setMessage] = useState("");
useEffect(()=>{
    console.log("contact page reload")
},[])

function handleSubmit(e){    

    e.preventDefault();

    console.log(name);
    console.log(email);
    console.log(message);

    setName("");
    setEmail("");
    setMessage("");
}
return (
    <form onSubmit={handleSubmit}>
    <h1>Contact</h1>
    <input type="text" placeholder="Your Name" value={name} onChange={(event)=>setName(event.target.value)}/><br/> <br />
    <input type="email" placeholder="Your email" value={email} onChange={(event)=> setEmail(event.target.value)}/> <br/> <br />
    <textarea placeholder="Message" value={message} onChange={(event)=>setMessage(event.target.value)}></textarea> <br/> <br />
    <h3>{name}</h3><br /><h3>{email}</h3><br /><h3>{message}</h3>
    <button type="submit">Send</button>
    </form>
)
}

export default Contact;