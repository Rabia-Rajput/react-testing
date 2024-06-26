 import { render, screen } from '@testing-library/react';
 import App from '../App';
describe('renders CommentBox and CommentList components',()=>{
    it('renders CommentBox ', () => {
        render(<App />);
       const commentBox  = screen.getByText(/Comment Box/i);
     
        expect(commentBox ).toBeInTheDocument();
      });
      it('renders CommentList component', () => {
        render(<App />);
     const commentList =screen.getByText(/Comment List/i);
     expect(commentList ).toBeInTheDocument();
    });
})

