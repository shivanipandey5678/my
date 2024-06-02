import { createContext ,useState} from "react";

export let AuthContext=createContext();

export default function  AuthContectProvider({children}){
    let  [ userDetail,setUserDetail]=useState({
        isAuthenticated:true,
        token:null,
        email:"shibu77",
    })

    function login(token,email){
        setUserDetail ({
            isAuthenticated:true,
            token:token,
            email:email,
        })
    }


    function logout(){
        setUserDetail ({
            isAuthenticated:false,
            token:null,
            email:null,
        })
    }
    return <AuthContext.Provider value={{userDetail,login,logout}}>{children}</AuthContext.Provider>
}
