import { useContext, useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { AuthContext } from "../../firebase/AuthProvider";
import MyList from "../MyList";
import { Link } from "react-router-dom";
import ProfileSpotCard from "./ProfileSpotCard";
import { FaRightToBracket } from "react-icons/fa6";

const MyProfile = () => {
  const [open, setOpen] = useState(false);
  const { user } = useContext(AuthContext);

  const [spotData, setSpotData] = useState(null);
  const [error, setError] = useState(null);

  console.log(error);

  useEffect(() => {
    // Make a request to the backend by email
    fetch(`https://travel-app-server.vercel.app/myUpdates?email=${user?.email}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        return response.json();
      })
      .then((data) => {
        setSpotData(data);
      })
      .catch((error) => {
        setError(error);
      });
  }, [user.email]);

  console.log(spotData);

  const handleOpen = () => {
    setOpen(!open);
  };

  console.log(open);

  return (
    <section className="flex">
      <div
        className={`${
          open ? "w-96" : "w-0"
        } bg-gray-300 h-screen overflow-hidden duration-500 transition-all text-xs`}
      >
        <div className="mx-2">
          <div className="w-36 m-auto mt-10">
            {user && user.photoURL ? (
              <img
                src={user.photoURL}
                alt=""
                className="w-full p-2 bg-white rounded-full mt-2"
              />
            ) : (
              <img src="https://i.pravatar.cc/300" alt="" />
            )}
          </div>
          <div className="mt-5 text-center">
            <p>
              <span className="font-bold">Name : </span>
              {user?.displayName}
            </p>
            <p>
              <span className="font-bold">Email : </span>
              {user?.email}
            </p>
          </div>
          <div className="divider"></div>
          <div className="divider"></div>
          <div className=""></div>
        </div>
      </div>
      <div className=" w-full">
        <div className="ml-3">
          <div className="">
            <FaRightToBracket onClick={handleOpen} className="mt-5 text-3xl" />
          </div>
          <div className="mt-5 text-2xl">
            <p>
              Welcome{" "}
              <span className="text-cyan-600 font-bold capitalize">
                {user.displayName}
              </span>
            </p>
          </div>
          <div role="tablist" className="tabs tabs-bordered mt-5">
            <input
              type="radio"
              name="my_tabs_1"
              role="tab"
              className="tab"
              aria-label="Upload"
              defaultChecked
            />
            <div role="tabpanel" className="tab-content p-10 ">
              <div className="ml-5">
                <h2 className="text-2xl font-bold mb-2">Your Updated spots</h2>
              </div>
              <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
                {spotData?.map((i, index) => (
                  <ProfileSpotCard key={index} i={i} />
                ))}
              </div>
            </div>

            <input
              type="radio"
              name="my_tabs_1"
              role="tab"
              className="tab"
              aria-label="List"
            />
            <div role="tabpanel" className="tab-content p-10">
              <MyList />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyProfile;
