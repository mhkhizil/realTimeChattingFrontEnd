import Auth from "@/components/Auth/Auth";
import { Link } from "@mui/material";
import { useRouter } from "next/router";

import React from "react";

const register = () => {
  const nav = useRouter();
  return (
    <Auth buttonText="Register" isRegister={true}>
      <p className=" cursor-pointer text-center">
        {" "}
        Already has an account{" "}
        <Link onClick={() => nav.push("login")}> Login?</Link>
      </p>
    </Auth>
  );
};

export default register;
