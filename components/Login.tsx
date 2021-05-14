import React, { useEffect, useState } from "react";
import { Form, Input, Button, Alert } from "antd";
import { database, User } from "./../data/database";
import { useRouter } from "next/router";
import { find } from "lodash";

interface LoginProps {}

interface FormValues {
  username: string;
  password: string;
}

const HIDE_ERROR_DELAY = 6000;

export const Login: React.FC<LoginProps> = ({}) => {
  const [error, setError] = useState<string>("");

  const router = useRouter();

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        setError("");
      }, HIDE_ERROR_DELAY);
    }
  }, [error]);

  const onFinish = (values: FormValues) => {
    console.log(values, database);

    const { password, username } = values;

    const isCorrectUsername = !!find(database.users, { username });
    const isCorrectPassword = !!find(database.users, { username, password });

    const user = find(database.users, { username, password });

    if (!isCorrectUsername) {
      return setError("Wrong username");
    }
    if (!isCorrectPassword) {
      return setError("Wrong password");
    }

    if (!user) {
      return setError("User not found");
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
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
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
