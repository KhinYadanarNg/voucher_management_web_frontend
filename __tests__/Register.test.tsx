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

  //Add more test here
});