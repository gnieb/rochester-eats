import Login from "../pages/login/Login"
import { Button } from "@mui/material"
import { Link, useNavigate, useParams } from "react-router-dom";

export default function Root () {
    return(
        <div id="root" className=" flex justify-center items-center text-center text-2xl">
            <div>
                <div>Hello World!</div>
                
                    <Link 
                    className="rounded-full bg-orange-500 p-2 text-orange-800"
                    to="/login" >
                    LOG IN</Link>
            </div>
        </div>
    )
};