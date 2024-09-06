import { useContext, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../firebase/AuthProvider";
import { FaGoogle, FaFacebook } from "react-icons/fa";

const SignIn = () => {
  const { userSignIn, handleSignInGoogle } = useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const notify = () => toast("You have sign In successfully");

  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    var regularExpression =
      /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

    // Check if password matches regular expression
    if (!password.match(regularExpression)) {
      setErrorMessage(
        "Password must be at least 6 characters long, contain at least one number and one special character."
      );
      console.error("Invalid password");
      return;
    }

    userSignIn(email, password)
      .then((result) => {
        notify();
        navigate("/");
        console.log(result.user);
      })
      .catch((error) => {
        setErrorMessage(error.errorMessage);
        console.error(error);
      });
  };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold text-cyan-600">Sign In Now!</h1>
            <p className="py-6 text-cyan-800">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSignIn} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>

              <div className="form-control mt-6">
                <button className="btn bg-cyan-600 text-white">Login</button>
              </div>
              <p>{errorMessage ? errorMessage : ""}</p>
              <p>
                New Here please{" "}
                <Link to={"/signup"}>
                  <button className="btn btn-link text-cyan-600">
                    Sign-Up
                  </button>{" "}
                </Link>{" "}
              </p>
              <div className="flex justify-around ">
                <Link to={"/"}>
                  <button
                    onClick={handleSignInGoogle}
                    className="btn bg-green-600 w-32 text-lg text-white"
                  >
                    <FaGoogle />
                  </button>
                </Link>
                <button className="btn bg-blue-600 w-32 text-white text-lg">
                  <FaFacebook />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SignIn;
