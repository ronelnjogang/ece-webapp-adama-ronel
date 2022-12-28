import { useState, useEffect } from 'react'
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react'
import Link from 'next/link'
export default function Account({ session }) {
  const supabase = useSupabaseClient()
  const user = useUser()
  //const id = user.id
  const [loading, setLoading] = useState(true)
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [categories, setCategories] = useState('');
  const [tags, setTags] = useState('');
 
  useEffect(() => {
    //getProfile()
  }, [session])

  async function updateArticle() {
    try {
      setLoading(true)

      let { data, error, status } = await supabase
        .from('articles')
        .select(`title, content, categories, tags`)
       
        .single()

      if (error && status !== 406) {
        throw error
      }

      if (data) {
        setTitle(data.title)
        setContent(data.content)
        setCategories(data.categories)
        setTags(data.tags)
      }
    } catch (error) {
      alert('Error loading user data!')
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  
  

  async function fetchData({ title, content, categories, tags}) {
    try {
      setLoading(false)

      const updates = {
        id: user.id,
        title,
        content,
        categories,
        tags,
        updated_at: new Date().toISOString(),
      }

      let { error } = await supabase.from('articles').upsert(updates)
      if (error) throw error
      alert('article created!')
    } catch (error) {
      alert('Error updating the data!')
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="form-widget">
        
    <div>
        <label htmlFor="title"  style={{ color: "white" }}>Title</label>
      
        <input id="title" type="text" value={categories || ''}
         onChange={(e) => setTitle(e.target.value) }/>
    </div>
      <div>
        <label htmlFor="content"  style={{ color: "white" }}>Content</label>
        <input
          id="content"
          type="text"
          value={content || ''}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="categories"  style={{ color: "white" }}>Categories</label>
        <input
          id="categories"
          type="text"
          value={categories || ''}
          onChange={(e) => setCategories(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="tags"  style={{ color: "white" }}>Tags</label>
        <input
          id="tags"
          type="text"
          value={tags || ''}
          onChange={(e) => setTags(e.target.value)}
        />
      </div>

      <div>
        <button
          className="button primary block"
          onClick={() => updateArticle({ title, content, categories, tags })}
          disabled={loading}
        >
       {loading ? 'Loading ...' : 'Save'}
        </button>
      </div>

      <div>
      <Link href="/"> 
        <button className="button block" style={{ backgroundColor: 'red'}} onClick={() => supabase.auth.signOut()}>
          Sign Out
        </button>
        </Link>
      </div>
    </div>
  )
}