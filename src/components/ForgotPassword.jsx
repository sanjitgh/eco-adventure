import { sendPasswordResetEmail } from "firebase/auth";
import React from "react";
import { useLocation } from "react-router-dom";
import { auth } from "../firebase/firebase.config";

const ForgotPassword = () => {
  const location = useLocation();
  const email = location.state?.email;

  const resetPassword = (e) => {
    e.preventDefault();
    sendPasswordResetEmail(auth, email);
    window.open("https://mail.google.com", "_blank");
  };

  return (
    <div className="min-h-[calc(100vh-112px)] flex justify-center items-center px-3">
      <div className="w-full">
      <h1 className="text-center font-bold sm:text-5xl text-3xl text-blue-500 mb-8">
        Reset Password
      </h1>
        <form
          onSubmit={resetPassword}
          className="card-body max-w-[600px] mx-auto border bg-slate-100 "
        >
          
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">Email</span>
            </label>
            <input
              type="email"
              defaultValue={email}
              placeholder="email"
              className="input input-bordered"
              readOnly
            />
          </div>

          <div className="form-control">
            <input
              type="submit"
              value={"Reset"}
              className="btn bg-blue-500 text-white font-medium text-xl hover:bg-blue-600"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
