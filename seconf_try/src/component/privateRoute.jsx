import { useContext } from "react";
import { AuthContext } from "../Context/Authcontext";
import {useNavigate}  from 'react-router-dom';

export default function PrivateRoute({children}){
    let navigate=useNavigate();
    let {userDetail:{isAuthenticated}}=useContext(AuthContext);
    if(!isAuthenticated){
        navigate("/login")
    }

    return children
}