import React from "react";

import { MdLibraryAdd } from "react-icons/md";
import { FaSearch } from "react-icons/fa";

import HeaderButton from "./headerComponent/Button";

const Header = () => {
  return (
    <div className="Header-Background">
      <div className="brand">
        <div className="alignLeft">
          <h1 >CLICK'n'PICK</h1>
          <HeaderButton logo={<MdLibraryAdd />} btnName=" New Post" />
        </div>

        <form className="Searchbar-form">
          <input
            placeholder=" Search Here "
            type="text"
            className="searchbar-input"
          ></input>
            <FaSearch className = "Searchbar-button"
            HeaderButton logo={<FaSearch />}></FaSearch>
        </form>

        <div className="alignRight">
          <h3 style={{marginTop:"10px" }}>Sign in</h3>
          <HeaderButton btnName="Sign Up" />
        </div>

        
      </div>

      <div className="headCardTitle">
        <h2 >  STAY HOME...  STAY SAFE... </h2>
        
         </div>
    </div>
  );
};

export default Header;