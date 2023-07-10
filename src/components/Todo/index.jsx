import { Row, Tag, Checkbox, Radio, Button } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { removeTodo, toggleTodo } from "../../redux/actions";

const priorityColorMapping = {
  High: "red",
  Medium: "blue",
  Low: "gray",
};

export default function Todo({ name, id, priority, completed }) {
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(completed);

  const toggleCheckbox = () => {
    setChecked(!checked);
    dispatch(toggleTodo(id));
  };

  const handleRemoveTodo = () => {
    console.log(id);
    dispatch(removeTodo(id));
  };

  const a = [
    {
      id: 1,
      label: "High",
      value: "High",
    },
    {
      id: 2,
      label: "High",
      value: "High",
    },
    {
      id: 3,
      label: "High",
      value: "High",
    },
    {
      id: 4,
      label: "High",
      value: "High",
    },
  ];

  const b = a.filter(a => a.id !== 2);
  console.log(b);

  return (
    <Row
      justify="space-between"
      style={{
        marginBottom: 3,
        ...(checked ? { opacity: 0.5, textDecoration: "line-through" } : {}),
        display: "flex",
        justifyContent: "space-between",
        alignItems : "center"
      }}
    >
      <Checkbox checked={checked} onChange={toggleCheckbox}>
        {name}
      </Checkbox>
      <Radio.Group
        style={{ display: "flex", justifyContent: "center", gap: "5px" }}
      >
        <div
          style={{
            textDecoration: checked ? "line-through" : "none",
            ...(checked ? { opacity: 1 } : {}),
          }}
        >
          <Tag color={priorityColorMapping[priority]} style={{ margin: 0 }}>
            {priority}
          </Tag>
          <Button
            type="primary"
            style={{ fontSize: 13, marginLeft: 10, opacity: 1 }}
            onClick={handleRemoveTodo}
            danger
          >
            Delete
          </Button>
        </div>
      </Radio.Group>
    </Row>
  );
}
