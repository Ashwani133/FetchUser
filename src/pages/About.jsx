export default function Detail(){
    return <div className="sm:p-5 sm:px-5 mx-20">
        <div className=" font-family:Poppins font-extrabold text-2xl tracking-tight text-primary mb-3">
            About FetchUser
        </div>
        <div className="sm:p-5">
            <div className="sm:p-5 border rounded shadow-xl bg-primary text-white">
                <ul className="list-disc sm:pl-5 leading-8">
                    <li>Welcome to FetchUser, a web application designed to display dynamic user profiles fetched from an API.</li>
                    <li>This project demonstrates a modern approach to building responsive and interactive web applications using React.</li>
                    <li>With a clean design and seamless user experience, FetchUser serves as both a practical tool and a learning project.</li>
                </ul> 
            </div>
            <div className="sm:p-5 border rounded shadow-xl bg-primary text-white mt-10">
                <ul className="list-disc sm:pl-5 leading-8">
                    <li>Whether you're exploring user data for development insights or learning how APIs integrate with front-end technologies, FetchUser is the perfect platform for experimentation and learning.</li>
                    <li>
                    At its core, FetchUser demonstrates how seamless connections between client and server can elevate web applications to be both practical and visually appealing.
                    </li>
                </ul>
            </div>
        </div>
    </div>
}