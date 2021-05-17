import React, { useEffect, useState } from "react";
import { Form, Alert, Input, Button, message } from "antd";
import { HIDE_ERROR_DELAY } from "../constants/constants";
import { getUser } from "../utils/getUser";
import { useDispatch, useSelector } from "react-redux";
import { ReduxDatabase } from "../store";
import { setDatabase } from "../redux/database-reducer";
import { v4 } from "uuid";
import dayjs from "dayjs";

interface ChangePasswordProps {}

interface FormValues {
  old_password: string;
  new_password: string;
  confirm_password: string;
}

export const ChangePassword: React.FC<ChangePasswordProps> = ({}) => {
  const [error, setError] = useState<string>("");

  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const database = useSelector((state: ReduxDatabase) => state.databaseReducer);
  const { MIN_PASSWORD_LENGTH, users, logs } = database;

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        setError("");
      }, HIDE_ERROR_DELAY);
    }
  }, [error]);

  const onFinish = (values: FormValues) => {
    const { old_password = "", new_password, confirm_password } = values;

    const user = getUser(users);

    if (user.password !== old_password) {
      return setError("Old password is incorrect");
    }

    if (new_password !== confirm_password) {
      return setError("Passwords does not match");
    }

    if (user.enableLimit && new_password.length < MIN_PASSWORD_LENGTH) {
      return setError(
        `Password must be more than ${MIN_PASSWORD_LENGTH} characters`
      );
    }

    if (new_password === old_password) {
      return setError(`This password is unavailable`);
    }

    const newUsers = users.map((newUser) =>
      newUser.id === user.id
        ? {
            ...newUser,
            password: new_password,
          }
        : newUser
    );

    const newDatabase = {
      ...database,
      users: newUsers,
      logs: [
        {
          user,
          id: v4(),
          action: "password",
          timestamp: dayjs().unix(),
        },
        ...logs,
      ],
    };
    dispatch(setDatabase(newDatabase));
    setError("");
    message.success("Password changed!");
    form.resetFields();
  };

  return (
    <>
      <Form
        name="basic"
        layout="vertical"
        form={form}
        style={{ width: 350 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        {error && (
          <Alert style={{ marginBottom: 15 }} message={error} type="error" />
        )}
        <Form.Item
          label="Old password"
          name="old_password"
          style={{ marginBottom: 15 }}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          label="New password"
          name="new_password"
          rules={[{ required: true, message: "Please input your password!" }]}
          style={{ marginBottom: 15 }}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          label="Confirm password"
          name="confirm_password"
          rules={[{ required: true, message: "Please input your password!" }]}
          style={{ marginBottom: 15 }}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item>
          <Button block type="primary" htmlType="submit">
            Change password
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};
