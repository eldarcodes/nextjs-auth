import React, { useEffect } from "react";
import { LayoutWrapper } from "../components/LayoutWrapper";
import { useRouter } from "next/router";
import { isAuth } from "../utils/isAuth";
import { getUser } from "../utils/getUser";
import { isAdmin } from "./../utils/isAdmin";

export default function Home() {
  const router = useRouter();

  const _isAuth = isAuth();
  const _isAdmin = isAdmin();

  useEffect(() => {
    if (!_isAuth) {
      router.push("/login");
    } else if (_isAuth && !_isAdmin) {
      router.push("/about");
    }
  }, [_isAuth, _isAdmin]);

  if (!_isAuth) {
    return null;
  }

  const user = getUser();

  return <LayoutWrapper>{user.username}</LayoutWrapper>;
}
