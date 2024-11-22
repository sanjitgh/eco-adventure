import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authContext } from "./AuthProvaider";
import toast, { Toaster } from "react-hot-toast";

const Register = () => {
  useEffect(() => {
    document.title = "Register | Eco-Adventure";
  }, []);
  const { user, setUser, handelRegister, manageProfile } =
    useContext(authContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handelSubmit = (e) => {
    e.preventDefault();
    setError("");
    const name = e.target.name.value;
    const image = e.target.image.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (password.length < 6) {
      return setError("You need at least 6 character.");
    }
    if (!/.*[a-z].*/.test(password)) {
      return setError("You need at least one lowercase letter.");
    }
    if (!/.*[A-Z].*/.test(password)) {
      return setError("You need at least one uppercase letter.");
    }
    if (!/.*\d.*/.test(password)) {
      return setError("You need at least one number letter.");
    }

    handelRegister(email, password)
      .then((res) => {
        manageProfile(name, image).then(() => {
          navigate("/");
          setUser({
            ...user,
            displayName: name,
            photoURL: image,
            email: email,
          });
        });
      })
      .catch((err) => {
        toast.error("This email already in use! Try again another email.");
      });
  };
  return (
    <div className="container mx-auto px-3 py-10 md:py-20 ">
      <Toaster></Toaster>
      <h1 className="text-center font-bold sm:text-5xl text-3xl text-blue-500 mb-8">
        Register Form
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
            placeholder="name"
            required
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
            placeholder="image URL"
            required
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-medium">Email</span>
          </label>
          <input
            name="email"
            type="email"
            placeholder="email"
            required
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-medium">Password</span>
          </label>
          <input
            name="password"
            type="password"
            placeholder="password"
            required
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
            value={"Register"}
            className="btn bg-blue-500 text-white font-medium text-xl hover:bg-blue-600"
          />
        </div>
        <div>
          <p className=" mt-5 flex gap-2">
            Already have an accoutn? Please
            <Link className="font-bold text-blue-500" to={"/login"}>
              Login
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;
