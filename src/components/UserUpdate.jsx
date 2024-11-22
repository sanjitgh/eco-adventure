import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { authContext } from "./AuthProvaider";
import toast, { Toaster } from "react-hot-toast";

const Register = () => {
  useEffect(() => {
    document.title = "User Update | Eco-Adventure";
  }, []);

  const { user, setUser, manageProfile } = useContext(authContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handelSubmit = (e) => {
    e.preventDefault();
    setError("");
    const name = e.target.name.value;
    const image = e.target.image.value;

    manageProfile(name, image)
    .then((res) => {
      if (!name || !image) {
        return toast.error(
          "You can't update your profile without valid information."
        );
      }
      setUser({ ...user, displayName: name, photoURL: image });

      navigate("/user-profile");
    });
  };
  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-112px)]">
      <div className="container mx-auto px-3 py-20">
        <Toaster></Toaster>
        <h1 className="text-center font-bold sm:text-5xl text-xl text-blue-500 mb-8">
          Update Your Information.
        </h1>
        <form
          onSubmit={handelSubmit}
          className="card-body max-w-[600px] mx-auto border bg-slate-100 "
        >
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">Name</span>
            </label>
            <input
              name="name"
              type="text"
              defaultValue={user.displayName}
              placeholder="name"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">Photo</span>
            </label>
            <input
              name="image"
              type="text"
              defaultValue={user.photoURL}
              placeholder="image URL"
              className="input input-bordered"
            />
          </div>
          {error && (
            <div>
              <p className="text-center text-red-500">{error}</p>
            </div>
          )}
          <div className="form-control">
            <input
              type="submit"
              value={"Update"}
              className="btn bg-blue-500 text-white font-medium text-xl hover:bg-blue-600"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
