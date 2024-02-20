"use client";
import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "../Avatar";
import { useState } from "react";
import MenuItem from "./MenuItem";

const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div
          onClick={() => {}}
          className="hidden md:block text-sm font-semibold px-4 transation rounded-full py-3 hover:bg-neutral-100 cursor-pointer"
        >
          Airbnb your home
        </div>
        <div
          onClick={() => setIsOpen(!isOpen)} // Toggle isOpen state
          className="p-4 md:py-1 md:px-2 border-[1px] border-neutral-200  flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition"
        >
          <AiOutlineMenu />
          <div className="hidden md:block">
            <Avatar />
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 text-sm">
          <div className="flex flex-col cursor-pointer">
            <>
              <MenuItem
                onClick={() => console.log("Login clicked")}
                label="Login"
              />
              <MenuItem
                onClick={() => console.log("Sign Up clicked")}
                label="Sign Up"
              />
            </>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
