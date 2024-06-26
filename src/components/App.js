// src/App.js

import React, { useState } from 'react';
import CommentBox from './CommentBox';
import CommentList from './CommentList';

const App = () => {
  const [comments, setComments] = useState([]);

  const addComment = (newComment) => {
    setComments([...comments, newComment]);
  };

  return (
    <div>
      <CommentBox addComment={addComment} />
      <CommentList comments={comments} />
    </div>
  );
};

export default App;
