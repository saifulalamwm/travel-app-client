import { useContext, useState } from "react";
import { updateProfile } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../firebase/AuthProvider";

const Signup = () => {
  const { createUser } = useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const notify = () => toast("User has been created");

  const handleSignUp = (e) => {
    e.preventDefault();
    const fullName = e.target.displayName.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const photo = e.target.photo.value;
    e.target.reset();
    setErrorMessage("");
    var regularExpression =
      /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    if (!password.match(regularExpression)) {
      setErrorMessage(
        "Password must be at least 6 characters long, contain at least one number and one special character."
      );
      console.error("Invalid password");
      return;
    }
    createUser(email, password)
      .then((result) => {
        notify();
        // const photoURL = photo ? URL.createObjectURL(photo) : null;
        updateProfile(result.user, {
          displayName: fullName,
          photoURL: photo,
        });
        console.log(result);
        navigate("/signin");
      })
      .catch((error) => {
        setErrorMessage(error.message);
        console.error(error);
      });

    console.log(fullName, email, password, photo);
  };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold text-cyan-600">Sign Up now!</h1>
            <p className="py-6 text-cyan-800">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSignUp} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Full Name</span>
                </label>
                <input
                  type="text"
                  name="displayName"
                  placeholder="Enter your Name"
                  className="input input-bordered"
                  required
                />
              </div>

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
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Profile Photo</span>
                </label>
                <input
                  type="text"
                  name="photo"
                  placeholder="Paste your photo url"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control mt-6">
                <button className="btn bg-cyan-600 text-white">Sign Up</button>
              </div>
              <p>{errorMessage ? errorMessage : ""}</p>
              <p>
                Already have account please{" "}
                <Link to={"/signin"}>
                  <button className="btn btn-link text-cyan-600">
                    Sign-In
                  </button>{" "}
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Signup;
