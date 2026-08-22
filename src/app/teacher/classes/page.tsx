'use client';

import { useEffect, useState } from 'react';
import { supabaseClient } from '@/utils/supabase/client';

type ClassItem = {
  id: string;
  name: string;
  year: string | null;
};

export default function TeacherClassesPage() {
  const [classes, setClasses] = useState<ClassItem[]>([]);

  useEffect(() => {
    async function load() {
      const { data, error } = await supabaseClient.from('classes').select('*').order('created_at', { ascending: false });
      if (!error) setClasses((data ?? []) as ClassItem[]);
    }
    load();
  }, []);

  return (
    <div className="container-main py-12">
      <h1 className="text-3xl font-bold mb-4">My Classes</h1>
      <div className="space-y-3">
        {classes.length === 0 ? (
          <p className="text-[var(--muted)]">No classes available.</p>
        ) : (
          classes.map((item) => (
            <div key={item.id} className="card p-4">
              <p className="font-semibold text-lg">{item.name}</p>
              <p className="text-sm text-[var(--muted)]">{item.year || 'Academic year not set'}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}