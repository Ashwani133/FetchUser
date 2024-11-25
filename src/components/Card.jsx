export function Card({image, fName, lName, loading}){
    return <div>
        {loading === false? <div className="relative shadow-lg border-2 rounded-lg">
            <img className="min-h-56 max-w-60 " src={image} alt='homosapien' />
        <div className="absolute bottom-0 left-0 text-white p-2 font-bold bg-gradient-to-b from-transparent to-black w-full">
        <p>{fName}</p>
        <p>{lName}</p>
        </div>
        </div>:
        <div className="relative shadow-lg border-2 rounded-lg min-h-56 min-w-56 animate-pulse">
            <div className="space-y-2 absolute bottom-0 left-0 text-white p-2 font-bold bg-gradient-to-b from-transparent to-black w-full">
                <div className="bg-white h-2 rounded animate-pulse w-4/6 opacity-50"></div>
                <div className="bg-white h-2 rounded animate-pulse opacity-50 w-5/6"></div>
            </div>
        </div>}
    </div>
}