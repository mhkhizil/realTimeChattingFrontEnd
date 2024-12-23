import Auth from "@/components/Auth/Auth";
import { Link } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";

const login = () => {
  const nav = useRouter();
  return (
    <Auth buttonText="Login">
      <p className=" cursor-pointer text-center ">
        Does not have an account
        <Link className="" onClick={() => nav.push("register")}>
          {" "}
          Register?
        </Link>
      </p>{" "}
    </Auth>
  );
};

export default login;
