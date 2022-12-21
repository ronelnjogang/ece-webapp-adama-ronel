import {createClient} from '@supabase/supabase-js'

export async function getStaticProps() {

    const supabaseAdmin = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL || '', 
        process.env.SUPABASE_SERVICE_ROLE_KEY || ''
      )
    const {data} = await supabaseAdmin.from('contacts').select('*')
    return {
        props:{
            contacts: data,
        },
    }
  }