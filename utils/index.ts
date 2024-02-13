
export const isValidateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(email);
    return isValid;
}

export const hasWhiteSpace = (text: string) => {
    return /\s/g.test(text);
}

export const fetchCampaigns = () => {
    const result =
        [
            {
                "id": 1,
                "code": "VOUCHER10",
                "discount": 10,
                "description": "Get 10% off on all products",
                "store": "NTUC",
                "minimumSpend": 100,
                "policy": "Term and condition to use the voucher, enjoy with our voucher by registering as a member. "
            },
            {
                "id": 2,
                "code": "VOUCHER20",
                "discount": 20,
                "description": "Get 20% off on your next purchase",
                "store": "Cold Storage",
                "minimumSpend": 100,
                "policy": "Term and condition to use the voucher, enjoy with our voucher by registering as a member. "
            },
            {
                "id": 3,
                "code": "FREESHIP",
                "discount": 30,
                "description": "Free shipping on orders above $50",
                "store": "Zara",
                "minimumSpend": 100,
                "policy": "Term and condition to use the voucher, enjoy with our voucher by registering as a member. "
            }
        ]
    return result;
}