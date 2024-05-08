import { useContext } from "react";
import { AuthContext } from "../auth/AuthProvider";


const useAuth = () => {

    const all = useContext(AuthContext);

    return all;
};

export default useAuth;