
export async function registerUser(email: string, username: string, password: string, role: string, image?: File) {
    console.log("Printing registerUser api call : ");
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

    console.log("Printing the NEXT_PUBLIC_BACKEND_URL : ", process.env.NEXT_PUBLIC_BACKEND_URL);
    console.log("Printing the Full NEXT_PUBLIC_BACKEND_URL : ", `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/user/create`);
    console.log("Printing registerUser api call json request : ", JSON.stringify({

        email,
        username,
        password,
        role

    }));
    try {
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/user/create`,
            {
                method: 'POST',
                body: formData

            });
        console.log("Printing registration response : ", response);
        const result = await response.json();
        console.log("Printing registration response json : ", result);
        return result;
    } catch {
        return { message: "Fetch data failed", result: [] };
    }

}

export async function forgotPassword(email: string, password: string) {
    console.log("Printing forgotPassword api call : ");

    let body = {
        email,
        password
    }

    const headers = {
        'Content-Type': 'application/json'
    };

    console.log("Printing forgotPassword api call json request : ", JSON.stringify(body));
    const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/user/resetPassword`,
        {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(body)

        });

    console.log("Printing forgot password response : ", response);
    const result = await response.json();
    console.log("Printing forgot password response json : ", result);
    return result;
}

export async function loginUser(email: string, password: string) {
    console.log("Printing loginUser api call : ");
    let body = {
        email,
        password
    }

    const headers = {
        'Content-Type': 'application/json'
    };
    console.log("Printing loginUser api call json request : ", JSON.stringify(body));
    const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL_INT}/api/user/login`,
        {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(body)

        });

    console.log("Printing the BackendURL : ", process.env.NEXT_PUBLIC_BACKEND_URL_INT);
    console.log("Printing the Full BackendURL : ", `${process.env.NEXT_PUBLIC_BACKEND_URL_INT}/api/user/create`);
    console.log("Printing login response : ", response);
    const result = await response.json();
    console.log("Printing login response json : ", result);
    return result;
}

export const verifyUser = async (verifyId: string) => {

    const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/user/verify?verifyid=${verifyId}`,
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        }
    );

    const data = await res.json();
    return data;
};
