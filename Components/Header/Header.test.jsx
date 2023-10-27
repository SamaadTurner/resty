import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Header from '.';

describe('Header', () => {
  it('renders header as expected', () => {
    render(<Header />);

    let h1 = screen.getByTestId('header-h1');
    expect(h1).toHaveTextContent('RESTy');
    
  })
})