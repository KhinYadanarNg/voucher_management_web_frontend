import { getCurrentUser } from "@/app/auth/getCurrentUser";

// export const serverURL = process.env.NEXT_PUBLIC_APP_API_ENDPOINT;
export const isValidateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(email);
    return isValid;
}

export const hasWhiteSpace = (text: string) => {
    return /\s/g.test(text);
}

export const getCurrentUserEmail = async (useremail: string) => {
  let email = useremail;

  if (email.length > 0) {
    return email;
  } else {
    const currentUser = await getCurrentUser();

    if (currentUser?.email) {
      return currentUser.email;

    } else throw new Error('Undefined email')
  }
}
