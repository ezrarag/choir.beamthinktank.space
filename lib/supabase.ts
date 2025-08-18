import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database types for TypeScript
export interface ChoirGroup {
  id: string
  name: string
  city: string
  type: 'gospel' | 'classical' | 'opera' | 'contemporary'
  description: string
  contact_email: string
  contact_phone: string
  created_at: string
}

export interface Donation {
  id: string
  amount: number
  donor_name: string
  donor_email: string
  message?: string
  city?: string
  choir_type?: string
  created_at: string
}

export interface Project {
  id: string
  name: string
  description: string
  target_amount: number
  current_amount: number
  status: 'pending' | 'in-progress' | 'completed'
  city: string
  created_at: string
}
