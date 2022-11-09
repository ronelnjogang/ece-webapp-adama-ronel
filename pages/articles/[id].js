import React from "react";

import fs from "fs";
import matter from "gray-matter";
import md from "markdown-it";

import Link from 'next/link'


export async function getStaticPaths() {
  // get  ids
  const files = fs.readdirSync("posts");
  const paths = files.map((filename) => ({
    params: {
      id: filename.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { id } }) {
  // get content for each blog
  console.log(id);
  const mdfile = fs.readFileSync(`posts/${id}.md`);
  const { data: frontMatter, content } = matter(mdfile);

  return {
    props: {
      frontMatter,
      content,
    },
  };
}

function BlogPage({ frontMatter, content }) {
  console.log(frontMatter);
  console.log(content);
  return (
    <>
      <div className="title_box">
        <p className='title'>{frontMatter.title}</p>
      </div>
      <div className='container p-10 article_block'>
        <article
          className='prose lg:prose-xl'
          dangerouslySetInnerHTML={{ __html: md().render(content) }}
        />
      </div>
    </>
  );
}

export default BlogPage;