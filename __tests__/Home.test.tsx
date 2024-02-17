import { render, screen } from '@testing-library/react';
import Home from '@/app/page'; // Import the component you want to test

jest.mock("next/navigation", () => ({
  useRouter() {
    return {
      prefetch: () => null
    };
  }
}));

test('Home component should have text', () => {
  render(<Home />); // Arrange: Render the component

  const myElem = screen.getByText('This is campaign list'); // Act: Get the element with text 'Login'

  expect(myElem).toBeInTheDocument(); // Assert: Check if the element is in the document
});
