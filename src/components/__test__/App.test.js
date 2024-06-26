// import { render, screen } from '@testing-library/react';
// import App from '../App';

// test('renders CommentBox and CommentList components', () => {
//   render(<App />);
//   const commentBox  = screen.getByText(/Comment Box/i);
//   expect(commentBox ).toBeInTheDocument();
// });

 import { render, screen } from '@testing-library/react';
 import App from '../App';
 import React from 'react';
 import ReactDOM from 'react-dom';
 it('shows a comment box', () => {
   const div= document.createElement('div');
   ReactDOM.render(<App />, div);
  expect(div.innerHTML).toContain('Comment Box')
 ReactDOM.unmountComponentAtNode(div);
 });

