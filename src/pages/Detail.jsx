export default function Detail(){
    return <div className="p-5 px-5 mx-20">
    <div className=" font-family:Poppins font-extrabold text-2xl tracking-tight text-primary ">
        Detail Page
    </div>
    <div className="p-5">
        <div className="p-5 border rounded shadow-xl bg-primary text-white">
        Overview: Random User Fetcher is a practical React project aimed at demonstrating how to work with APIs and handle dynamic data rendering.
        <br />Features:
            <ul className="list-disc pl-5 leading-8">
                <li>Dynamic User Fetching: Retrieves random user data from the RandomUser API.</li>
                <li>Grid Layout: Displays user profiles (name and picture) in a visually appealing grid format.</li>
                <li>Load More Functionality: Allows users to fetch and append additional profiles with a "Load More Users" button.</li>
                <li>Pagination Support: Fetches new profiles by incrementing the page number with each request.</li>
            </ul> </div>
        <div className="p-5 border rounded shadow-xl bg-primary text-white mt-10">
        How It Works:
            <ul className="list-disc pl-5 leading-8">
                <li>When the app launches, it fetches user data using the RandomUser API.</li>
                <li>Profiles are displayed in a grid with each user assigned a unique key.</li>
                <li>Clicking "Load More Users" triggers a new API request and appends the results to the existing list.</li>
                <li>The app leverages React hooks like useEffect for data fetching and state management.</li>
            </ul>
        </div>
        <div className="p-5 border rounded shadow-xl bg-primary text-white mt-10">
        Enhancements:
            <ul className="list-disc pl-5 leading-8">
                <li>Loading Indicators: Add a skeleton to inform users while new data is being fetched.</li>
                <li>Error Handling: Implement retry logic and user-friendly error messages for failed API requests.</li>
            </ul>
        </div>
    </div>
</div>
}