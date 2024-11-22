import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useEffect, useRef, useState } from "react";
import { authContext } from "./AuthProvaider";
import toast, { Toaster } from "react-hot-toast";
const Login = () => {
  useEffect(() => {
    document.title = "Login | Eco-Adventure";
  }, []);
  const { handelGoogleLogin, handelLogin } = useContext(authContext);
  const [error, setError] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const emailRef = useRef();

  const handelLoginForm = (e) => {
    e.preventDefault();
    setError("");
    const email = e.target.email.value;
    const password = e.target.password.value;

    handelLogin(email, password)
      .then((res) => {
        navigate(location.state);
        if (location.state == null) {
          navigate("/");
        }
      })
      .catch((err) => {
        toast.error("Login Failed!");
      });
  };

  const googleLoginHander = () => {
    handelGoogleLogin()
    .then((res) => {
      navigate(location.state);
      if (location.state == null) {
        navigate("/");
      }
    });
  };

  const handelForgotPassword = () => {
    const email = emailRef.current.value;

    if (!email) {
      return toast.error("You need to add email address.");
    } else {
      navigate("forgot-password", { state: { email } });
    }
  };

  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-112px)]">
      <div className="container mx-auto px-3 md:py-20 py-10">
        <Toaster></Toaster>
        <h1 className="text-center font-bold sm:text-5xl text-3xl text-blue-500 mb-8">
          Login Form
        </h1>
        <form
          onSubmit={handelLoginForm}
          className="card-body max-w-[600px] mx-auto border bg-slate-100 "
        >
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">Email</span>
            </label>
            <input
              ref={emailRef}
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
            <label className="label">
              <a
                onClick={handelForgotPassword}
                className="label-text-alt link link-hover"
              >
                Forgot password?
              </a>
            </label>
          </div>

          {error && (
            <p className="text-red-500 font-medium my-2 text-center">{error}</p>
          )}

          <div className="form-control">
            <input
              type="submit"
              value={"Login"}
              className="btn bg-blue-500 text-white font-medium text-xl hover:bg-blue-600"
            />
          </div>
          <div>
            <h3 className="text-cyan-950 text-xl font-bold mt-5 mb-2">
              Social Login
            </h3>
            <div>
              <Link
                onClick={googleLoginHander}
                className="btn shadow-none bg-transparent border-none  hover:bg-transparent p-0"
              >
                <img className="w-8" src="/google.png" alt="" /> Login with
                google
              </Link>
            </div>
            <p className=" mt-5 flex gap-2">
              Are you new here? Please{" "}
              <Link className="font-bold text-blue-500" to={"/register"}>
                Register
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
