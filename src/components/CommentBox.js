
import React, { useState } from 'react';

const CommentBox = ({ addComment }) => {
  const [comment, setComment] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (comment.trim() !== '') {
      addComment(comment);
      setComment(''); 
    }
  };

  const handleChange = (event) => {
    setComment(event.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h4>Add A Comment</h4>
        <textarea value={comment} onChange={handleChange}></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CommentBox;
