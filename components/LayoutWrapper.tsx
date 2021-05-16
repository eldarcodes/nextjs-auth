import React from "react";
import { Menu, Layout, Button, Tag } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import { getRoutes } from "../constants/routes";
import { isAuth } from "../utils/isAuth";
import { getUser } from "../utils/getUser";
import { useSelector } from "react-redux";
import { ReduxDatabase } from "../store";

const { Header, Content } = Layout;

interface LayoutProps {}

export const LayoutWrapper: React.FC<LayoutProps> = ({ children }) => {
  const router = useRouter();

  const routes = getRoutes();

  const _isAuth = isAuth();

  const users = useSelector(
    (state: ReduxDatabase) => state.databaseReducer.users
  );

  const user = getUser(users);

  const handleLogout = () => {
    localStorage.removeItem("user_id");
    router.reload();
  };

  const handleReset = () => {
    localStorage.clear();
    router.reload();
  };

  return (
    <Layout className="layout">
      <Header>
        <Menu theme="dark" mode="horizontal" selectedKeys={[router.pathname]}>
          {_isAuth && (
            <Menu.Item key="username">
              <Link href="/">
                <>
                  User: <Tag>{user?.username}</Tag>
                </>
              </Link>
            </Menu.Item>
          )}
          {routes.map(({ path, title }) => (
            <Menu.Item key={path}>
              <Link href={path}>{title}</Link>
            </Menu.Item>
          ))}
          {_isAuth && (
            <Menu.Item key="logout" danger onClick={handleLogout}>
              Logout
            </Menu.Item>
          )}
          <Menu.Item key="logout" danger onClick={handleReset}>
            Reset to defaults
          </Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: "0 50px", marginTop: 16 }}>
        <div className="site-layout-content">{children}</div>
      </Content>
    </Layout>
  );
};
