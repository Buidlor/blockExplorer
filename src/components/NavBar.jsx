import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import Context from "../contexts/Context";

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <div className="navbar bg-neutral text-neutral-content shadow-lg rounded-b-lg z-10 fixed">
      <a
        className="btn btn-ghost normal-case text-xl"
        onClick={() => navigate("/")}
      >
        ETHPlorer
      </a>
      <div className="flex-1 justify-center">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search address"
            className="input input-bordered text-black w-96"
          />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
