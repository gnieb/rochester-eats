import Login from "../pages/login/Login"
import { Button, Link } from "@mui/material"

export default function Root () {
    return(
        <div id="root" className=" flex justify-center items-center text-center text-2xl">
            <div>
                <div>Hello World!</div>
                
                    <Link className="rounded-full bg-orange-500 p-2 text-orange-800" to={<Login />}>LOG IN</Link>
            </div>
        </div>
    )
};