import { useState } from "react";
import {
  AiOutlineUser,
  AiOutlineShoppingCart,
  AiOutlineBell,
  AiOutlineSearch,
} from "react-icons/ai";
import { ImBooks } from "react-icons/im";

export default function Navbar() {
  return (
    <div className="h-full mx-8">
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">BuyBook</a>
        </div>
        <div className="flex flex-row gap-4">
          <div className="form-control ">
            <AiOutlineSearch className="absolute h-[20px] w-[20px] my-[10px] mx-[10px]" />
            <input
              type="text"
              placeholder=""
              className="input  bg-main-grey w-[260px] h-[40px]"
            />
          </div>
          <div>
            <AiOutlineBell className="h-[24px] w-[24px] fill-dark-grey" />
          </div>
          <div>
            <AiOutlineShoppingCart className="h-[24px] w-[24px] fill-dark-grey" />
          </div>
          <div>
            <ImBooks className="h-[24px] w-[24px] fill-dark-grey" />
          </div>
          <div>
            <AiOutlineUser className="h-[24px] w-[24px] fill-dark-grey" />
          </div>
        </div>
      </div>
    </div>
  );
}
