import { render, screen, waitFor } from '@testing-library/react';
import Login from '@/app/components/login/page'; // Import the component you want to test

jest.mock('next/navigation');

describe('Login Component', () => {
  it('renders Login within Container', async () => {
    render(<Login />);
    
    // Wait for the Login component to appear in the document
    await waitFor(() => {
      
      const campaignListElement = screen.getByTestId('login-page');
      expect(campaignListElement).toBeInTheDocument();
    });
  });

  //Add more test here
});