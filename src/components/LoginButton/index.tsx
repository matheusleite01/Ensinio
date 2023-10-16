import React from "react";
import UserIcon from "../../../public/assets/icons/User-icon";
import { Container } from "./styled";

const LoginButton = ({ children }: {children: React.ReactNode}) => {
  return (
    <Container>
      <UserIcon />
      {children}
    </Container>
  );
};

export default LoginButton;
