export default function Home() {
  const todos: any[] = [];

  return (
    <main className="p-4 md:p-8 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">TodoList!</h1>
      <hr className="my-8 co" />
      <ul className="list-none space-y-4">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="p-4 bg-white shadow-md rounded-lg hover:bg-gray-100 transition duration-150 ease-in-out flex items-center justify-between"
          >
            <div>
              <p className="font-semibold text-blue-600">{todo.title}</p>
              <p className="text-gray-500 text-sm">{todo.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
