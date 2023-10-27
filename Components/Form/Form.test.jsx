import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import Form from '.';

describe('form', () => {

  it('renders form as expected', () => {
    render(<Form />);

    let form = screen.getByTestId('form-span');
    expect(form).toHaveTextContent('URL');
  })

  it('selects the correct method', () =>{
    render(<Form />);

    const get = screen.getByTestId('form-get')
    const post = screen.getByTestId('form-post')
    const put = screen.getByTestId('form-put')
    const formDelete = screen.getByTestId('form-delete')

    expect(get).toHaveStyle('background-color: green')
    expect(post).toHaveStyle('background-color: grey')

    fireEvent.click(post)

    expect(post).toHaveStyle('background-color: green')

    fireEvent.click(put)

    expect(put).toHaveStyle('background-color: green')

    fireEvent.click(formDelete)

    expect(formDelete).toHaveStyle('background-color: red')
  })

})