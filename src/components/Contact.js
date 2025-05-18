// Contact.js
export default function Contact() {
    return (
        <section id="contact"
                 className="my-40 align-center max-w-5xl mx-auto p-3">
            <h2 className="text-5xl font-bold text-emerald-500 text-center">
                Contact Me... Let's work together!!
            </h2>
            <div className="flex gap-5 justify-center 
                        my-10">
                <h4 className="text-center text-xl font-bold">Pranali Dalvi - Jagnade</h4> | 
                <h4 className="text-center text-xl font-bold">pranalidalvi1994@gmail.com </h4> |
                <h4 className="text-center text-xl font-bold">+91-8999505065  </h4>
            </div>
            <div className="flex gap-5 justify-center 
                        my-10">
                <a rel="noreferrer"
                   target="_blank"
                   className="text-center hover:underline"
                   href="https://www.linkedin.com/in/pranali-dalvi-292021102/">
                    <img height="80px" width="50px" src="linkedIn.png" alt="LinkedIn" />                    
                </a>
                <a rel="noreferrer"
                   target="_blank"
                   className="text-center hover:underline"
                   href="https://www.instagram.com/pranali.jagnade7/">                    
                    <img height="80px" width="50px" src="insta.jpg" alt="Instagram"/>
                </a>
                <a rel="noreferrer"
                   target="_blank"
                   className="text-center hover:underline"
                   href="https://www.facebook.com/pranali.dalvi.jagnade">
                   <img height="80px" width="50px" src="facebook.png" alt="facebook"/> 
                </a>                
            </div>
        </section>
    );
}