import "./Footer.css";

const year = new Date().getFullYear();
const socialLinks = [
    {
        name: "G",
        link: "https://github.com/Sanjeeb2005"
    },
    {
        name : "L",
        link: "https://in.linkedin.com/in/sanjeeb-batriya-46a635359",
    },
    {
        name: "Em",
        link: "https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=GTvVlcRzCpMfMgmjTdBjmBdwQwRbdDBDmHvkRhBSXWvLZQdswCFsQJNHXQjMbXhNLMqSmWrffMbKr"
    }
];
 function Footer(){
    return(
        <footer>
            <p>© {year} Sanjeeb. All Rights Reserved.</p>
            <div>
                {
                socialLinks.map((links)=>(
                   <button className="anchBtn"><a key={links.name}href={links.link}target="_blank"rel="noreferrer">{links.name}</a></button>
                ))
            }
            </div>
        </footer>
    );
 }


 export default Footer;