import { handleInputChange } from "@/util/formHelper";
import { Button, Stack, TextField } from "@mui/material";
import React, { useState } from "react";
interface AuthProps {
  children: React.ReactNode;
  isRegister?: boolean;
  buttonText: string;
}
interface loginData {
  email: string;
  password: string;
}
interface registerData extends loginData {
  name: string;
  confirmPassword: string;
}
const Auth = ({ children, isRegister, buttonText }: AuthProps) => {
  const [loginData, setLoginData] = useState<loginData>({
    email: "",
    password: "",
  });
  const [registerData, setRegisterData] = useState<registerData>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  return (
    <Stack
      spacing={3}
      sx={{
        height: "100vh",
        maxWidth: {
          xs: "70%",
          md: "30%",
        },
        margin: "0 auto",
        justifyContent: "center",
      }}
    >
      {isRegister && (
        <TextField
          type="text"
          label="Name"
          placeholder="John Doe"
          onChange={handleInputChange(setRegisterData)}
          name="name"
        />
      )}
      <TextField
        type="email"
        label="Email"
        name="email"
        placeholder="Johndoe@gmail.com"
        onChange={handleInputChange(
          isRegister ? setRegisterData : setLoginData
        )}
      />
      <TextField
        type="password"
        label="Password"
        name="password"
        onChange={handleInputChange(
          isRegister ? setRegisterData : setLoginData
        )}
      />
      {isRegister && (
        <TextField
          type="password"
          label="Confirm Password"
          placeholder="Confirm Password"
          onChange={handleInputChange(setRegisterData)}
          name="confirmPassword"
        />
      )}
      <Button>{buttonText}</Button>
      {children}
    </Stack>
  );
};

export default Auth;
