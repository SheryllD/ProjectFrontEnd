import { useState, useEffect, createContext} from "react";
import axios from "axios";
import { fetchOne } from "../API/apicalls";
const api_url = import.meta.env.VITE_API_URL;

const AuthContext = createContext();

function AuthContextWrapper ({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [userUpdate, setUserUpdate] = useState(false);

  /* FUNCTION AUTHENTICATION */
  const userAuthentication = async () => {
    const token = localStorage.getItem("authToken");

    if (token) {
      try {
        const { data } = await axios.get(`${api_url}/auth/verify`, {
          headers: { authorization: `Bearer ${token}` },
        });

        // authorization success
        setUser(data.currentUser);
        setIsLoading(false);
        setIsLoggedIn(true);
      } catch (err) {
        console.log("authorization failed: ", err);
        setUser(null);
        setIsLoading(false);
        setIsLoggedIn(false);
      }
    } else {
      // reset states
      setUser(null);
      setIsLoading(false);
      setIsLoggedIn(false);
    }
  };

  useEffect(() => {
    userAuthentication();
  }, []);

  useEffect(() => {
    if(userUpdate){
      fetchOne(`${api_url}/users/${user._id}`)
    }
  }, [userUpdate])

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        isLoggedIn,
        userAuthentication,
        setUserUpdate
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default { AuthProviderWrapper, AuthContext };