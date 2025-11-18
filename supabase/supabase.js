//import { createClient } from '@supabase/supabase-js'

const supabaseClient = supabase.createClient('https://rmcruczjhpycreamgrgxm.supabase.co', 
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJtcnVjempocHljcmVhbWdyZ3htIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE4OTg4NTksImV4cCI6MjA3NzQ3NDg1OX0.NEZHRdzLXUhY8Lotmp2vZAIQsdYx0Vq6dNLEYkSfiyY')

    console.log(supabaseClient)