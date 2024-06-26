

import React from 'react';

const CommentList = ({ comments }) => {
  return (
    <div>
      <h4>Comment List</h4>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>{comment}</li>
        ))}
      </ul>
    </div>
  );
};

export default CommentList;
