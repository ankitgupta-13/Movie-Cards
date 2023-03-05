import { useState } from "react";
import "./Header.css";
const Header = ({handleSearch}) => {
    const [search,setSearch]=useState("");
  return (
    <div className="container">
      <img
        src="https://cdn.pixabay.com/photo/2016/12/28/08/15/hummingbird-1935665_960_720.png"
        alt="Logo not found!"
      />
      <h1>Marvel DC Movies</h1>
      <input value={search} onChange={(e)=>{setSearch(e.target.value); handleSearch(e.target.value)}} type="text" placeholder="Search a movie..." className="searchBar" />
    </div>
  );
};
export default Header;
