import { useContext } from "react";
import { Link, useLoaderData, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../firebase/AuthProvider";

const Spot = () => {
  const spot = useLoaderData();
  const { user } = useContext(AuthContext);
  // const { _id } = useParams();

  const navigate = useNavigate();

  const {
    _id,
    name,
    photo,
    description,
    zone,
    averageCost,
    visitor,
    seasonality,
    travelTime,
    location,
  } = spot;

  console.log(spot);

  const handleAddToList = () => {
    const myList = {
      listId: _id,
      name: name,
      photo: photo,
      description: description,
      averageCost: averageCost,
      visitor: visitor,
      seasonality: seasonality,
      travelTime: travelTime,
      location: location,
      email: user.email,
    };

    fetch("https://travel-app-server.vercel.app/myList", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(myList),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId === null) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "This spot already added in your list!",
          });
        } else {
          navigate("/myList");
          Swal.fire({
            title: "Good job!",
            text: `${name} added in your list`,
            icon: "success",
          });
        }

        console.log(data);
      });
  };

  return (
    <div>
      <div className="card lg:card-side bg-base-100 shadow-xl w-11/12 m-auto my-20">
        <figure className="lg:w-1/2 md:full">
          <img src={photo} alt="Album" />
        </figure>
        <div className="card-body lg:w-1/2 md:full">
          <h2 className="card-title capitalize font-bold text-cyan-600">
            {name}
          </h2>
          <p>{description}</p>
          <p>Zone: {zone}</p>
          <p>Cost: {averageCost}</p>
          <p>Visitors: {visitor}</p>
          <p>Seasonality: {seasonality}</p>
          <p>Travel Time: {travelTime}</p>
          <p>Location: {location}</p>

          <div className="card-actions justify-end">
            <Link to={-1}>
              <button className="btn bg-cyan-600 text-white">Go Back</button>
            </Link>
            <button
              className="btn bg-cyan-600 text-white"
              onClick={handleAddToList}
            >
              Add to My List
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Spot;
