export const fetchAllActiveFeedListByCustomer = async (email: string, page?: number, size?: number) => {
    console.log("Printing fetchAllActiveFeedListByCustomer api call : ");
    const requestBody = {
        email
    };

    let url = ""
    if (page != undefined) {
        url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/feed/getAllByEmail?page=${page}&size=${size}`
    } else {
        url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/feed/getAllByEmail`
    }
    console.log("Printing fetchAllActiveFeedListByCustomer api url : ", { url });
    console.log("Printing fetchAllActiveFeedListByCustomer api json request : ", JSON.stringify(requestBody));
    const res = await fetch(
        `${url}`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(requestBody),
        })

    console.log("Printing fetchAllActiveFeedListByCustomer api  response : ", res);
    const data = await res.json()
    console.log("Printing fetchAllActiveFeedListByCustomer api json response : ", data);
    return data;
}