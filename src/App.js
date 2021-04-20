import React from "react";
import "./App.css";
import { Button, Card, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function Todo({ todo, index, markTodo, removeTodo }) {
  return (
      <div
          className="Todo"

      >
        <span style={{ textDecoration: todo.isDone ? "line-through" : "" }}>{todo.text}</span>
        <div>
          <Button variant="outline-success" onClick={() => markTodo(index)}>✓</Button>{' '}
          <Button variant="outline-danger" onClick={() => removeTodo(index)}>✕</Button>
        </div>
      </div>
  );
}

function FormTodo({ addTodo }) {
  const [value, setValue] = React.useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label><b>Ukolnicek / TODO</b></Form.Label>
          <Form.Control type="text" className="input" value={value} onChange={e => setValue(e.target.value)} placeholder="Novy ukol" />
        </Form.Group>
        <Button variant="primary mb-3" type="submit">
          Pridat
        </Button>
      </Form>
  );
}

function App() {
  const [todos, setTodos] = React.useState([
    {
      text: "Testovaci ukol",
      isDone: false
    }
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const markTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isDone = true;
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
      <div className="App">
        <div className="container">
          <h1 className="text-center mb-4">Ukolnicek aneb TODO list</h1>
          <FormTodo addTodo={addTodo} />
          <div>
            {todos.map((todo, index) => (
                <Card>
                  <Card.Body>
                    <Todo
                        key={index}
                        index={index}
                        todo={todo}
                        markTodo={markTodo}
                        removeTodo={removeTodo}
                    />
                  </Card.Body>
                </Card>
            ))}
          </div>
        </div>
      </div>
  );
}

export default App;