import { render, screen } from '@testing-library/react';
import App from '../../App';

test('renders learn react link', () => {
  render(<App />);
  console.log('Yo Yo');
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders learn react', () => {
  render(<App />);
  console.log('Yo Yo');
  const linkElement = screen.getByText(/react/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders random text', () => {
  render(<App />);
  console.log('Yo Yo');
  const linkElement = screen.getByText(/Angular/i);
  expect(linkElement).toBeInTheDocument();
});

