import React, { useEffect, useState } from "react";
import { Form, Input, Button, Alert, Row } from "antd";
import { User } from "./../data/database";
import { useRouter } from "next/router";
import { find } from "lodash";
import { HIDE_ERROR_DELAY } from "../constants/constants";
import { useSelector } from "react-redux";
import { ReduxDatabase } from "../store";
import Image from "next/image";
import { captchaSource } from "./../constants/captcha";
import { SyncOutlined } from "@ant-design/icons";

interface LoginProps {}

interface FormValues {
  username: string;
  password: string;
  captcha: string;
}

export const Login: React.FC<LoginProps> = ({}) => {
  const [error, setError] = useState<string>("");
  const [form] = Form.useForm();

  const getRandomIndex = () => Math.floor(Math.random() * captchaSource.length);

  const [captchaIndex, setCaptchaIndex] = useState<number>(getRandomIndex());
  const [loading, setLoading] = useState<boolean>(false);

  const users = useSelector(
    (state: ReduxDatabase) => state.databaseReducer.users
  );

  const router = useRouter();

  const captcha = captchaSource[captchaIndex];

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        setError("");
      }, HIDE_ERROR_DELAY);
    }
  }, [error]);

  const onFinish = (values: FormValues) => {
    const { password = "", username, captcha: inputCaptcha } = values;

    const isCorrectUsername = !!find(users, { username });
    const isCorrectPassword = !!find(users, {
      username,
      password,
    });

    const user = find(users, { username, password });

    if (inputCaptcha.toLowerCase() !== captcha.answer) {
      getNewCaptcha();
      return setError("Incorrect captcha");
    }

    if (!isCorrectUsername) {
      getNewCaptcha();
      return setError("Wrong username");
    }
    if (!isCorrectPassword) {
      getNewCaptcha();
      return setError("Wrong password");
    }

    if (!user) {
      getNewCaptcha();
      return setError("User not found");
    }

    if (user.blocked) {
      getNewCaptcha();
      return setError("User is blocked");
    }

    const _user: User = user;

    localStorage.setItem("user_id", _user.id);
    router.push("/");
  };

  const getNewCaptcha = () => {
    const newIndex = getRandomIndex();
    setLoading(true);

    if (newIndex === captchaIndex) {
      return getNewCaptcha();
    }
    setTimeout(() => {
      setLoading(false);
      form.setFieldsValue({
        captcha: "",
      });

      setCaptchaIndex(newIndex);
    }, 500);
  };

  return (
    <>
      <Form
        name="basic"
        form={form}
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

        <Row align="middle" style={{ marginBottom: 5 }}>
          <Image src={captcha.path} alt="Captcha" width="200" height="50" />
          <Button
            style={{ marginRight: 10 }}
            icon={<SyncOutlined spin={loading} />}
            onClick={getNewCaptcha}
          />
        </Row>
        <Form.Item
          rules={[{ required: true }]}
          label="Enter text from the image"
          name="captcha"
          style={{ marginBottom: 15 }}
        >
          <Input placeholder="Enter text from the image" />
        </Form.Item>

        <Form.Item>
          <Button block type="primary" htmlType="submit">
            Login
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};
