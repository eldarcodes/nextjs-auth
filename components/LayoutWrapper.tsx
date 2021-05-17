import React from "react";
import { Menu, Layout, Tag } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import { getRoutes } from "../constants/routes";
import { isAuth } from "../utils/isAuth";
import { getUser } from "../utils/getUser";
import { useDispatch, useSelector } from "react-redux";
import { ReduxDatabase } from "../store";
import { v4 } from "uuid";
import dayjs from "dayjs";
import { setDatabase } from "../redux/database-reducer";

const { Header, Content } = Layout;

interface LayoutProps {}

export const LayoutWrapper: React.FC<LayoutProps> = ({ children }) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const routes = getRoutes();
  const _isAuth = isAuth();
  const database = useSelector((state: ReduxDatabase) => state.databaseReducer);

  const { users, logs } = database;

  const user = getUser(users);

  const handleLogout = () => {
    dispatch(
      setDatabase({
        ...database,
        logs: [
          {
            user: user,
            id: v4(),
            action: "logout",
            timestamp: dayjs().unix(),
          },
          ...logs,
        ],
      })
    );
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
          <Menu.Item key="reset_to_defaults" danger onClick={handleReset}>
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
