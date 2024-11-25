import { useEffect, useState } from "react"
import axios from 'axios';
import { Card } from "./Card";
import { LoadButton } from "./Button";
export const RandomUser = ()=>{
    const[user, setUser] = useState([]);
    const[page, setPage] = useState(1);
    const[loading, setLoading] = useState(true)

    async function getUsers(){
        setLoading(true)
        try {
            const response = await axios.get(`https://randomuser.me/api/?page=${page}&results=5`)
            const userArray = response.data.results;
            setUser([...user,...userArray])
            console.log(user)
            setLoading(false)
        } catch (error) {
            console.error("Failed to fetch users:",error)
        }
    }
    useEffect(()=>{
        getUsers();
    },[page])

    function handleChangePage(){
        setPage(curr => curr+1)
    }
    return <div className="flex flex-col items-center justify-center p-20">
        <div className="grid lg:grid-cols-3 md:grid-cols-2  gap-20 ">{loading===false? user.map(u => <Card className image={u.picture.large} fName = {u.name.first} lName={u.name.last} loading={loading}/>
        ): Array(6).fill().map(u => <Card loading={loading} />)}</div>
        <LoadButton handleClick={handleChangePage}/>
    </div>
}