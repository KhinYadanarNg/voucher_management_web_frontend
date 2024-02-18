import { render, screen, waitFor } from '@testing-library/react';
import Register from '@/app/components/register/page'; // Import the component you want to test

jest.mock('next/navigation');

describe('Register Component', () => {
  it('renders Register within Container', async () => {
    render(<Register />);
    
    // Wait for the Register component to appear in the document
    await waitFor(() => {
      
      const campaignListElement = screen.getByTestId('register-page');
      expect(campaignListElement).toBeInTheDocument();
    });
  });

  test('Registration component should have header text', () => {
    render(<Register />); 
    const header = screen.getByRole("heading");
    const headerText = 'Welcome to IV Voucher Management';
    expect(header).toHaveTextContent(headerText);
  });
});