import React from "react";

import { Button } from "../components/UI/Button";
import { Item } from "../components/Common/Item";

export const Manufacturers = () => {
  return (
    <div class="h-screen">
      <hr className="mx-10 border-[#686262] mb-20" />
      <div classname="mt-20">
        <Button className=" text-white font-extrabold text-xl bg-primary rounded-xl ml-28">
          Mint NFT
        </Button>
        <h1 className="text-white ml-28 mt-10 font-extrabold text-3xl">
          Currently Own NFT
        </h1>
        <div className="flex flex-wrap ml-28 mt-16">
          <Item className=" mr-16" />
          <Item className=" mr-10" />
          <Item className=" mr-10" />
          <Item className=" mr-10" />
        </div>
      </div>
    </div>
  );
};
