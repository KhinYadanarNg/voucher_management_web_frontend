import { render, screen, waitFor } from '@testing-library/react';
import Register from '@/app/components/register/page'; // Import the component you want to test
import RegisterForm from '@/app/components/register/RegisterForm';

jest.mock('next/navigation');

describe('Register Component', () => {
  it('renders Register within Container', async () => {
    render(<RegisterForm />);
    
    // Wait for the Register component to appear in the document
    await waitFor(() => {
      
      const registrationPageElement = screen.getByTestId('register-page');
      expect(registrationPageElement).toBeInTheDocument();
    });
  });

  test('Registration component should have header text', () => {
    render(<RegisterForm />); 
    const header = screen.getByRole("heading");
    const headerText = 'Welcome to IV Voucher Management';
    expect(header).toHaveTextContent(headerText);
  });
});