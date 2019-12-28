import React from 'react';
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";

const Blog = (props) => {
  const {fileRelativePath, title, ...data} = props;
  console.log('props data', data)
  return (
    <div>
      {title}
      <ReactMarkdown source={data.content} />
    </div>
  );
};

Blog.getInitialProps = async function(ctx) {
  const { id } = ctx.query
  const content = await import(`../../posts/${id}.md`)
  const config = await import(`../../data/config.json`)
  const data = matter(content.default)

  console.log('data', data);

  return {
    fileRelativePath: `./posts/${id}.md`,
    title: config.title,
    ...data,
  }
}

export default Blog;