import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {

    const {user, getAccessTokenSilently} = useAuth0();
    const [responseFromServer, setResponse] = useState('');

    const navigate =  useNavigate();

    const getDataFromResourceServer = async () => {
        const token = await getAccessTokenSilently({
            authorizationParams: {
                audience: 'http://localhost:9000',
                scope: "read:current_user",
            }
        });
        const response = await fetch("http://localhost:9000/protected", {
                headers: {
                Authorization : `Bearer ${token}`,
            },
        });

        const responeData = await response.text();
        setResponse(responeData);
    }

    useEffect(() => {
        if(user == undefined) navigate("/");
        getDataFromResourceServer();
    });

  return (
    <div>
      <h1>Login Successfull</h1>
      <h2>{responseFromServer}</h2>
    </div>
  );
}
