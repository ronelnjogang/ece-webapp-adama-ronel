import {createClient} from '@supabase/supabase-js'


export default function Contact({ post }) {
  const router = useRouter()
  if (router.isFallback) {
    return <div>Loading...</div>
  }
  return (
    <div>
      <h1 className="text-5xl mt-4 font-semibold tracking-wide">{contact.firstname}</h1>
      <p className="text-sm font-light my-4">by {contact.lastname}</p>
      <div className="mt-8">
        <p className='prose' children={contact.email} />
      </div>
    </div>
  )
}

export async function getStaticPaths() {
  const { data, error } = await supabase
    .from('contacts')
    .select('*')
  const paths = data.map(post => ({ params: { id: JSON.stringify(post.id) }}))
  return {
    paths,
    fallback: true
  }
}

export async function getStaticProps() {

    const supabaseAdmin = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL || '', 
        process.env.SUPABASE_SERVICE_ROLE_KEY || ''
      )
    const {data} = await supabaseAdmin.from('contacts').select('*').order('id')
    return {
        props: {
            contacts: data,
        },
    }
  }