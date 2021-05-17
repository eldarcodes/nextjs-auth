import React from "react";
import { message, Table, Typography } from "antd";
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
      login: `User "${user.username}" login to account`,
      logout: `User "${user.username}" logged out`,
      password: `User "${user.username}" changed his password`,
      delete_account: `Admin "${ref?.username}" delete account "${user.username}" `,
      block_account: `Admin "${ref?.username}" ${
        user.blocked ? "unblocked" : "blocked"
      } account "${user.username}"`,
      limit_account: `Admin "${ref?.username}" ${
        user.enableLimit ? "disable limit" : "enable limit"
      } for account "${user.username}"`,
    };

    return messages[action];
  };

  const columns = [
    {
      title: "Username",
      key: "username",
      dataIndex: ["user", "username"],
      sorter: (a, b) => a.user.username.length - b.user.username.length,
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

  return (
    <>
      <Typography.Title style={{ marginBottom: 0 }} level={2}>
        User logs
      </Typography.Title>
      <Table rowKey="id" dataSource={logs} columns={columns} />
    </>
  );
};
