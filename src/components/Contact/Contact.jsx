    import "./Contact.css"
    import emailjs from "@emailjs/browser"
    import { useState } from "react";
    import { useEffect } from "react";

    function Contact(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    useEffect(()=>{
        console.log("contact page reload")
    },[])

    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    async function handleSubmit(e){    

        e.preventDefault();

    const templateParams ={
        from_name: name,
        from_email: email,
        message: message
    };
    try{
    await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        templateParams,
        PUBLIC_KEY
    )
    alert("message sent successfully");

        setName("");
        setEmail("");
        setMessage("");
        
    } catch (error){
        console.error(error);
    }
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