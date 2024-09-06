import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import SpotCardBox from "../component/SpotCardBox";

const Spots = () => {
  const loadedSpots = useLoaderData();

  const [spots, setSpots] = useState(loadedSpots);
  // const [selectZone, setSelectedZone] = useState(null);

  // Get unique zone names
  const uniqueZones = [...new Set(loadedSpots.map((spot) => spot.country))];

  const handleZoneClick = (country) => {
    // setSelectedZone(zone);
    setSpots(loadedSpots.filter((spot) => spot.country === country));
  };
  // console.log(spots);

  return (
    <div className="w-11/12 m-auto my-10">
      <div className="my-5">
        <p className="text-2xl font-bold text-center capitalize">
          Visit Beautiful Places Around the world
        </p>
      </div>
      <div className="flex  gap-5 my-5 items-center">
        <p className="font-bold bg-cyan-600 text-white p-1 w-20 rounded-lg text-center btn">
          Zone :
        </p>
        {uniqueZones?.map((zone) => (
          <p
            className="font-semibold btn"
            key={zone}
            onClick={() => handleZoneClick(zone)}
          >
            {zone}
          </p>
        ))}
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 ">
        {spots?.map((spot) => (
          <SpotCardBox key={spot._id} spot={spot} />
        ))}
      </div>
    </div>
  );
};

export default Spots;
