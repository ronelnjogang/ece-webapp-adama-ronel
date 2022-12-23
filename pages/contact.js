import { createClient } from '@supabase/supabase-js'
//  import { supabase } from './../lib/supabaseClient';


export async function getStaticProps() {

    const supabase = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL || '',
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
    )
    // console.log("keys",process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY )
    // const contacts = await supabase.from('contacts')
    const { data, error } = await supabase.from('contacts').select()
    if (error) {
        throw error
    }
    console.log('contacts list:', data);


    return {
        props: {
            contacts: data,
        },
    }
}

export default function Contact({ contacts }) {
    // console.log(`contacts: ${contacts}`);
    return (
        <>
            {contacts?.map((contact => {
                return (
                    <>
                        <p>{contact.firstname}</p>
                        <p>{contact.lastname}</p>
                    </>
                )
            }))}
            <div className='container-fluid section1 bg-teal-100 border-t-4 border-teal-500'>
                <div>
                    <p className='title'>LOOCK BLOG</p>
                </div>
            </div>
            <div className='container contact-block'>
                <div className='society'>
                    society name
                </div>
                <div className='info'>
                    +33 07 54 21 85 21
                </div>
                <div className='info'>
                    info@loock.fr
                </div>
            </div>
        </>
    )
}