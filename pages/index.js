import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

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
    <div>
      <Header></Header>
      <div class='container-fluid section1'>
        <div>
          <p class='title'>LOOCK BLOG</p>
        </div>
 
      </div>
      <main>
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
      </main>
      <Footer></Footer>
    </div>
  );
}
