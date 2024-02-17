import React from 'react'
import Login from './Login'
import Container from '../Container'
import FormWrap from '../common/FormWrap'

const page = () => {
  return (
    <Container>
      <FormWrap>
        <Login />
      </FormWrap>
    </Container>
  )
}

export default page