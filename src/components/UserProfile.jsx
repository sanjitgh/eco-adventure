import { useContext, useEffect } from "react";
import { authContext } from "./AuthProvaider";
import { Link } from "react-router-dom";

const UserProfile = () => {
  const { user } = useContext(authContext);
  useEffect(() => {
    document.title = "Update Profile | Eco-Adventure";
  }, []);
  return (
    <div className="min-h-[calc(100vh-112px)]">
      <div className="container mx-auto px-3 py-20">
        <div>
          <h1 className="text-center font-bold text-blue-500 md:text-5xl text-2xl">
            Welcome {user.displayName}
          </h1>
          <div className="max-w-fit mx-auto bg-slate-100 pt-24 md:p-16 p-5 relative mt-24 rounded-xl">
            <img
              className="w-32 h-32 rounded-full mx-auto my-5 absolute -top-24 left-1/2 -translate-x-1/2"
              src={user.photoURL}
              alt=""
            />
            <p className="text-xl text-cyan-950">
              <b>Name:</b> {user.displayName}
            </p>
            <p className="text-xl text-cyan-950 my-3">
              <b>Email:</b> {user.email}
            </p>
            <Link
              to={"/update-profile"}
              className="btn bg-blue-500 hover:bg-blue-600 text-white"
            >
              Update Profile
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
