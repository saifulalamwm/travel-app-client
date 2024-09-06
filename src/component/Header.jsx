import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../firebase/AuthProvider";
import { toast } from "react-toastify";
import { FaBars } from "react-icons/fa";
// import { FaUser } from "react-icons/fa";

const Header = () => {
  const { user, signOutUser } = useContext(AuthContext);

  const navLinks = (
    <>
      <li className="font-bold">
        {" "}
        <NavLink to={"/"}>Home</NavLink>{" "}
      </li>
      <li className="font-bold">
        {" "}
        <NavLink to={"/spots"}>Tourists Spot</NavLink>{" "}
      </li>
      {user && (
        <li className="font-bold">
          {" "}
          <NavLink to={"/addtouristspot"}>Add Tourists Spot</NavLink>{" "}
        </li>
      )}
      {user && (
        <li className="font-bold">
          {" "}
          <NavLink to={"/myList"}>My List</NavLink>{" "}
        </li>
      )}
    </>
  );
  const userLogout = () => toast("You have logout successfully");

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        // logout();
        userLogout();
        // alert("Sign-out successful.");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className="sticky top-0 z-10 w-11/12 m-auto">
      <div className="navbar bg-base-100 ">
        <div className="navbar-start ">
          <div className="dropdown ">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <FaBars />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <Link to={"./"}>
            <img
              className="w-14 rounded-full"
              src="https://i.ibb.co/Ht1kh0w/logo.png"
              alt=""
            />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="dropdown dropdown-end">
              {user.photoURL ? (
                <div tabIndex={0} role="button" className="w-12 ">
                  <img className="rounded-full" src={user.photoURL} />
                </div>
              ) : (
                <div tabIndex={0} role="button" className="w-12 ">
                  <img
                    className="rounded-full"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  />
                </div>
              )}
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-box z-[1] w-96 p-2 shadow"
              >
                <li>
                  <div className="">
                    <div tabIndex={0} className="w-12 ">
                      <img className="rounded-full" src={user.photoURL} />
                    </div>
                    <div className="">
                      <p>{user.displayName}</p>
                      <p>{user.email}</p>
                    </div>
                  </div>
                </li>
                <div className="divider"></div>
                <Link to={"/my-profile"}>
                  <li>
                    <p>My Profile</p>
                  </li>
                </Link>
                <div className="divider"></div>
                <li>
                  <button className="btn bg-red-500" onClick={handleSignOut}>
                    Sign Out
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <Link to={"/signin"}>
              <button className="btn btn-primary">Sign In</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
