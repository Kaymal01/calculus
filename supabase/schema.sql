-- Supabase schema for Calculus Comprehensive School
-- Run this in the Supabase SQL editor (or via migrations). Review policies carefully before production.

-- Create classes table
CREATE TABLE IF NOT EXISTS classes (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  year text,
  teacher_id uuid,
  created_at timestamptz DEFAULT now()
);

-- Create profiles table (users)
CREATE TABLE IF NOT EXISTS profiles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users (id) ON DELETE CASCADE,
  full_name text,
  role text CHECK (role IN ('admin','teacher','student','parent')) DEFAULT 'student',
  phone text,
  avatar_url text,
  class_id uuid REFERENCES classes (id),
  created_at timestamptz DEFAULT now()
);

-- Create students table (separate for student-specific fields)
CREATE TABLE IF NOT EXISTS students (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  profile_id uuid REFERENCES profiles (id) ON DELETE CASCADE,
  admission_no text UNIQUE,
  dob date,
  gender text,
  parent_contact text,
  class_id uuid REFERENCES classes (id),
  created_at timestamptz DEFAULT now()
);

-- Optional enrollments table for many-to-many (student <-> class)
CREATE TABLE IF NOT EXISTS enrollments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  student_id uuid REFERENCES students (id) ON DELETE CASCADE,
  class_id uuid REFERENCES classes (id) ON DELETE CASCADE,
  enrolled_at timestamptz DEFAULT now()
);

-- Enable RLS on tables (you should tighten policies in production)
ALTER TABLE IF EXISTS profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE IF EXISTS classes ENABLE ROW LEVEL SECURITY;
ALTER TABLE IF EXISTS students ENABLE ROW LEVEL SECURITY;

-- Basic permissive policies for initial setup (allow authenticated users to read/insert)
-- Review and restrict these before going live.

CREATE POLICY IF NOT EXISTS "profiles_auth_select" ON profiles
  FOR SELECT USING (auth.role() = 'authenticated');

CREATE POLICY IF NOT EXISTS "profiles_insert_any" ON profiles
  FOR INSERT WITH CHECK (true);

CREATE POLICY IF NOT EXISTS "classes_auth_select" ON classes
  FOR SELECT USING (auth.role() = 'authenticated');

CREATE POLICY IF NOT EXISTS "classes_admin_insert" ON classes
  FOR INSERT WITH CHECK (true);

CREATE POLICY IF NOT EXISTS "students_auth_select" ON students
  FOR SELECT USING (auth.role() = 'authenticated');

CREATE POLICY IF NOT EXISTS "students_admin_insert" ON students
  FOR INSERT WITH CHECK (true);

-- Indexes
CREATE INDEX IF NOT EXISTS idx_profiles_user_id ON profiles (user_id);
CREATE INDEX IF NOT EXISTS idx_students_profile_id ON students (profile_id);

-- Done
