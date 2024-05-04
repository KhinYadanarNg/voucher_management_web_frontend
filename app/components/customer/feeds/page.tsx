import { getCurrentUser } from "@/app/auth/getCurrentUser";
import React from "react";
import NullData from "../../common/NullData";
import Container from "../../Container";
import { fetchAllActiveFeedListByCustomer } from "@/app/service/feed";
import FeedListTable from "./FeedListTable";
import { pageSize } from "@/utils";
import Loading from "../../common/Loading";

const getAllActiveFeedListByCustomer = async (email: string, page: number, size: number) => {
    try {
        const feeds = await fetchAllActiveFeedListByCustomer(email, page - 1, size);
        return feeds;
    } catch (error) {
        console.log(error);
    } finally {
    }
};

export default async function FeedListByCustomer({ searchParams }: {
    searchParams: {
        page: string;
    }
}) {
    const currentUser = await getCurrentUser();

    if (!currentUser || currentUser.role !== "CUSTOMER") {
        return <NullData title="Oops! Access denied" />;
    }

    const page =
        typeof searchParams.page === 'string' ? Number(searchParams.page) : 0
        const size = pageSize
    const feeds = await getAllActiveFeedListByCustomer(currentUser.email, page, size);

    return (
        <div>
            {feeds ? (
                <Container>
                    <FeedListTable feeds={feeds.data} pageNumber={page} totalRecord={feeds.totalRecord} size={size} />
                </Container>
            ) : (
                // <NullData title="Fetch Data failed" />
                <Loading/>
            )}
        </div>
    );
};

