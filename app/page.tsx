import { cookies } from 'next/headers'

import { createClient } from './utils/supabase/server'
import TodoLists from "./components/todo-lists";
import { Todo } from "./models/todo";

export default async function Home() {
  const cookieStore = await cookies()
  const supabase = createClient(cookieStore)

  const { data: todos } = await supabase.from('todos').select().overrideTypes<Array<Todo>, { merge: false }>();

  return (
    <main className="p-4 md:p-8 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">TodoList!</h1>
      <hr className="my-8 co" />
      <TodoLists todos={todos ?? []} />
    </main>
  );
}
