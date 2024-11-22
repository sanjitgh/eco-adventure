import { useContext } from "react";
import { authContext } from "../AuthProvaider";
import { Navigate, useLocation } from "react-router-dom";

const PrivetRoute = ({ children }) => {
  const { user, loading } = useContext(authContext);
    const location = useLocation();
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[700px]">
        <span className="loading loading-ring loading-lg"></span>
      </div>
    );
  }

  if (!user) {
    return <Navigate state={location.pathname} to={"/login"}></Navigate>;
  }
  return children;
};

export default PrivetRoute;
