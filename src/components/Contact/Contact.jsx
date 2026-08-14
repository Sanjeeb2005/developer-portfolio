    import "./Contact.css"
    import emailjs from "@emailjs/browser"
    import { useEffect, useRef, useState } from "react";
    import gsap from "gsap";
    import { ScrollTrigger } from "gsap/ScrollTrigger";

    function Contact(){
        gsap.registerPlugin(ScrollTrigger);
        const contactRef = useRef(null);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState("");
    useEffect(()=>{
        gsap.set(contactRef.current, {
        opacity: 0,
        y: 50
    });

    gsap.to(contactRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
            trigger: contactRef.current,
            start: "top 80%",
            once: true
        }
    });
    },[])

    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;


    async function handleSubmit(e){    

        e.preventDefault();

    if(!name || !email || !message){
        setStatus("Fill all the blanks")
        return;
    }

    const templateParams ={
        from_name: name,
        from_email: email,
        message: message
    };


    setLoading(true);

    try{
    await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        templateParams,
        PUBLIC_KEY
    )
    setStatus("Message sent successfully");

        setName("");
        setEmail("");
        setMessage("");
        
    } catch (error){
        console.error(error);
        setStatus("Failed to send message");
    } finally{
        setLoading(false);
    }
    setStatus("");


    }
   return (
    <form onSubmit={handleSubmit} id="contacts" ref={contactRef}>

        <h1>Contact Me</h1>

        <div className="contact-container">

            <div className="contact-info">

                <h2>Let's Work Together</h2>

                <p>
                    Have a project, opportunity, or just want to say hello?
                    Feel free to send me a message.
                </p>

                <div className="contact-details">

                    <p>
                        <strong>Email:</strong>
                        <br />
                        kitutech479@gmail.com
                    </p>

                    <p>
                        <strong>Location:</strong>
                        <br />
                        Odisha, India
                    </p>

                </div>

            </div>

            <div className="contact-form">

                <input
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                />

                <input
                    type="email"
                    placeholder="Your Email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />

                <textarea
                    placeholder="Message"
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                ></textarea>

                <p id="status">{status}</p>

                <button type="submit" disabled={loading}>
                    {loading ? "Sending..." : "Send"}
                </button>

            </div>

        </div>

    </form>
);
}

export default Contact;