# Homely Health Care - Deployment Guide

## Prerequisites
- Node.js 18+ installed
- Supabase account (free tier works)
- Vercel account (free tier works)
- Git installed

## Step 1: Install Dependencies
```bash
npm install
```

## Step 2: Set Up Supabase

1. Go to https://supabase.com and create a new project
2. Name it "homelyhealth-care"
3. Wait for database to provision (2-3 minutes)
4. Go to Project Settings > API
5. Copy your:
   - Project URL
   - anon/public key

## Step 3: Run Database Migration

1. In Supabase dashboard, go to SQL Editor
2. Copy content from `supabase/schema.sql`
3. Paste and run in SQL Editor
4. Verify tables created in Table Editor

## Step 4: Configure Environment Variables

Create `.env.local` file:
```
NEXT_PUBLIC_SUPABASE_URL=your_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
```

## Step 5: Run Development Server
```bash
npm run dev
```
Open http://localhost:3000

## Step 6: Deploy to Vercel

1. Push code to GitHub
2. Go to vercel.com
3. Import your repository
4. Add environment variables in Vercel dashboard
5. Deploy!

## Creating Admin User

Run this SQL in Supabase SQL Editor:
```sql
INSERT INTO users (email, role, first_name, last_name)
VALUES ('admin@homelyhealth.uk', 'admin', 'Admin', 'User');
```

## Success! 🎉
Your website is now live!
