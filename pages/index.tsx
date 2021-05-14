import React from "react";
import { LayoutWrapper } from "../components/LayoutWrapper";
import { useRouter } from "next/router";
import { isAuth } from "../utils/isAuth";

export default function Home() {
  const router = useRouter();

  const user = isAuth();

  if (!user) {
    return router.push("/login");
  }

  return <LayoutWrapper>{user.username}</LayoutWrapper>;
}
