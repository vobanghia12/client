import React from "react";
import { Button } from "../components/UI/Button";

export const SignIn = () => {
  return (
    <div class="h-screen">
      <hr className="mx-10 border-[#686262]" />
      <h1 className=" font-bold text-white text-center mt-36 text-4xl font-[Archivo Black] ">
        Sign In to NFToes
      </h1>
      <form className="pt-5 flex flex-col justify-center items-center">
        <input
          className="m-auto block w-5/12 p-2 font-[Roboto] my-5 mb-8"
          placeholder="Email"
        ></input>
        <input
          className="m-auto block my-5 w-5/12 p-2 font-[Roboto] mb "
          placeholder="Password"
        ></input>
        <ul className="text-white font-[Roboto] flex mx-2">
          <li>
            <a href="#">
              <img src="../images/metamask.png" className="w-7 h-7 mx-3" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="../images/github.png" className="w-7 h-7  mx-3" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="../images/discord.png" className="w-7 h-7 mx-3" />
            </a>
          </li>
        </ul>
        <Button className="text-white bg-primary w-96 mt-5">Login</Button>
        <Button className="text-white border border-primary w-96 mt-5">
          SignUp
        </Button>
      </form>
    </div>
  );
};
