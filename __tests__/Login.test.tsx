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

  test('Login component should have header text', () => {
    render(<Login />);
    const header = screen.getByRole("heading");
    const headerText = 'Welcome to IV Voucher';
    expect(header).toHaveTextContent(headerText);
  });

  test('Login component should have button', () => {
    render(<Login />);
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toHaveClass('authentication__btn');
  });

  test('Login component should have input fields', () => {
    render(<Login />);
    const inputElementEmail = screen.getByTestId('input-field-email');
    expect(inputElementEmail).toHaveClass('logintext__input');
    const inputElementPassword = screen.getByTestId('input-field-password');
    expect(inputElementPassword).toHaveClass('logintext__input');
  });
});