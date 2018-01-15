import React from 'react';

const Article = (props) => {
  console.log(props);
  const {article, author} = props;
  return (
    <div>
      <div>{article.title}</div>
      <div>{article.date}</div>
      <div><a href={author.website}>{article.firstName}{author.lastName}</a></div>
      <div>{article.body}</div>
    </div>
        
  );
};

export default Article;