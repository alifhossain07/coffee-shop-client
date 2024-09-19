import { Link, useLoaderData } from "react-router-dom";
import "./App.css";
import CoffeeCard from "./Components/CoffeeCard";

function App() {
  const coffees = useLoaderData();

  return (
    <>
      <h1 className="text-6xl text-amber-700 text-center mt-10 font-bold">
        Welcome to My Coffee Shop
      </h1>
      <div className="grid grid-cols-2 gap-10 mt-20">{
        
        
        coffees.map(coffee => <CoffeeCard key={coffee._id} coffee={coffee}></CoffeeCard>)
      
      
      
      
      }
      
      
      
      
      </div>

      <Link to="/addCoffee">
        <div className="text-center">
          <button className="mt-10 btn btn-primary">Add Coffee</button>
        </div>
      </Link>
    </>
  );
}

export default App;
