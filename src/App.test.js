import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText('hi there!');
  expect(linkElement).toBeInTheDocument();
});

// import { render, screen } from '@testing-library/react';
// import App from './App';
// import React from 'react';
// import ReactDOM from 'react-dom';
// it('renders learn react link', () => {
//   const div= document.createElement('div');
//   ReactDOM.render(<App />, div);
//   expect(div.innerHTML).toContain(('hi there!'))
// ReactDOM.unmountComponentAtNode(div);
// });

