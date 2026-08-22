'use client';

import { useState, useEffect } from 'react';
import { supabase } from '@/utils/supabase/client';

export default function TodosPage() {
  const [todos, setTodos] = useState<any[]>([]);

  useEffect(() => {
    async function getTodos() {
      const { data } = await supabase.from('todos').select();
      if (data) setTodos(data as any[]);
    }

    getTodos();
  }, []);

  return (
    <div className="container-main py-12">
      <h1 className="text-2xl font-bold mb-4">Todos (from Supabase)</h1>
      <ul className="list-disc pl-5">
        {todos.map((todo) => (
          <li key={todo.id}>{todo.name}</li>
        ))}
      </ul>
    </div>
  );
}