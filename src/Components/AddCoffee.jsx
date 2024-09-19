import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const AddCoffee = () => {
  const handleAddCoffee = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const supplier = form.supplier.value;
    const category = form.category.value;
    const chef = form.chef.value;
    const taste = form.taste.value;
    const details = form.details.value;
    const photoURL = form.photourl.value;

    const coffeeInfo = {
      name,
      supplier,
      category,
      chef,
      taste,
      photoURL,
      details,
    };

    console.log(coffeeInfo);

    // send data To the Server
    fetch("http://localhost:5000/coffee", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(coffeeInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "User Added Successfully! ",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <div>
      <h1 className="text-center mt-10 text-3xl font-bold text-red-500">
        Add Coffee
      </h1>
      <div className="p-20">
        <form
          onSubmit={handleAddCoffee}
          className="space-y-4 bg-red-100 border-4 rounded-xl p-10 border-red-500"
        >
          <div className="flex gap-10 justify-between">
            <div className="w-full">
              <div>
                <label class="label">
                  <span class="text-base label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Coffee Name"
                  name="name"
                  class="w-full input input-bordered"
                />
              </div>
              <div>
                <label class="label">
                  <span class="text-base label-text">Supplier</span>
                </label>
                <input
                  type="text"
                  placeholder="Name of The Supplier"
                  name="supplier"
                  class="w-full input input-bordered"
                />
              </div>
              <div>
                <label class="label">
                  <span class="text-base label-text">Category</span>
                </label>
                <input
                  type="text"
                  placeholder="Coffee category"
                  name="category"
                  class="w-full input input-bordered"
                />
              </div>
            </div>
            <div className="w-full">
              <div>
                <label class="label">
                  <span class="text-base label-text">Chef</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Chef Name"
                  name="chef"
                  class="w-full input input-bordered"
                />
              </div>
              <div>
                <label class="label">
                  <span class="text-base label-text">Taste</span>
                </label>
                <input
                  type="text"
                  placeholder="How is the Taste?"
                  name="taste"
                  class="w-full input input-bordered"
                />
              </div>
              <div>
                <label class="label">
                  <span class="text-base label-text">Details</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Coffee Details"
                  name="details"
                  class="w-full input input-bordered"
                />
              </div>
            </div>
          </div>
          <div>
            <div className="mb-6">
              <label class="label">
                <span class="text-base label-text">Photo URL</span>
              </label>
              <input
                type="text"
                placeholder="Enter Photo URL"
                name="photourl"
                class="w-full input input-bordered"
              />
            </div>
          </div>

          <input
            type="submit"
            value="Add Coffee"
            className="btn w-full text-xl bg-amber-900 text-white "
          />
        </form>
      </div>

      <Link to="/">
        <div className="text-center">
          <button className="btn">Go To Home</button>
        </div>
      </Link>
    </div>
  );
};

export default AddCoffee;
