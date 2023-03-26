import React, { useState } from "react";
import { Button } from "../components/UI/Button";
import axios from "axios";
import { Register } from "../API/api";

export const SignUpIndividuals = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <div class="h-screen">
      <hr className="mx-10 border-[#686262]" />
      <h1 className=" font-bold text-white text-center mt-36 text-4xl font-[Archivo Black] ">
        Create Your Individuals Account
      </h1>
      <form className="pt-5 flex flex-col justify-center items-center">
        <div className="my-5">
          <input
            placeholder="Username"
            className=" w-72 p-2 mr-7"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          ></input>
          <input
            type="password"
            placeholder="Password"
            className="p-2 w-72"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <input
          type="password"
          className="m-auto block my-5 w-5/12 p-2 font-[Roboto]"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        ></input>
        <input
          className="m-auto block my-5 w-5/12 p-2 font-[Roboto]"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <ul className="text-white font-[Roboto] flex mx-2">
          <li>
            <a href="#">
              <img src="../images/metamask.png" className="w-7 h-7 mx-2" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="../images/github.png" className="w-7 h-7 mx-2" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="../images/discord.png" className="w-7 h-7 mx-2" />
            </a>
          </li>
        </ul>
        <Button className="text-white border border-primary w-96 mt-5">
          Sign Up
        </Button>
      </form>
    </div>
  );
};
