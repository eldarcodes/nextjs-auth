import { Typography } from "antd";
import React from "react";
import { LayoutWrapper } from "../components/LayoutWrapper";

interface AboutProps {}

const About: React.FC<AboutProps> = ({}) => {
  return (
    <LayoutWrapper>
      <Typography.Title level={2}>Бакун Денис 125м-22-2</Typography.Title>
      <Typography.Text style={{ fontSize: 16 }}>
        Індивідуальне завдання: Довжина не менше мінімальної довжини, що
        встановлюється адміністратором і зберігається в обліковому записі
        користувача.
      </Typography.Text>
    </LayoutWrapper>
  );
};

export default About;
