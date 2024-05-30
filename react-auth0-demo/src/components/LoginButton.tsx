import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


const LoginButton = () => {

    const {loginWithRedirect, user} = useAuth0();
    const navigate = useNavigate();

    useEffect(() => {
        if(user !== undefined){
            navigate("/home");
        }
    });

    return (
        <button onClick={() => loginWithRedirect({
            appState:{
            returnTo: "/home"
        }})}>Login</button>
    );

};

export default LoginButton;
