import { Link } from "react-router-dom";
import Swal from "sweetalert2";
const CoffeeCard = ({ coffee }) => {
  const { _id, name, supplier, category, chef, taste, photoURL, details } =
    coffee;

  const handleDelete = (_id) => {
    console.log(_id);
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
       
       
        fetch(`http://localhost:5000/coffee/${_id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ _id }),
        })
         .then((res) => res.json())
         .then((data) => {
            
            
            console.log(data)
            if(data.deletedCount > 0) {
                 Swal.fire({
          title: "Deleted!",
          text: "Your Coffee has been deleted.",
          icon: "success",
        });
                
        }})
         
      }
    });
  };

  return (
    <div>
      <div className="card p-8 card-side bg-base-100 shadow-xl">
        <figure>
          <img src={photoURL} alt="Movie" />
        </figure>
        <div className="flex w-full justify-between">
          <div className="space-y-3">
            <h2 className="card-title">{name}</h2>
            <p>{details}</p>
            <p>{supplier}</p>
            <p>{category}</p>
            <p>{details}</p>
          </div>
          <div className="card-actions ">
            <div className="join space-y-4 join-vertical">
              <button className="btn join-item">View</button>
              <Link to={`updateCoffee/${_id}`}><button className="btn join-item">Edit</button></Link>
              
              <button
                onClick={() => handleDelete(_id)}
                className="btn join-item bg-red-500"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
