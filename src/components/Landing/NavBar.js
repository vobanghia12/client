import React from "react";
import { Button } from "../UI/Button";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <div class="flex p-6 items-center justify-between">
      <h3 class=" text-white px-5 py-2 headerCustom">
        <Link to="/">
          de<span class="text-primary">COM</span>
        </Link>
      </h3>
      <div class="flex items-center justify-between">
        <Link
          to="/"
          class=" text-white rounded-md px-3 py-2 text-sm font-medium mx-5"
          aria-current="page"
        >
          Home
        </Link>
        <Link
          to="/Manufacturers"
          class=" text-white rounded-md px-3 py-2 text-sm font-medium mx-5"
          aria-current="page"
        >
          Manufacture
        </Link>
        <Link
          to="/MarketPlace"
          class=" text-white rounded-md px-3 py-2 text-sm font-medium mx-5"
          aria-current="page"
        >
          Marketplace
        </Link>
      </div>
      <div class="flex">
        <Link to="/OptionSignUp">
          <Button className="text-white rounded-md px-3 py-2 text-sm font-medium border border-primary">
            Sign Up
          </Button>
        </Link>
        <Link to="/SignIn">
          <Button className="text-white bg-primary">Sign In</Button>
        </Link>
      </div>
    </div>
  );
};
