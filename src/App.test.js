import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Home } from './Home';

const searchProccess = (searchValue) => {
  const buttons = screen.getAllByRole("button");
  const searchButton = buttons[1];
  fireEvent.click(searchButton);
  const secondSearchButton = screen.getByRole("button");
  const searchInput = screen.getByRole("textbox");
  fireEvent.change(searchInput, { target: { value: searchValue } })
  fireEvent.click(secondSearchButton);
};

test('Should Search A Place', () => {
  render(<Home />)
  searchProccess("");
  expect(screen.getByText(/No results Found!/i)).toBeInTheDocument();
});

test('Should See Results Of A Place', () => {
  render(<Home />)
  searchProccess("Cundinamarca");
  expect(screen.getByText(/Cabaña A/i)).toBeInTheDocument();
});