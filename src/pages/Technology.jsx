export default function Technology(){
    return <div className="sm:p-5 sm:px-5 mx-20">
        <div className=" font-family:Poppins font-extrabold text-2xl tracking-tight text-primary mb-3">
            Technology Used
        </div>
        <div className="sm:p-5">
            <div className="sm:p-5 border rounded shadow-xl bg-primary text-white">
            FetchUser is built using a modern technology stack to ensure performance, scalability, and a great user experience. Here are the key technologies powering FetchUser:
                <ul className="list-disc pl-5 leading-8">
                    <li>React: A powerful library for building interactive user interfaces efficiently.</li>
                    <li>JavaScript (ES6): To implement modern programming paradigms like hooks and asynchronous operations.</li>
                    <li>Tailwind CSS: For responsive, utility-first styling and consistent design.</li>
                    <li>Pagination: The app implements pagination to allow fetching additional users by clicking a "Load More Users" button.</li>
                    <li>Axios/Fetch API: To fetch user data from external APIs efficiently.</li>
                    <li>React Router: Used for managing navigation and creating seamless routes for different pages like About, Technology, and Detail.</li>
                    <li>Git/GitHub: Version control and collaboration during the development process.</li>
                </ul> </div>
        </div>
    </div>
}