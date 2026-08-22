import { NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabaseClient';

export async function POST(req: Request) {
  if (!supabaseAdmin) return NextResponse.json({ error: 'Service role key not configured on server.' }, { status: 500 });

  const body = await req.json();
  const { user_id, full_name, role = 'student', phone, avatar_url, class_id } = body;

  if (!user_id) return NextResponse.json({ error: 'Missing user_id' }, { status: 400 });

  try {
    // Check if profile already exists
    const { data: existing } = await supabaseAdmin
      .from('profiles')
      .select('*')
      .eq('user_id', user_id)
      .limit(1)
      .maybeSingle();

    if (existing) return NextResponse.json({ data: existing });

    const { data, error } = await supabaseAdmin
      .from('profiles')
      .insert([{ user_id, full_name, role, phone, avatar_url, class_id }])
      .select()
      .maybeSingle();

    if (error) return NextResponse.json({ error }, { status: 500 });

    return NextResponse.json({ data });
  } catch (err: any) {
    return NextResponse.json({ error: err.message || String(err) }, { status: 500 });
  }
}
