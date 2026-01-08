#!/bin/bash

echo "Creating all project files..."

# Create lib files
mkdir -p src/lib

# Supabase client
cat > src/lib/supabase.ts << 'EOF'
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
EOF

# Types
cat > src/lib/types.ts << 'EOF'
export type User = {
  id: string;
  email: string;
  role: 'staff' | 'admin';
  first_name: string;
  last_name: string;
  phone?: string;
  status: 'active' | 'inactive' | 'on_leave';
};

export type Shift = {
  id: string;
  date: string;
  start_time: string;
  end_time: string;
  location: string;
  area: string;
  service_type: string;
  status: 'unassigned' | 'assigned' | 'confirmed' | 'completed' | 'cancelled';
};
EOF

# Utils
cat > src/lib/utils.ts << 'EOF'
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
EOF

# Environment example
cat > .env.local.example << 'EOF'
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
EOF

# Tailwind config
cat > tailwind.config.ts << 'EOF'
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
        },
      },
    },
  },
  plugins: [],
};
export default config;
EOF

echo "✅ All files created successfully!"
