import Container from '@/app/components/Container'
import React from 'react'
import CampaignDetails from './CampaignDetails'

export default async function Campaign({params} : {params: {campaignId: string}}){

    console.log("Campaign params", params)
    return(
        <div>
            <Container>
                <CampaignDetails/>
            </Container>
        </div>
    )
}