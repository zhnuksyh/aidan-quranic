-- Run this in Supabase Dashboard > SQL Editor
-- Required for cloud sync (Phase 4, Commit 6)

CREATE TABLE user_progress (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) NOT NULL UNIQUE,
  completed_lessons TEXT[] DEFAULT '{}',
  current_xp INTEGER DEFAULT 0,
  streak_days INTEGER DEFAULT 0,
  unlocked_verses TEXT[] DEFAULT '{}',
  last_active_date DATE,
  updated_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE user_progress ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read own progress" ON user_progress
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can upsert own progress" ON user_progress
  FOR ALL USING (auth.uid() = user_id);
