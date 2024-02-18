export async function registerUser(email: string, username: string, password: string, role: string, image?: File) {
    let formData = new FormData();
    const blob = new Blob([JSON.stringify({

        email,
        username,
        password,
        role

    })], {
        type: "application/json"
    })

    formData.append('user', blob);
    if (image != null) {
        formData.append("image", image);
    }

    const response = await fetch(
        `http://localhost:8080/api/user/create`,
        {
            method: 'POST',
            body: formData

        });

    const result = await response.json();
    return result;
}

export async function forgotPassword(email: string, password: string) {

    let body = {
        email,
        password
    }

    const headers = {
        'Content-Type': 'application/json'
    };

    const response = await fetch(
        `http://localhost:8080/api/user/resetPassword`,
        {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(body)

        });

    const result = await response.json();
    return result;
}

export const fetchCampaigns = async () => {
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
    const response = JSON.parse(result.toString());
    return response
}