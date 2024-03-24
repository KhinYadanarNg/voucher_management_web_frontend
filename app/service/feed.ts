export const fetchAllActiveFeedListByCustomer = async (email: string) => {
    const requestBody = {
        email
    };
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/feed/getAllByEmail`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(requestBody),
        })
    const data = await res.json()
    return data;
}