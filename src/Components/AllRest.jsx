import React, { useEffect, useState } from "react";
import axios from "axios";
import RestCard from "./RestCard";
import { Link } from "react-router-dom";

function AllRest() {
  const base_url = "http://localhost:3001/recipes";
  const [restData, setRestData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const fetchData = async () => {
    try {
      const response = await axios.get(base_url);
      setRestData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSearch = () => {
    // Filter restaurants based on the search query
    const filteredRestaurants = restData.filter((restaurant) =>
      restaurant.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return filteredRestaurants;
  };

  return (
    <div>
      {/* Search input field */}
      <div className="text-center m-5">
      <input className="form-control"
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      </div>
      <Link to={"/add"}>
       <div className="text-center">
       <button className="btn btn-primary m-2">Add</button>
       </div>
      </Link>
      {/* Pass filtered restaurant data to RestCard component */}
      <RestCard restArray={handleSearch()} />
    </div>
  );
}

export default AllRest;
