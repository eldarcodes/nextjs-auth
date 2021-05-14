import React from "react";
import { LayoutWrapper } from "../components/LayoutWrapper";
import { Login } from "../components/Login";

export default function LoginComponent() {
  return (
    <LayoutWrapper>
      <div className="login-container">
        <Login />
      </div>
    </LayoutWrapper>
  );
}
