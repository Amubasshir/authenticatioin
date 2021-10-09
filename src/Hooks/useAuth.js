import { useContext } from "react/cjs/react.development";
import { AuthContext } from "../Contex/AuthProvider";


const useAuth = () =>{
    return useContext(AuthContext);
}

export default useAuth;