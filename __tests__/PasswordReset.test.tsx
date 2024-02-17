
import PasswordResetUi from '@/app/components/passwordReset/PasswordResetUi';
import { render, screen } from '@testing-library/react';

jest.mock("next/navigation", () => ({
  useRouter() {
    return {
      prefetch: () => null
    };
  }
}));

test('Reset password component should have header text', () => {
    render(<PasswordResetUi />); 
    const header = screen.getByRole("heading");
    const headerText = 'Welcome to IV Voucher Management';
    expect(header).toHaveTextContent(headerText);
  });

  test('Reset password component should have button', () => {
    render(<PasswordResetUi />); 
    const buttonElement = screen.getByRole('button'); 
    expect(buttonElement).toHaveClass('authentication__btn');
  });
  
  test('Reset passwordt component should have input fields', () => {
    render(<PasswordResetUi />); 
    const inputElementEmail = screen.getByTestId('input-field-email'); 
    expect(inputElementEmail).toHaveClass('logintext__input');
    const inputElementPassword = screen.getByTestId('input-field-password'); 
    expect(inputElementPassword).toHaveClass('logintext__input');
  });
  

  

