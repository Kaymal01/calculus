import { NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabaseClient';

export async function POST(req: Request) {
  if (!supabaseAdmin) return NextResponse.json({ error: 'Service role key not configured on server.' }, { status: 500 });
  const body = await req.json();
  const { profile_id, admission_no, dob, gender, parent_contact, class_id } = body;
  if (!profile_id || !class_id) return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });

  const { data, error } = await supabaseAdmin.from('students').insert([{ profile_id, admission_no, dob, gender, parent_contact, class_id }]);
  if (error) return NextResponse.json({ error }, { status: 500 });
  return NextResponse.json({ data });
}
