import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { LayoutWrapper } from "../components/LayoutWrapper";
import { Login } from "../components/Login";
import { isAuth } from "./../utils/isAuth";

export default function LoginComponent() {
  const router = useRouter();

  const _isAuth = isAuth();

  useEffect(() => {
    if (_isAuth) {
      router.push("/");
    }
  }, [_isAuth]);

  return (
    <LayoutWrapper>
      <div className="login-container">
        <Login />
      </div>
    </LayoutWrapper>
  );
}
