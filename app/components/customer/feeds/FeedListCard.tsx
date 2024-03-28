import React from 'react'
import NullData from '../../common/NullData';
import FeedCard from './FeedCard';
import { FeedProps } from '@/type/feed';


const FeedListCard = ({ feeds }: { feeds: FeedProps[] }) => {

    return (
        <div data-testid='feed-list-by-customer'>
            {feeds && feeds.length > 0 ? (
                <div>
                    <section>
                        <div className='home__campaigns-wrapper'>
                            {feeds.map((feed: FeedProps) => (
                                <FeedCard feed={feed} key={feed.feedId} />
                            ))}
                        </div>
                    </section></div>) : (
                <NullData title="There is no feed list" />
            )}
        </div>
    )
}

export default FeedListCard