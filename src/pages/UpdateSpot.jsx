import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateSpot = () => {
  const spot = useLoaderData();
  const navigate = useNavigate();
  const {
    _id,
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
  } = spot;

  const handleUpdateSpot = (e) => {
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

    const updateSpot = {
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

    console.log(updateSpot);
    //send data to the server
    fetch(`https://travel-app-server.vercel.app/spots/${_id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updateSpot),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // form.reset();
        navigate("/spots");
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Updated tourist spot successfully",
            icon: "success",
            confirmButtonText: "Great",
          });
        }
      })
      .catch((error) => {
        console.error("Error updating coffee:", error);
      });
  };
  return (
    <div>
      <div className="hero h-full bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center">
            <h1 className="text-3xl font-bold">Add new tourist spot</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card  w-full shadow-2xl bg-base-100">
            <form onSubmit={handleUpdateSpot} className="card-body">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">
                      Tourists Spot Update Form
                    </span>
                  </label>
                  <input
                    type="text"
                    name="spotName"
                    defaultValue={name}
                    placeholder="Enter the coffee Name"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Country Name</span>
                  </label>
                  <input
                    type="text"
                    name="countryName"
                    defaultValue={country}
                    placeholder="Enter the Country Name"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Zone</span>
                  </label>
                  <select name="zone" className=" input input-bordered">
                    defaultValue={zone}
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
                    <span className="label-text">Location</span>
                  </label>
                  <input
                    type="text"
                    name="location"
                    defaultValue={location}
                    placeholder="Enter Location"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Description</span>
                  </label>
                  <input
                    type="text"
                    name="description"
                    defaultValue={description}
                    placeholder="Enter the Description"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Seasonality</span>
                  </label>
                  <select name="seasonality" className=" input input-bordered">
                    defaultValue={seasonality}
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
                    defaultValue={travelTime}
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
                    defaultValue={averageCost}
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
                    defaultValue={visitor}
                    placeholder="Enter the average Cost"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">User Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    defaultValue={email}
                    placeholder="Your Email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">User Name</span>
                  </label>
                  <input
                    type="text"
                    name="username"
                    defaultValue={username}
                    placeholder="Your User Name"
                    className="input input-bordered"
                  />
                </div>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Travel Spot Photo</span>
                </label>
                <input
                  type="text"
                  name="photo"
                  defaultValue={photo}
                  placeholder="Enter the photo url"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-cyan-600 text-white">
                  Update Tourist Spot
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateSpot;
