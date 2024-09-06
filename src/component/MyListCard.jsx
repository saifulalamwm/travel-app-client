import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const MyListCard = ({ spot }) => {
  const { _id, name, photo, description } = spot;
  const navigate = useNavigate();

  const handleRemoveFromList = (id) => {
    console.log(id);

    fetch(`https://travel-app-server.vercel.app/myList/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
          navigate("/spots");
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
  };
  return (
    <div>
      <div className=" card  card-compact bg-base-100 shadow-xl h-full">
        <figure>
          <img src={photo} alt={name} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{description}</p>
          <div className="card-actions justify-end">
            <button
              onClick={() => handleRemoveFromList(_id)}
              className="btn bg-red-500 text-white"
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyListCard;
