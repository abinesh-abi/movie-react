import React, { useState, createContext } from 'react';
export const BlogContext = createContext({});
export const BlogPro = (props) => {
  const [blogs, setBlogs] = useState([
    {
      title: 'first blog',
      discription: 'my first blog',
      id: 1,
    },
    {
      title: 'second blog',
      discription: 'my second blog',
      id: 2,
    },
    {
      title: 'third blog',
      discription: 'my third blog',
      id: 3,
    },
  ]);
  return (
    <BlogContext.provider value={[blogs]}>{props.children}</BlogContext.provider>
  );
};
