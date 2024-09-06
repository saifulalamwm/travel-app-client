import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const SpotCardBox = ({ spot }) => {
  const { _id, name, photo, description, zone, averageCost, visitor } = spot;
  //   console.log(spot);
  return (
    <div>
      <div className="card glass">
        <figure>
          <img className=" w-full" src={photo} alt="car!" />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-bold capitalize">{name}</h2>
          <p className="h-20 overflow-hidden">{description}</p>
          <p className="h-6 overflow-hidden">Avg Cost : ${averageCost}</p>
          <p className="h-6 overflow-hidden">Visitor :{visitor}</p>
          <p className="h-6 overflow-hidden">Zone :{zone}</p>
          <div className="card-actions justify-between">
            <Link to={`/spots/${_id}`}>
              <button className="btn bg-cyan-600 text-white">
                Explore now!
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpotCardBox;
