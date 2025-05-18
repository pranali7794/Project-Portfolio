// Education.js
export default function Education() {
    return (
        <section
            id="education"
            className="px-10 w-full flex flex-col lg:flex-row py-20 
                       align-center bg-white-200 max-w-5xl mx-auto">
            {/* <div className="flex-1">
                <img src="education.png"
                    alt="Education"
                    className="w-full h-full bg-cover"/>
            </div>
            <div className="flex-1 flex flex-col justify-center
                            items-center gap-5 px-6">
                <div>
                    <h2 className="text-center text-emerald-500 
                                   text-5xl font-bold">
                        Education
                    </h2>
                </div>
                <p>
                    I have successfully completed my MCS in Computer Science from Fergusson College (Autonomous) , Pune in year 2018.
                </p>
            </div> */}

            <div className="p-10 bg-emerald-200 flex flex-col justify-center items-center
                            gap-5 lg:flex-row max-w-5xl mx-auto shadow transition 
                            hover:shadow-xl hover:scale-[102%] w-full">
                <div className="w-80 rounded">
                    <a href="teamwork.png" className="w-full h-full">
                        <img src="teamwork.png" alt="Project 1" 
                        className="w-full h-full bg-cover rounded"/>
                    </a>
                </div>
                <div className="flex flex-col align-center mx-auto gap-4 justify-center flex-1">
                    <h2 className="font-bold text-3xl text-center">
                        <a className="text-center text-emerald-500 
                                   text-5xl font-bold" 
                            href="teamwork.png">Education</a>
                    </h2>
                    <p>
                       I have successfully completed my MCS in Computer Science from Fergusson College (Autonomous) , Pune in year 2018 with 7.1 CGPA.
                    </p>
                </div>
            </div>
        </section>
    );
}