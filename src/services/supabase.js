
import { createClient } from '@supabase/supabase-js'

export const supabaseUrl = 'https://iycsmnmpfviyewogejit.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml5Y3Ntbm1wZnZpeWV3b2dlaml0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI5Mjc5NTMsImV4cCI6MjA2ODUwMzk1M30.7AjyvRL8aGPfPWh6rVwV0SJU8nDH94wEeSuxAn_Nax8"
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;