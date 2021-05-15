import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { ChangePassword } from "../components/ChangePassword";
import { LayoutWrapper } from "../components/LayoutWrapper";
import { isAuth } from "../utils/isAuth";

interface ChangePassowordProps {}

const ChangePassoword: React.FC<ChangePassowordProps> = ({}) => {
  const router = useRouter();

  const _isAuth = isAuth();

  useEffect(() => {
    if (!_isAuth) {
      router.push("/login");
    }
  }, [_isAuth]);

  return (
    <LayoutWrapper>
      <div className="login-container">
        <ChangePassword />
      </div>
    </LayoutWrapper>
  );
};

export default ChangePassoword;
