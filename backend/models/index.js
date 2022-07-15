// Creates the supabase api client

import {createClient} from '@supabase/supabase-js'

const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtmeXhmd2NkZGlncXV6ZGNkdWl4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTc3MTc1NTAsImV4cCI6MTk3MzI5MzU1MH0.gQCSvtkF6PYgpDiepWPTqQkLjoAO-miKX4egXOkQiVU'

const SUPABASE_URL = "https://kfyxfwcddigquzdcduix.supabase.co"

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)
