// About.js
export default function About() {
    return (
        <section
            id="about"
            className="px-10 w-full flex flex-col lg:flex-row py-20 
                       align-center bg-emerald-200 max-w-5xl mx-auto">
            <div className="flex-1">
                <img src="teamwork.png" alt="About" className="w-full h-full bg-cover" />
            </div>
            <div className="flex-1 flex flex-col justify-center
                            items-center gap-5 px-6">
                <div>
                    <h2 className="text-center text-emerald-500 
                                   text-5xl font-bold">
                        About Me
                    </h2>
                </div>
                {/* <p>
                    As I said, I am your friendly
                    software developer...
                </p> */}
                <p>
                    I am a passionate and self estemeed software developer. 
                    A skilled IT professional with 4.4 years of extensive experience in front-end web development 
                    and programming across a diverse range of technologies, including PHP, HTML, CSS, Bootstrap, Javascript, jQuery, React.js, Redux
                    and MySQL.
                </p>
            </div>
        </section>
    );
}