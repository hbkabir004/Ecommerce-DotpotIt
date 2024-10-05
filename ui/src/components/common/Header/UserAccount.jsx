import React from "react";
import { Link } from "react-router-dom";

function UserAccount() {
  return (
    <div className="flex items-center gap-3.5">
      <img
        loading="lazy"
        src="/icons/user.svg"
        alt=""
        className="object-contain shrink-0 self-start mt-1 aspect-square w-[26px]"
      />
      <div className="flex flex-col my-auto">
        <Link to="/login">
          <div className="self-start text-xs">Sign In</div>
        </Link>
        <Link to="myaccount">
          <div className="text-sm font-medium">Account</div>
        </Link>
      </div>
    </div>
  );
}

export default UserAccount;
