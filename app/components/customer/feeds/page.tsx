import { getCurrentUser } from "@/app/auth/getCurrentUser";
import React from "react";
import NullData from "../../common/NullData";
import Container from "../../Container";
import FeedListCard from "./FeedListCard";
import { fetchAllActiveFeedListByCustomer } from "@/app/service/feed";

const getAllActiveFeedListByCustomer = async (email: string) => {
    try {
        const feeds = await fetchAllActiveFeedListByCustomer(email);
        return feeds;
    } catch (error) {
        console.log(error);
    } finally {
    }
};

export default async function FeedListByCustomer() {
    const currentUser = await getCurrentUser();

    if (!currentUser || currentUser.role !== "CUSTOMER") {
        return <NullData title="Oops! Access denied" />;
    }

    const feeds = await getAllActiveFeedListByCustomer(currentUser.email);

    return (
        <div>
            {feeds ? (
                <Container>
                    <FeedListCard feeds={feeds.data} />
                </Container>
            ) : (
                <NullData title="Fetch Data failed" />
            )}
        </div>
    );
};

