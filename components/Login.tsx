import React, { useEffect, useState } from "react";
import { Form, Input, Button, Alert } from "antd";
import { User } from "./../data/database";
import { useRouter } from "next/router";
import { find } from "lodash";
import { HIDE_ERROR_DELAY } from "../constants/constants";
import { useSelector } from "react-redux";
import { ReduxDatabase } from "../store";

interface LoginProps {}

interface FormValues {
  username: string;
  password: string;
}

export const Login: React.FC<LoginProps> = ({}) => {
  const [error, setError] = useState<string>("");

  const users = useSelector(
    (state: ReduxDatabase) => state.databaseReducer.users
  );

  const router = useRouter();

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        setError("");
      }, HIDE_ERROR_DELAY);
    }
  }, [error]);

  const onFinish = (values: FormValues) => {
    const { password = "", username } = values;

    const isCorrectUsername = !!find(users, { username });
    const isCorrectPassword = !!find(users, {
      username,
      password,
    });

    const user = find(users, { username, password });

    if (!isCorrectUsername) {
      return setError("Wrong username");
    }
    if (!isCorrectPassword) {
      return setError("Wrong password");
    }

    if (!user) {
      return setError("User not found");
    }

    if (user.blocked) {
      return setError("User is blocked");
    }

    const _user: User = user;

    localStorage.setItem("user_id", _user.id);
    router.push("/");
  };

  return (
    <>
      <Form
        name="basic"
        layout="vertical"
        style={{ width: 350 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        {error && (
          <Alert style={{ marginBottom: 15 }} message={error} type="error" />
        )}
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
          style={{ marginBottom: 15 }}
        >
          <Input autoFocus />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          style={{ marginBottom: 15 }}
        >
          <Input.Password />
        </Form.Item>

        {/* <Form.Item {...tailLayout} name="remember" valuePropName="checked">
        <Checkbox>Captcha</Checkbox>
      </Form.Item> */}

        <Form.Item>
          <Button block type="primary" htmlType="submit">
            Login
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};
