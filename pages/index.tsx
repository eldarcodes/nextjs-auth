import React, { useEffect } from "react";
import { LayoutWrapper } from "../components/LayoutWrapper";
import { useRouter } from "next/router";
import { isAuth } from "../utils/isAuth";

export default function Home() {
  const router = useRouter();

  const user = isAuth();

  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, [user]);

  if (!user) {
    return null;
  }

  return <LayoutWrapper>{user.username}</LayoutWrapper>;
}
