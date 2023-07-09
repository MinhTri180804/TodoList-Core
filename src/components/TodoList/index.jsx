import { Col, Row, Input, Button, Select, Tag } from "antd";
import Todo from "../Todo";
import { useDispatch, useSelector } from "react-redux";
import { todoListResultFilter } from "../../redux/selector";
import { useState } from "react";
import { addTodo } from "../../redux/actions";
import { v4 as uuidv4 } from "uuid";
import { useForm } from "react-hook-form";

export default function TodoList() {
  const dispatch = useDispatch();
  const {
    formState: { errors },
  } = useForm({
    defaultValues: {
      nameTodo: "",
    },
  });
  const todoList = useSelector(todoListResultFilter);
  const [nameTodo, setNameTodo] = useState("");
  const [priorityTodo, setPriorityTodo] = useState("Medium");

  const handleChangeNameTodo = (e) => {
    setNameTodo(e.target.value);
  };

  const handleChangePriorityTodo = (value) => {
    setPriorityTodo(value);
  };

  const handleOnAddTodo = () => {
    const inputNameTodo = document.querySelector(".input__name-todo");
    const messageError = document.querySelector(".message-error");
    if (inputNameTodo.value !== "") {
      dispatch(
        addTodo({
          id: uuidv4(),
          name: nameTodo,
          completed: false,
          priority: priorityTodo,
        })
      );
      setNameTodo("");
      setPriorityTodo("Medium");
      inputNameTodo.focus();
      messageError.innerHTML = "";
      inputNameTodo.style.borderColor = "#ccc";
    } else {
      inputNameTodo.style.borderColor = "red";
      messageError.innerHTML = "Name todo cannot be empty";
      messageError.style.display = "inline-block !important";
      messageError.style.width = "100%";
      messageError.style.color = "red";
    }
  };

  return (
    <Row style={{ height: "calc(100% - 40px)" }}>
      <Col span={24} style={{ height: "calc(100% - 40px)", overflowY: "auto" }}>
        {todoList.map((todo) => (
          <Todo
            key={todo.id}
            name={todo.name}
            id={todo.id}
            completed={todo.completed}
            priority={todo.priority}
          />
        ))}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: "flex" }} compact>
          <Input
            className="input__name-todo"
            value={nameTodo}
            onChange={handleChangeNameTodo}
          />
          <Select value={priorityTodo} onChange={handleChangePriorityTodo}>
            <Select.Option value="High" label="High">
              <Tag color="red">High</Tag>
            </Select.Option>
            <Select.Option value="Medium" label="Medium">
              <Tag color="blue">Medium</Tag>
            </Select.Option>
            <Select.Option value="Low" label="Low">
              <Tag color="gray">Low</Tag>
            </Select.Option>
          </Select>
          <Button type="primary" onClick={handleOnAddTodo}>
            Add
          </Button>
        </Input.Group>
        <p className="message-error">{errors?.nameTodo?.message}</p>
      </Col>
    </Row>
  );
}
