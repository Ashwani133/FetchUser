export function LoadButton({handleClick}){
    return <div className="p-4">
        <button className="p-2 bg-primary text-lg font-bold text-white rounded hover:text-black" onClick={handleClick}>Load More Profiles</button>
    </div>
}