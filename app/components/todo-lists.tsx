import { Todo } from "../models/todo";
import TodoItem from "./todo-item";

interface TodoListsProps {
    todos: Todo[];
}

export default function TodoLists({ todos }: TodoListsProps) {

    return (
        <ul className="list-none space-y-4">
            {todos.map((todo) => (
                <TodoItem key={todo.id} {...todo} />
            ))}
        </ul>
    )

}