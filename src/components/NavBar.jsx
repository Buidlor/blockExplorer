import React from "react";
import { useContext } from "react";

import Context from "../contexts/Context";

const NavBar = () => {
  return (
    <div className="navbar bg-neutral text-neutral-content shadow-lg rounded-b-lg">
      <a className="btn btn-ghost normal-case text-xl">ETHPlorer</a>
      <div className="flex-1 justify-center items-center">
        <div className="gap-2 ">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search address"
              className="input input-bordered text-black w-96"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
