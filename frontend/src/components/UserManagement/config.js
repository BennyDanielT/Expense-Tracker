import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://kfyxfwcddigquzdcduix.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtmeXhmd2NkZGlncXV6ZGNkdWl4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTc3MTc1NTAsImV4cCI6MTk3MzI5MzU1MH0.gQCSvtkF6PYgpDiepWPTqQkLjoAO-miKX4egXOkQiVU"
);

export { supabase };
