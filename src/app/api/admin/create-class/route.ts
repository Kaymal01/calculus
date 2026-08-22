import { NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabaseClient';

export async function POST(req: Request) {
  if (!supabaseAdmin) return NextResponse.json({ error: 'Service role key not configured on server.' }, { status: 500 });
  const body = await req.json();
  const { name, year, teacher_id } = body;
  if (!name) return NextResponse.json({ error: 'Missing class name' }, { status: 400 });

  const { data, error } = await supabaseAdmin.from('classes').insert([{ name, year, teacher_id }]);
  if (error) return NextResponse.json({ error }, { status: 500 });
  return NextResponse.json({ data });
}
