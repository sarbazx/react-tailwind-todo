import { v4 as uuidv4 } from "uuid";

export const status = {
  todo: "todo",
  completed: "completed"
};
class Todo {
  constructor(todo) {
    this.id = uuidv4();
    this.task = todo;
    this.status = status.todo;
  }
}

export default Todo;
