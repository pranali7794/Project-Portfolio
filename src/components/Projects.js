// Projects.js
export default function Projects() {
    return (
        <section id="projects"
                 className="my-20 w-full flex flex-col gap-5 align-center max-w-5xl mx-auto">
            <h2 className="text-5xl text-emerald-500 font-bold text-center">
                My Projects
            </h2>
            <div className="p-10 bg-emerald-200 flex flex-col justify-center items-center
                            gap-5 lg:flex-row max-w-5xl mx-auto shadow transition 
                            hover:shadow-xl hover:scale-[102%] w-full">
                <div className="w-80 rounded">
                    <a href="https://www.smartcookie.in/" className="w-full h-full">
                        <img src="logo_smc.png" alt="Project 1" 
                        className="w-full h-full bg-cover rounded"/>
                    </a>
                </div>
                <div className="flex flex-col align-center mx-auto gap-4 justify-center flex-1">
                    <h2 className="font-bold text-3xl text-center">
                        <a className="hover:underline"
                            href="https://www.smartcookie.in/">Smartcookie</a>
                    </h2>
                    <p>
                        This is a project built in React.js and PHP which is a real-time student and teacher rewards system for 
                        rewarding both of them for their work.
                    </p>
                </div>
            </div>
            <div className="p-10 bg-emerald-200 flex flex-col justify-center items-center
                            gap-5 lg:flex-row max-w-5xl mx-auto shadow transition 
                            hover:shadow-xl hover:scale-[102%] w-full">
                <div className="w-80 rounded">
                    <a href="https://www.startupworld.in//" className="w-full h-full">
                        <img src="startup_world.jpg" alt="Project 1" className="w-full h-full bg-cover rounded"/>
                    </a>
                </div>
                <div className="flex flex-col align-center mx-auto gap-4 justify-center flex-1">
                    <h2 className="font-bold text-3xl text-center">
                        <a className="hover:underline"
                            href="https://www.startupworld.in//">Startup World</a>
                    </h2>
                    <p>
                        This is a project built in PHP, HTML, CSS, Bootstrap which is a platform for newly passout students for training and placement purpose.
                        This website bridges the gap between industry standards and students. With the help of Startup World many students will be able to
                        get training on new technologies and get a job in the industry they want.
                    </p>
                </div>
            </div>
            <div className="p-10 bg-emerald-200 flex flex-col justify-center items-center gap-5 
                            lg:flex-row-reverse max-w-5xl mx-auto shadow transition hover:shadow-xl 
                            hover:scale-[102%] w-full">
                <div className="w-80 rounded">
                    <a href="https://mpcb.gov.in/node" className="w-full h-full">
                        <img src="https://5.imimg.com/data5/CL/AF/MY-4091933/pollution-control-board-mpcb-consent-500x500.jpg"
                             alt="Project 2" className="w-full h-full bg-cover rounded" />
                    </a>
                </div>
                <div className="flex flex-col align-center mx-auto gap-4 justify-center flex-1">
                    <h2 className="font-bold text-3xl text-center">
                        <a className="hover:underline" href="https://mpcb.gov.in/node">
                            Maharashtra Pollution Control Board
                        </a>
                    </h2>
                    <p>
                        It was revamp for official website of Maharashtra Pollution Control Board (Maharashtra state government project) developed in React.js for keeping track of various types of pollution. 
                        The Maharashtra Pollution Control Board (Marathi: महाराष्ट्र प्रदूषण नियंत्रण मंडळ) (established 7 September 1970) implements a 
                        range of environmental legislation in the state of Maharashtra, India. 
                        The MPCB functions under the administrative control of Environment Department of the Government of Maharashtra.
                    </p>
                </div>
            </div>
            <div className="p-10 bg-emerald-200 flex flex-col justify-center items-center gap-5 
                            lg:flex-row-reverse max-w-5xl mx-auto shadow transition hover:shadow-xl 
                            hover:scale-[102%] w-full">
                <div className="w-80 rounded">
                    <a href="https://www.sonyliv.com/" className="w-full h-full">
                        <img src="https://bb-media.com/wp-content/uploads/2024/06/4VsxQM_JpvxB-qlQaVmYiZMZd9YCUs6AIxUfKADL9iZF-sl2Cmz3vjBebtlV0KI2DNs.png"
                             alt="Project 2" className="w-full h-full bg-cover rounded" />
                    </a>
                </div>
                <div className="flex flex-col align-center mx-auto gap-4 justify-center flex-1">
                    <h2 className="font-bold text-3xl text-center">
                        <a className="hover:underline" href="https://www.sonyliv.com/">
                            Sony LIV
                        </a>
                    </h2>
                    <p>
                        Sony LIV is an Indian subscription video-on-demand over-the-top streaming service developed in React.js and owned by Culver Max 
                        Entertainment. Sony LIV was introduced in 2013[2] as the first OTT service in India.[3] As a streaming service,
                        it provides live sports, original titles, other content titles from its own networks and content titles in India
                        licensed from third-parties such as JioHotstar, Netflix among others. 
                        The Sony LIV content library includes films, TV shows and series, and sports.
                    </p>
                </div>
            </div>
        </section>
    );
}