import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const ProfileSpotCard = ({ i }) => {
  const navigate = useNavigate();
  //handle delete updated list
  const handleDeleteItem = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://travel-app-server.vercel.app/myUpdates/${i._id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              navigate("/");
            }
          })
          .catch((error) => {
            console.error("Error:", error);
            Swal.fire({
              title: "Error!",
              text: "There was an issue deleting the file.",
              icon: "error",
            });
          });
      }
    });
    console.log(id);
  };

  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure>
        <img src={i.photo} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{i.name}</h2>
        <p>{i.description}</p>
        <div className="card-actions justify-end">
          <Link to={`/update-spots/${i._id}`}>
            <button className="btn bg-cyan-600 text-white">Update</button>
          </Link>
          <button
            onClick={handleDeleteItem}
            className="btn bg-red-500 text-white"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileSpotCard;
