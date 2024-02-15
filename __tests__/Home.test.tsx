import { render, screen } from '@testing-library/react';
import Home from '@/app/page'; // Import the component you want to test

test('Home component should have Login text', () => {
  render(<Home />); // Arrange: Render the component

  const myElem = screen.getByText('Login'); // Act: Get the element with text 'Login'

  expect(myElem).toBeInTheDocument(); // Assert: Check if the element is in the document
});
