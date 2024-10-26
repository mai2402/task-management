import { useSelector } from "react-redux"
import { getLoggedInUser } from "../features/userSlice"

function Home() {
    const user = useSelector(getLoggedInUser)
    return (
        <div>
         <p className=" text-darkBlue text-4xl p-8 font-bold">Welcome, {user.username}</p>
            
        </div>
    )
}

export default Home

