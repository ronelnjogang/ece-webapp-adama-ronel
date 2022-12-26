import "bootstrap/dist/css/bootstrap.css"
import "../styles/style.css"
import Layout from "../components/layout"

import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { SessionContextProvider } from '@supabase/auth-helpers-react'
import { useState, useEffect } from 'react';
import Account from "../components/account"
export default function MyApp({ Component, pageProps }) {
  const [supabase] = useState(() => createBrowserSupabaseClient())
  useEffect(()=>{
    import("bootstrap/dist/js/bootstrap");
},[]);

  return (

  <Layout>
    
    <SessionContextProvider supabaseClient={supabase} initialSession={pageProps.initialSession}>
      <Component {...pageProps} />
    </SessionContextProvider>
  </Layout>)


  
}

