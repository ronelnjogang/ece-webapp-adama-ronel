import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import CreateArticle from './articles/createArticle';

import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";

export async function getStaticProps() {
  // get the post
  const files = fs.readdirSync("posts");
  const posts = files.map((filename) => {
    const slug = filename.replace(".md", "");
    const readFiles = fs.readFileSync(`posts/${filename}`);
    const { data: frontMatter } = matter(readFiles);

    return {
      slug,
      frontMatter,
    };
  });

  return {
    props: {
      posts,
    },
  };
}

export default function Home({ posts }) {
  console.log(`posts: ${posts}`);
  return (
    <main>
      <div className='container-fluid section1'><div>
        <p class='title'>LOOCK BLOG</p>
      </div></div>
      <div className='container post-container'>
        {posts?.map((post) => {
          return (
            <Link key={`${post.slug}`} href={`articles/${post.slug}`}>
              <a>
                <div class="post-section">
                  <div class="post d-flex flex-direction-row">
                    <p class='article-number'>{post.frontMatter.no}</p>
                    <div class='article'>
                      <h1 className='text-xl py-1 post-title'>{post.frontMatter.title}</h1>
                      <p>{post.frontMatter.desc}</p>
                    </div>
                  </div>
                </div>
              </a>
            </Link>
          );
        })}
      </div>
      <div>
      <Link href="/articles/createArticle">     
      <button type='button' style={{ backgroundColor: 'green', marginLeft: '800px', fontSize: '14px' }}>Create New Article</button>
      </Link>
      </div>
      <div>
      <form>
      <label for="name" style={{ color: "white" }}>Name:</label>
      <input type="text" id="name" name="name" style={{ background: "white" }}></input>
      <label for="email" style={{ color: "white" }}>Email:</label>
      <input type="email" id="email" name="email" style={{ background: "white" }}></input><br></br>
      <label for="comment" style={{ color: "white" }}>Comment:</label>
        <textarea id="comment" name="comment" style={{ width: 7000 }} ></textarea><br></br>
        <input type="submit" value="Submit my comment" style={{ backgroundColor: 'green'}}></input>
      </form>
      </div>
    </main>
  );
}
