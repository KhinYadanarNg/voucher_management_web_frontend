import { render, screen, waitFor } from '@testing-library/react';
import Home from '@/app/page'; // Import the component you want to test

jest.mock('next/navigation');
global.ResizeObserver = ResizeObserver;

global.fetch = jest.fn();
jest.mock('next-auth');

describe('Home Component', () => {
  
  it('renders CampaignList within Container', async () => {
    render(<Home />);
    
    // Wait for the CampaignList component to appear in the document
    await waitFor(() => {
      
      const homeTestElement = screen.getByTestId('home');
      expect(homeTestElement).toBeInTheDocument();
    });
  });

  //Add more test here
});
