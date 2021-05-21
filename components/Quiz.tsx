import React, { useState } from "react";
import { Button, Form, InputNumber, Modal, Steps } from "antd";
import { IQuiz, QuizItems } from "../constants/quiz";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { ReduxDatabase } from "../store";
import { setDatabase } from "../redux/database-reducer";
import { getUser } from "../utils/getUser";
import dayjs from "dayjs";
import { v4 } from "uuid";
import { isAuth } from "../utils/isAuth";
import { RightOutlined } from "@ant-design/icons";

interface QuizProps {}

const TIME_TO_NEXT_QUIZ = 1000 * 60 * 2; // 2 min
const { Step } = Steps;

export const Quiz: React.FC<QuizProps> = ({}) => {
  const [visible, setVisible] = useState(false);
  const [questions, setQuestions] = useState<IQuiz[]>([]);
  const [current, setCurrent] = useState(0);

  const [form] = Form.useForm();

  const router = useRouter();
  const dispatch = useDispatch();

  const database = useSelector((state: ReduxDatabase) => state.databaseReducer);

  const { users, logs } = database;

  const user = getUser(users);

  if (!isAuth()) {
    return null;
  }

  setTimeout(() => {
    if (!visible) {
      setVisible(true);
      setQuestions(
        QuizItems.sort(() => Math.random() - Math.random()).slice(0, 3)
      );
    }
  }, TIME_TO_NEXT_QUIZ);

  const logout = () => {
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

  const handleSubmit = (values) => {
    const isCorrect = values[current] === questions[current].answer;
    if (!isCorrect) {
      logout();
    } else {
      setVisible(false);
      setQuestions([]);
      setCurrent(0);
      form.resetFields();
    }
  };

  const handleNext = () => {
    const values = form.getFieldsValue();

    const isCorrect = values[current] === questions[current].answer;

    if (isCorrect) {
      setCurrent((prev) => ++prev);
    } else {
      logout();
    }
  };

  const isLast = current === 2;

  return (
    <Modal
      title="Quiz"
      width={800}
      closable={false}
      visible={visible}
      footer={[
        isLast ? (
          <Button onClick={form.submit} type="primary">
            Submit
          </Button>
        ) : (
          <Button onClick={handleNext} icon={<RightOutlined />}>
            Next question
          </Button>
        ),
      ]}
    >
      <Steps style={{ marginBottom: 15 }} current={current}>
        <Step title="First task" />
        <Step title="Second task" />
        <Step title="Third task" />
      </Steps>
      <Form form={form} onFinish={handleSubmit} layout="vertical">
        {questions.map((question, index) => (
          <Form.Item
            key={question.question}
            label={`Solve: ${question.question}`}
            name={index}
            hidden={current !== +index}
          >
            <InputNumber
              autoFocus
              onPressEnter={isLast ? form.submit : handleNext}
              style={{ width: "100%" }}
            />
          </Form.Item>
        ))}
      </Form>
    </Modal>
  );
};
