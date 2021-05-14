import React from "react";
import { Menu, Layout, Button } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import { getRoutes } from "../constants/routes";
import { isAuth } from "../utils/isAuth";

const { Header, Content } = Layout;

interface LayoutProps {}

export const LayoutWrapper: React.FC<LayoutProps> = ({ children }) => {
  const router = useRouter();

  const routes = getRoutes();

  const user = isAuth();

  const handleLogout = () => {
    localStorage.removeItem("user_id");
    router.reload();
  };

  return (
    <Layout className="layout">
      <Header>
        <Menu theme="dark" mode="horizontal" selectedKeys={[router.pathname]}>
          {routes.map(({ path, title }) => (
            <Menu.Item key={path}>
              <Link href={path}>{title}</Link>
            </Menu.Item>
          ))}
          {user && (
            <Menu.Item key="logout" danger onClick={handleLogout}>
              Logout
            </Menu.Item>
          )}
        </Menu>
      </Header>
      <Content style={{ padding: "0 50px", marginTop: 16 }}>
        <div className="site-layout-content">{children}</div>
      </Content>
    </Layout>
  );
};
