import React from "react";
import { Link } from "react-router-dom";

function UserAccount() {
  return (
    <div className="flex items-center gap-3.5">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/cdbc60d27f622083bee6363d83cb6751db497085f4bbe90ac61db1010dfa7020?placeholderIfAbsent=true&apiKey=8da3fd6b121a4ce09e18e7d9dae826f0"
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
