import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRout = ({children}) => {

    const {user , loading} = useContext(AuthContext);
    if(loading){
        return <span className="loading loading-dots loading-md"></span>

    }
    if(user){
        return children;
    }
    return <Navigate to='/login'></Navigate>


};

export default PrivateRout;