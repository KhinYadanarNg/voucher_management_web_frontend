import React from 'react'
import Registration from './Registration'
import Container from '../Container'
import FormWrap from '../common/FormWrap'

const page = () => {
    return (
        <Container>
            <FormWrap>
                <Registration />
            </FormWrap>
        </Container>
    )
}

export default page