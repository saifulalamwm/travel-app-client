import { useState, useEffect, useContext } from "react";
import MyListCard from "../component/MyListCard";
import Swal from "sweetalert2";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../firebase/AuthProvider";

const MyList = () => {
  const [myList, setMyList] = useState([]);
  const listData = useLoaderData();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch(`https://travel-app-server.vercel.app/myList?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyList(data);
      });
  }, []);

  return (
    <div className="ml-5 mb-10">
      <h2 className="text-2xl font-bold mb-2">Your List</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-5">
        {myList?.map((spot) => (
          <MyListCard key={spot.name} spot={spot}></MyListCard>
        ))}
      </div>
    </div>
  );
};

export default MyList;
