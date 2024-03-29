import React from "react";
import { message, Table, Tabs, Typography } from "antd";
import { ReduxDatabase } from "./../store";
import { useSelector } from "react-redux";
import { Log, LogAction, User } from "../data/database";
import { getDate } from "../utils/getDate";

interface LogsListProps {}

export const LogsList: React.FC<LogsListProps> = ({}) => {
  const logs = useSelector(
    (state: ReduxDatabase) => state.databaseReducer.logs
  );

  const getActionsMessage = (record, action: LogAction): string => {
    const { user, ref }: Log = record;
    const messages = {
      login: `login to account`,
      logout: `logged out`,
      change_password: `changed his password`,
      password_limit: `change password limit for users`,
      delete_account: `delete account "${user.username}" `,
      block_account: `${user.blocked ? "unblocked" : "blocked"} account "${
        user.username
      }"`,
      limit_account: `${
        user.enableLimit ? "disable limit" : "enable limit"
      } for account "${user.username}"`,
      create_account: `create account with username - "${user.username}"`,
    };

    return messages[action];
  };

  const columns = [
    {
      title: "Username",
      key: "username",
      dataIndex: ["user", "username"],
      sorter: (a, b) => a.user.username.length - b.user.username.length,
      render: (_, record) =>
        record?.ref ? record?.ref?.username : record?.user?.username,
      width: "20%",
    },
    {
      title: "Action",
      key: "action",
      dataIndex: "action",
      sorter: (a, b) => a.action.length - b.action.length,
    },
    {
      title: "Message",
      key: "message",
      dataIndex: "action",
      render: (_, record) => getActionsMessage(record, record.action),
    },

    {
      title: "Date",
      key: "action",
      dataIndex: "timestamp",
      render: (timestamp) => getDate({ timestamp }),
      sorter: (a, b) => a.timestamp - b.timestamp,
    },
  ];

  const loginLogsActions = ["login", "logout", "create_account"];

  const loginLogs = logs.filter((log) => loginLogsActions.includes(log.action));
  const adminLogs = logs.filter(
    (log) => !loginLogs.map((i) => i.action).includes(log.action)
  );

  return (
    <>
      <Typography.Title style={{ marginBottom: 0 }} level={2}>
        User logs
      </Typography.Title>
      <Tabs>
        <Tabs.TabPane tab="Login / Logout" key="1">
          <Table rowKey="id" dataSource={loginLogs} columns={columns} />
        </Tabs.TabPane>
        <Tabs.TabPane tab="Admin actions" key="2">
          <Table rowKey="id" dataSource={adminLogs} columns={columns} />
        </Tabs.TabPane>
      </Tabs>
    </>
  );
};
