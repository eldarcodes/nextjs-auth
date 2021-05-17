import {
  Button,
  Table,
  Typography,
  Modal,
  Input,
  Switch,
  Alert,
  message,
  Space,
  Col,
  Row,
  InputNumber,
  Popconfirm,
} from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 } from "uuid";
import { setDatabase } from "../redux/database-reducer";
import { ReduxDatabase } from "../store";
import { find } from "lodash";
import { HIDE_ERROR_DELAY } from "../constants/constants";
import { DeleteOutlined, PlusOutlined, SaveOutlined } from "@ant-design/icons";
import dayjs from "dayjs";
import { getUser } from "../utils/getUser";

interface UserListProps {}

export const UserList: React.FC<UserListProps> = ({}) => {
  const [visibleModal, setVisibleModal] = useState<boolean>(false);
  const [newUserName, setNewUserName] = useState<string>("");
  const [error, setError] = useState<string>("");
  const database = useSelector((state: ReduxDatabase) => state.databaseReducer);
  const dispatch = useDispatch();
  const [minPasswordLength, setMinPasswordLength] = useState<number>(
    database.MIN_PASSWORD_LENGTH
  );

  const { users, logs } = database;
  const currentUser = getUser(users);

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        setError("");
      }, HIDE_ERROR_DELAY);
    }
  }, [error]);

  const columns = [
    {
      title: "Username",
      dataIndex: "username",
      key: "username",
      render: (text) => <a>{text}</a>,
      sorter: (a, b) => a.username.length - b.username.length,
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
      sorter: (a, b) => a.role.length - b.role.length,
    },
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Block user",
      key: "block",
      render: (text, record) =>
        record.role !== "admin" ? (
          <Switch
            defaultChecked={record.blocked}
            onChange={(flag) => handleBlockUser(flag, record.id)}
          />
        ) : null,
    },
    {
      title: "Enable password limit",
      key: "limit",
      render: (text, record) =>
        record.role !== "admin" ? (
          <Switch
            defaultChecked={record.enableLimit}
            onChange={(flag) => handleEnableLimit(flag, record.id)}
          />
        ) : null,
    },
    {
      title: "Delete user",
      key: "delete",
      render: (text, record) =>
        record.role !== "admin" ? (
          <Popconfirm
            title="Are you sure you want to delete this account?"
            onConfirm={() => handleDeleteAccount(record.id)}
          >
            <Button icon={<DeleteOutlined />} />
          </Popconfirm>
        ) : null,
    },
  ];

  const handleDeleteAccount = (id) => {
    const newUsers = users.filter((user) => user.id !== id);

    const user = find(users, { id });

    const newDatabase = {
      ...database,
      users: newUsers,
      logs: [
        {
          user,
          id: v4(),
          action: "delete_account",
          timestamp: dayjs().unix(),
          ref: currentUser,
        },
        ...logs,
      ],
    };

    dispatch(setDatabase(newDatabase));

    message.info(`Account "${user.username}" was deleted`);
  };

  const handleBlockUser = (flag, id) => {
    const newUsers = users.map((user) =>
      user.id === id ? { ...user, blocked: flag } : user
    );

    const user = find(users, { id });

    const newDatabase = {
      ...database,
      users: newUsers,
      logs: [
        {
          user,
          id: v4(),
          action: "block_account",
          timestamp: dayjs().unix(),
          ref: currentUser,
        },
        ...logs,
      ],
    };

    message.info(`${user.username} was ${flag ? "blocked" : "unblocked"}`);

    dispatch(setDatabase(newDatabase));
  };

  const handleEnableLimit = (flag, id) => {
    const newUsers = users.map((user) =>
      user.id === id ? { ...user, enableLimit: flag } : user
    );

    const user = find(users, { id });

    const newDatabase = {
      ...database,
      users: newUsers,
      logs: [
        {
          user,
          id: v4(),
          action: "limit_account",
          timestamp: dayjs().unix(),
          ref: currentUser,
        },
        ...logs,
      ],
    };
    dispatch(setDatabase(newDatabase));
  };

  const handleCreateUser = () => {
    const newUser = {
      id: v4(),
      username: newUserName,
      blocked: false,
      role: "user",
      password: "",
    };

    const userAlereadyExists = find(users, { username: newUserName });

    if (userAlereadyExists) {
      return setError("Username already exists");
    }

    const newDatabase = {
      ...database,
      users: [...users, newUser],
    };

    dispatch(setDatabase(newDatabase));
    setVisibleModal(false);
    message.success("User was created");
  };

  const saveMinPasswordLength = () => {
    dispatch(
      setDatabase({ ...database, MIN_PASSWORD_LENGTH: minPasswordLength })
    );
    message.success("New password length saved");
  };

  return (
    <>
      <Row>
        <Col span={12}>
          <Space align="center" style={{ marginBottom: 15 }}>
            <Typography.Title style={{ marginBottom: 0 }} level={2}>
              User list
            </Typography.Title>
            <Button
              icon={<PlusOutlined />}
              size="large"
              type="primary"
              onClick={() => setVisibleModal(true)}
            >
              Create new user
            </Button>
          </Space>
        </Col>
        <Col span={12} style={{ textAlign: "right" }}>
          <p
            style={{
              marginBottom: 0,
              display: "inline-block",
              fontSize: 16,
              marginRight: 5,
            }}
          >
            Minimal password length for users:
          </p>
          <InputNumber
            size="large"
            placeholder="Minimal password length for users"
            style={{ width: 200 }}
            onChange={(value) => setMinPasswordLength(+value)}
            value={minPasswordLength}
          />
          <Button
            style={{ marginLeft: 5 }}
            size="large"
            icon={<SaveOutlined />}
            onClick={saveMinPasswordLength}
            disabled={+minPasswordLength === +database.MIN_PASSWORD_LENGTH}
          >
            Save
          </Button>
        </Col>
      </Row>
      <Table rowKey="id" columns={columns} dataSource={users || []} />
      <Modal
        title="Create new user"
        visible={visibleModal}
        onCancel={() => setVisibleModal(false)}
        onOk={handleCreateUser}
      >
        {error && (
          <Alert style={{ marginBottom: 15 }} message={error} type="error" />
        )}
        <div style={{ marginBottom: 5 }}>New user name</div>{" "}
        <Input
          autoFocus
          onPressEnter={handleCreateUser}
          value={newUserName}
          onChange={(e) => setNewUserName(e.target.value)}
        />
      </Modal>
    </>
  );
};
