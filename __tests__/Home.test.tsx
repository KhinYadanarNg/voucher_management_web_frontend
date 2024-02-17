import { render, screen, waitFor } from '@testing-library/react';
import Home from '@/app/page'; // Import the component you want to test

jest.mock('next/navigation');

describe('Home Component', () => {
  
  it('renders CampaignList within Container', async () => {
    render(<Home />);
    
    // Wait for the CampaignList component to appear in the document
    await waitFor(() => {
      
      const campaignListElement = screen.getByTestId('campaign-list');
      expect(campaignListElement).toBeInTheDocument();
    });
  });

  //Add more test here
});


// test('Home component should have Login text', () => {
//   render(<Home />); // Arrange: Render the component

//   const myElem = screen.getByText('Login'); // Act: Get the element with text 'Login'

//   expect(myElem).toBeInTheDocument(); // Assert: Check if the element is in the document
// });