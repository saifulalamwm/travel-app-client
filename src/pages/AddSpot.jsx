import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../firebase/AuthProvider";

const AddSpot = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleAddSpot = (e) => {
    e.preventDefault();
    const form = e.target;

    const name = form.spotName.value;
    const country = form.countryName.value;
    const location = form.location.value;
    const zone = form.zone.value;
    const description = form.description.value;
    const seasonality = form.seasonality.value;
    const travelTime = form.travelTime.value;
    const averageCost = form.averageCost.value;
    const visitor = form.visitor.value;
    const email = form.email.value;
    const username = form.username.value;
    const photo = form.photo.value;

    const newSpot = {
      name,
      country,
      location,
      zone,
      description,
      seasonality,
      travelTime,
      averageCost,
      visitor,
      email,
      username,
      photo,
    };

    fetch("https://travel-app-server.vercel.app/spots", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newSpot),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        form.reset();
        navigate("/my-profile");
        Swal.fire({
          title: "Success!",
          text: "New travel spot has been added",
          icon: "success",
          confirmButtonText: "Great",
        });
      })
      .catch((error) => {
        console.error("Error:", error);
        Swal.fire({
          title: "Error!",
          text: "Failed to add new spot",
          icon: "error",
          confirmButtonText: "Try Again",
        });
      });
  };

  return (
    <div>
      <div>
        <div className="hero h-full bg-base-200">
          <div className="hero-content flex-col ">
            <div className="text-center">
              <h1 className="text-3xl font-bold">Add new tourist spot</h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
            </div>
            <div className="card  w-full shadow-2xl bg-base-100">
              <form onSubmit={handleAddSpot} className="card-body">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Tourists Spot Name</span>
                    </label>
                    <input
                      type="text"
                      name="spotName"
                      placeholder="Enter the coffee Name"
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Zone</span>
                    </label>
                    <select name="zone" className=" input input-bordered">
                      <option value="">Select a Zone</option>
                      <option value="Asia">Asia</option>
                      <option value="Europe">Europe</option>
                      <option value="southAmerica">South-America</option>
                      <option value="northAmerica">North-America</option>
                      <option value="northAmerica">Australia</option>
                      <option value="africa">Africa</option>
                      <option value="antarctica">Antarctica</option>
                    </select>
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Country Name</span>
                    </label>
                    <input
                      type="text"
                      name="countryName"
                      placeholder="Enter the Country Name"
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Location</span>
                    </label>
                    <input
                      type="text"
                      name="location"
                      placeholder="Enter Location"
                      className="input input-bordered"
                    />
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Seasonality</span>
                    </label>
                    <select
                      name="seasonality"
                      className=" input input-bordered"
                    >
                      <option value="">Select a season</option>
                      <option value="spring">Spring</option>
                      <option value="summer">Summer</option>
                      <option value="fall">Fall</option>
                      <option value="winter">Winter</option>
                    </select>
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Travel Time</span>
                    </label>
                    <select name="travelTime" className=" input input-bordered">
                      <option value="">Select a Day</option>
                      <option value="Saturday">Saturday</option>
                      <option value="Sunday">Sunday</option>
                      <option value="Monday">Monday</option>
                      <option value="Tuesday">Tuesday</option>
                      <option value="Wednesday">Wednesday</option>
                      <option value="Thursday">Thursday</option>
                      <option value="Friday">Friday</option>
                      <option value="Any-day">Any-day</option>
                      <option value="Weekday">Weekday</option>
                      <option value="Weekend">Weekend</option>
                    </select>
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Average Cost</span>
                    </label>
                    <input
                      type="number"
                      name="averageCost"
                      placeholder="Enter the average Cost"
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Visitor Per Year</span>
                    </label>
                    <input
                      type="number"
                      name="visitor"
                      placeholder="Enter the average Cost"
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Description</span>
                    </label>
                    <textarea
                      name="description"
                      className="textarea textarea-bordered"
                      placeholder="description"
                    ></textarea>
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Travel Spot Photo</span>
                    </label>
                    <input
                      type="text"
                      name="photo"
                      placeholder="Enter the photo url"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control flex-grow">
                    <label className="label">
                      <span className="label-text">User Email</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      defaultValue={user.email}
                      disabled
                      placeholder="Enter your email"
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control flex-grow">
                    <label className="label">
                      <span className="label-text">User Name</span>
                    </label>
                    <input
                      type="text"
                      name="username"
                      defaultValue={user.displayName}
                      disabled
                      placeholder="Enter your user name"
                      className="input input-bordered"
                    />
                  </div>
                </div>

                <div className="form-control mt-6">
                  <button className="btn bg-cyan-600 text-white">
                    Add Tourist Spot
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddSpot;
